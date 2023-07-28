import React from 'react'
import { Card, Col, Row } from 'antd';
import { GoCpu } from 'react-icons/go';
import { BsMotherboard } from 'react-icons/bs';
import { CgSmartphoneRam } from 'react-icons/cg';
import { ImPowerCord } from 'react-icons/im';
import { GrStorage } from 'react-icons/gr';
import { FiMonitor } from 'react-icons/fi';
const categories=[
    {
    label:"Motherboard",
    name:"Motherboard",
    icons:<BsMotherboard style={{fontSize:"4em"}}/>,
},
    {
    label:"RAM",
    name:"RAM",
    icons:<CgSmartphoneRam style={{fontSize:"4em"}}/>,
},
    {
    label:"CPU / Processor",
    name:"CPU",
    icons:<GoCpu style={{fontSize:"4em"}}/>,
},
    {
    label:"PSU",
    name:"Power Supply Unit",
    icons:<ImPowerCord style={{fontSize:"4em"}}/>,
},
    {
    label:"Storage Device",
    name:"Storage Device",
    icons:<GrStorage style={{fontSize:"4em"}}/>,
},
    {
    label:"Monitor",
    name:"Monitor",
    icons:<FiMonitor style={{fontSize:"4em"}}/>,
},


]

const Categories = () => {
  return (
    <>
     <Row style={{margin:"2em 0.5em"}} justify="center"  gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      >
        {categories.map(item=>(
 <Col
 className="gutter-row"


>
<Card
title={item?.label}
bordered={false}
style={{
width: 300,
}}
>
<p style={{textAlign:"center"}}>{item?.icons}</p>
<p  style={{textAlign:"center"}}>{item?.name}</p>
{/* <p>Card content</p> */}
</Card>    
</Col>
        ))}
     
    
      {/* <Col
        span={6}
        xs={{
          order: 2,
        }}
        sm={{
          order: 1,
        }}
        md={{
          order: 4,
        }}
        lg={{
          order: 3,
        }}
      >
        2 col-order-responsive
      </Col>
      <Col
        span={6}
        xs={{
          order: 3,
        }}
        sm={{
          order: 4,
        }}
        md={{
          order: 2,
        }}
        lg={{
          order: 1,
        }}
      >
        3 col-order-responsive
      </Col>
      <Col
        span={6}
        xs={{
          order: 4,
        }}
        sm={{
          order: 3,
        }}
        md={{
          order: 1,
        }}
        lg={{
          order: 2,
        }}
      >
        4 col-order-responsive
      </Col> */}
    </Row>
     
    </>
  )
}

export default Categories