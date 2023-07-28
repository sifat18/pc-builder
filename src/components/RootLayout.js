import {
    ProfileOutlined,
    PoweroffOutlined,
    MobileOutlined,
    UserOutlined,
    FacebookFilled,
    LinkedinFilled,
    GoogleSquareFilled,
    TwitterSquareFilled,
  } from "@ant-design/icons";
  import { Button, Layout, Menu } from "antd";
  const { Header, Content, Footer } = Layout;
  import styles from "@/styles/Home.module.css";
  import Link from "next/link";
import DropDown from "./DropDown";
  
  const RootLayout = ({ children }) => {
    return (
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="brand-logo">
            <h1>
              <Link
                href="/"
                style={{
                  color: "white",
                  backgroundColor: "#404040",
                  padding: "5px 10px",
                  borderRadius: "3px",
                }}
              >
                PC_BUILDER
              </Link>
            </h1>
          </div>
          <Menu theme="dark" mode="vertical" className={styles.menu_items}>
            <Link href="/allNews">
              <items>
                {/* <ProfileOutlined /> */}
               <DropDown/>
              </items>
            </Link>
            <Link href="/about">
              <items
                style={{
                  margin: "0px 25px",
                }}
              >
                <UserOutlined />
                Sign In
              </items>
            </Link>
            <Link href="/contact">
              <items>
                {/* <MobileOutlined />  */}
                <Button
          type="primary"
          icon={<PoweroffOutlined />}
         
          onClick={() => enterLoading(1)}
        >
          PC BUILDER
        </Button>
              </items>
            </Link>
          </Menu>
        </Header>
  
        <Content
          style={{
            padding: "0 0",
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
  
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <div className={styles.line}></div>
          <h2
            style={{
              fontSize: "28px",
            }}
          >
            PC_BUILDER
          </h2>
          <p className={styles.social_icons}>
            <Link href="">
              <FacebookFilled />
            </Link>
            <Link href="">
              <TwitterSquareFilled />
            </Link>
            <Link href="">
              <GoogleSquareFilled />
            </Link>
            <Link href="">
              <LinkedinFilled />
            </Link>
          </p>
          PC_BUILDER ©2023 
        </Footer>
      </Layout>
    );
  };
  export default RootLayout;