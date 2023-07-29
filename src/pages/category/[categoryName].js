import RootLayout from "@/components/RootLayout";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta"; // Correct import
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductsByCategory = ({ productByCategory }) => {
    const router = useRouter();
    const { build } = router.query;
  return (
    <>
      <Row
        style={{ margin: "5em 0.5em" }}
        justify="center"
        gutter={[8, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      >
        {productByCategory.map((item) => (
          <Link key={item?.id} href={`/details/${item?.id}`}>
            <Col style={{marginTop:"4em"}}className="gutter-row">
              <Card
                hoverable
                style={{ width: 270 }}
                cover={<Image alt="example" src={item?.image} width="240" height={240} />}
              >
                <Meta title={item?.product}  /> {/* Use Meta correctly */}
                <p>Price: {item?.price}</p>
                <p>Category: {item?.category}</p>
                <p>Rating: {item?.rating}</p>
                <p>{item?.status}</p>
                {build ?  <Button type="text">Add to PC Builder</Button>:null}
                
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    </>
  );
};

export default ProductsByCategory;

ProductsByCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/data`);
  const data = await res.json();
  const paths = data?.map((item) => ({
    params: {
      categoryName: `${item?.category}`,
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/data`);
  const product = await res.json();
  const productByCategory = product?.filter((item) => item.category === params?.categoryName); // Correct variable name
  return {
    props: { productByCategory },
  };
};
