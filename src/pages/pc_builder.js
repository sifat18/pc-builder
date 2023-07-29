import RootLayout from "@/components/RootLayout";
import { Card, Button, Row, Col, Rate } from "antd";
import { GoCpu } from "react-icons/go";
import { BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { GrStorage } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import Link from "next/link"; //
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Product from "@/components/Product";
import { useSession } from "next-auth/react";

const categories = [
  {
    id: 1,
    label: "Motherboard",
    name: "Motherboard",
    icons: <BsMotherboard style={{ fontSize: "4em" }} />,
  },
  {
    id: 2,
    label: "RAM",
    name: "RAM",
    icons: <CgSmartphoneRam style={{ fontSize: "4em" }} />,
  },
  {
    id: 3,
    label: "CPU / Processor",
    name: "CPU",
    icons: <GoCpu style={{ fontSize: "4em" }} />,
  },
  {
    id: 4,
    label: "PSU",
    name: "Power Supply Unit",
    icons: <ImPowerCord style={{ fontSize: "4em" }} />,
  },
  {
    id: 5,
    label: "Storage Device",
    name: "Storage Device",
    icons: <GrStorage style={{ fontSize: "4em" }} />,
  },
  {
    id: 6,
    label: "Monitor",
    name: "Monitor",
    icons: <FiMonitor style={{ fontSize: "4em" }} />,
  },
];

const StackOfCards = () => {
  const { products } = useSelector((state) => state.cart);
  const { data: session } = useSession()

  return (
    <>
      <div style={{ margin: "2em 5em" }}>
        <h2 style={{ textAlign: "center" }}>Build PC By Yourself {session?.user?.name}</h2>
        <div
          style={{
            margin: "1em auto",
            height: "5px",
            fontWeight: "700",
            background: "#000",
            width: "15rem",
          }}
        ></div>
        <Row gutter={[16, 16]}>
          {categories?.map((item) => (
            <Col key={item.id} span={24}>
              <Card>
                <Row align="middle" gutter={[16, 16]}>
                  {/* Left Part */}
                  <Col xs={24} md={12} lg={8}>
                    {item?.icons}
                    <h3 style={{ margin: "0" }}>{item.name}</h3>
                  </Col>
                  {/* prod Part */}
                  <Col xs={24} md={12} lg={8}>
                    {products &&
                      products?.map((product) => (
                        <>
                          {product?.category === item.name ? (
                            <>
                              <Product product={product} />
                            </>
                          ) : null}
                        </>
                      ))}
                  </Col>
                  {/* Right Part */}
                  <Col xs={24} md={12} lg={8} style={{ textAlign: "right" }}>
                    {/* Link should wrap the button text */}
                    <Link href={`/build/${item?.name}`}>Select Component</Link>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center", margin: "2em auto" }}>
          <Button
            type="primary"
            disabled={products?.length < 6}
            onClick={() => {
              toast.success(" Build is Complete!");
            }}
          >
            Complete Build
          </Button>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default StackOfCards;

StackOfCards.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
