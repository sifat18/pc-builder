import { Col, Rate, Row } from "antd";
import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <Row align="middle" gutter={[16, 16]}>
        {/* Left Part */}
        <Col span={6}>
          <img src={product.image} alt="Product" style={{ width: "100%" }} />
          <h3 style={{ margin: "0" }}>{product.category}</h3>
        </Col>
        {/* Middle Part */}
        <Col span={12}>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
          <Rate disabled allowHalf defaultValue={product?.rating} />
          {/* <p>{product?.raitng }</p> */}
        </Col>
      </Row>
    </div>
  );
};

export default Product;
