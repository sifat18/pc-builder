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
      id:1,
    label:"Motherboard",
    name:"Motherboard",
    icons:<BsMotherboard style={{fontSize:"4em"}}/>,
},
    {
      id:2,
    label:"RAM",
    name:"RAM",
    icons:<CgSmartphoneRam style={{fontSize:"4em"}}/>,
},
    {
      id:3,
    label:"CPU / Processor",
    name:"CPU",
    icons:<GoCpu style={{fontSize:"4em"}}/>,
},
    {
      id:4,
    label:"PSU",
    name:"Power Supply Unit",
    icons:<ImPowerCord style={{fontSize:"4em"}}/>,
},
    {
      id:5,
    label:"Storage Device",
    name:"Storage Device",
    icons:<GrStorage style={{fontSize:"4em"}}/>,
},
    {
      id:6,
    label:"Monitor",
    name:"Monitor",
    icons:<FiMonitor style={{fontSize:"4em"}}/>,
},


]

const Categories = () => {
  return (
    <>
     <Row style={{margin:"2em 0.5em"}} justify="center"  gutter={[8, { xs: 8, sm: 16, md: 24, lg: 32 }]}
      >
        {categories.map(item=>(
 <Col
 className="gutter-row"
 key={item?.id}


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
     
    

    </Row>
     
    </>
  )
}

export default Categories