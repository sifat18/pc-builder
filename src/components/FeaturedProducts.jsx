import { Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const { Meta } = Card;
const FeaturedProducts = ({featuredData}) => {
    
    
  return <>
   <Row style={{margin:"2em 0.5em"}} justify="center"  gutter={[8, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      >
        {featuredData.map(item=>(
            <Link 
 key={item?.id}
            
            href={`/details/${item?.id}`}>
            
 <Col
 className="gutter-row"


>
<Card
    hoverable
    style={{ width: 270 }}
    cover={<Image alt="example" src={item?.image} width='240' height={'240'} />}
  >
    <Meta title={item?.product}  />
    <p>Price:{item?.price}</p>
    <p>Category: {item?.category}</p>
    <p>Rating:{item?.rating}</p>
    <p>{item?.status}</p>

  </Card>
</Col>
</Link>
        ))}
     
    

    </Row>
  </>;
};

export default FeaturedProducts;

