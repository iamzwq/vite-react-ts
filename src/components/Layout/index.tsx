import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { ReactComponent as HomeNavIcon } from "@/assets/icon/ic_home_nav.svg";
import { ReactComponent as AboutNavIcon } from "@/assets/icon/ic_about_nav.svg";
import { ReactComponent as SettingNavIcon } from "@/assets/icon/ic_setting_nav.svg";

const { Header, Sider, Content } = Layout;

const CustomLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <Layout>
      <Sider style={{ minHeight: "100vh" }}>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          onSelect={({ key }) => {
            navigate(key);
          }}
          items={[
            {
              key: "/home",
              icon: <HomeNavIcon />,
              label: "home",
            },
            {
              key: "/about",
              icon: <AboutNavIcon />,
              label: "about",
            },
            {
              key: "/settings",
              icon: <SettingNavIcon />,
              label: "settings",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer, fontSize: "24px" }}
        >
          header
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
