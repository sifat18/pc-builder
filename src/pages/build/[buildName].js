import RootLayout from "@/components/RootLayout";
import { add } from "@/redux/cartSlice";
import { Button, Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta"; // Correct import
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const BuildCategory = ({ productByCategory }) => {
    const router = useRouter();
    const dispatch=useDispatch()
  return (
    <>
      <Row gutter={[16, 16]}>
        {productByCategory?.map((item) => (
          <Col key={item.id} span={24}>
            <Card>
              <Row align="middle" gutter={[16, 16]}>
                {/* Left Part */}
                <Col span={6}>
                <img src={item.image} alt="Product" style={{ width: '100%' }} />
                  <h3 style={{ margin: '0' }}>{item.product}</h3>
                </Col>
                {/* Middle Part */}
                <Col span={12}>
                  {/* No details property here */}
                  <p>{item.description}</p>
                </Col>
                {/* Right Part */}
                <Col span={6} style={{ textAlign: 'right' }}>
                  {/* Link should wrap the button text */}
                  <Button type="dashed"onClick={()=>{
                    dispatch(add(item))
                    router.push('/pc_builder')

                  }}>Add this to build</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BuildCategory;

BuildCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/data`
  );
  const data = await res.json();
  const productByCategory = data?.filter((item) => item.category === params?.buildName);
  return {
    props: { productByCategory },
  };
};