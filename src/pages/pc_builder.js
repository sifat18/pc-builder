import RootLayout from '@/components/RootLayout';
import { Card, Button, Row, Col } from 'antd';
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

const StackOfCards = () => {
  return (
    <div style={{margin:"2em 5em"}}>
        <h2 style={{textAlign:"center"}}>Build PC By Yourself</h2>
        <div style={{margin:"1em auto",height:"5px",fontWeight:'700', background: "#000",width:'15rem'}}></div>
      <Row gutter={[16, 16]}>
        {categories?.map((item) => (
          <Col key={item.id} span={24}>
            <Card>
              <Row align="middle" gutter={[16, 16]}>
                {/* Left Part */}
                <Col span={6}>
                {item?.icons}
                  {/* <img src={item.image} alt="Product" style={{ width: '100%' }} /> */}
                </Col>
                {/* Middle Part */}
                <Col span={12}>
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                </Col>
                {/* Right Part */}
                <Col span={6} style={{ textAlign: 'right' }}>
                  <Button type="primary">Select Component</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StackOfCards;

StackOfCards.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  