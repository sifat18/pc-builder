import { Col, Rate, Row } from "antd";
import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <Row align="middle" gutter={[16, 16]}>
        {/* Left Part */}
        <Col xs={24} sm={12} md={6}>
          <img src={product.image} alt="Product" style={{ width: "100%" }} />
          <h3 style={{ margin: "0", textAlign: "center" }}>{product.category}</h3>
        </Col>
        {/* Middle Part */}
        <Col xs={24} sm={12} md={12}>
          <p>{product?.description}</p>
          <p>{product?.price}</p>
          <Rate disabled allowHalf defaultValue={product?.rating} />
        </Col>
      </Row>
    </div>
  );
};

export default Product;
