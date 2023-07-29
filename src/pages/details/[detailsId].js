import RootLayout from '@/components/RootLayout';
import { Col, List, Rate, Row } from 'antd';
import Image from 'next/image';
import React from 'react'

const Details = ({ product }) => {
  console.log({ product });

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          {/* On small devices, image will be on top */}
          <div style={{ marginBottom: '16px', maxWidth: '100%', textAlign: 'center' }}>
            <Image src={product?.image} layout="responsive" width={300} height={300} alt="Product Image" />
          </div>
        </Col>
        <Col xs={24} md={12}>
          {/* On small devices, details will be below the image */}
          <div style={{ background: '#f0f0f0', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div>
              <h3>Name: {product?.product}</h3>
              <p>{product?.description}</p>
              <p>Price: {product?.price}</p>
              <p>Category: {product?.category}</p>
              <p>Status: {product?.status}</p>
              {product?.["Individual Rating"] !== undefined && (
                <>
                  <span>Individual Rating-</span>
                  <Rate disabled allowHalf defaultValue={product?.["Individual Rating"]} />
                </>
              )}
              <p>
                {product?.rating !== undefined && (
                  <>
                    <span>Average Rating-</span>
                    <Rate disabled allowHalf defaultValue={product?.rating} />
                  </>
                )}
              </p>
              <div>
                <p style={{ marginTop: "2em", fontSize: "1.5em" }}>Product Features</p>
                <ul>
                  {product?.features &&
                    Object.keys(product.features).map((key) => (
                      <li key={key}>
                        <strong>{key}: </strong>
                        {product.features[key]}
                      </li>
                    ))}
                </ul>
              </div>
              {/* Other product details */}
              <p style={{ marginTop: "2em", fontSize: "1.5em" }}>Reviews</p>
              <List
                itemLayout="horizontal"
                dataSource={product?.reviews}
                renderItem={(review) => (
                  <List.Item>
                    <List.Item.Meta
                      description={
                        <>
                          <p>{review}</p>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Details;

export const getStaticPaths = async () => {
  const res = await fetch(`https://pcback-r74i.onrender.com/data`);
  const data = await res?.json();
  const paths = data?.data?.map((item) => ({
    params: {
      detailsId: `${item?.id}`,
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  
  const res = await fetch(
    `https://pcback-r74i.onrender.com/data`
  );
  const product = await res.json();
  const findData=product?.data?.find(item=>item?.id== params?.detailsId)
  console.log({findData});
  
  return {
    props: { product:findData },
  };
};

Details.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};