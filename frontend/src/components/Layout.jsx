import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Logo from "../Page/Landingpage/Logo";
import Korpa from "../Page/Landingpage/korpa";

import { Button } from "@mui/material";
import "../Page/styles/header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import "../Page/styles/footer.scss";
const { Header, Content, Footer } = {
  Header: Toolbar,
  Content: Container,
  Footer: Paper,
};
// const items = [
//   { label: "Home", key: "1" },
//   { label: "products", key: "2" },
// ];

const MyLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  // const isLandingPage = location.pathname === "/";

  const handleClick = () => {
    navigate("/product/:id");
  };
  const Click1 = () => {
    navigate("/category");
  };
  const Click2 = () => {
    navigate("/");
  };
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
    <div>
      {/* Header */}
      <Header
        position="static"
        style={{ padding: "0px", width: "100%" }}
        margin="0"
      >
        <Toolbar className="Toolbar">
          <Logo />

          <Button onClick={Click2} color="inherit">
            Home
          </Button>
          <Button onClick={handleClick} color="inherit">
            Product
          </Button>
          <Button onClick={Click1} color="inherit">
            Category
          </Button>

          <Button color="inherit">Login</Button>
          <Korpa />
        </Toolbar>
      </Header>

      {/* Main Content */}
      <Content style={{ padding: "0px" }}>{children}</Content>
      {/* Footer */}
      <Footer>
        {/* <AppBar position="static" style={{ marginTop: "20px" }}>
          <Toolbar>
            <Typography variant="body1">Footer Content</Typography>
          </Toolbar>
        </AppBar> */}
        <footer>
          <div className="divFootera">
            <div className="divFootera1 footer1">
              <Logo />
              <h1>GAMMA</h1>
              <h3>Drones and Action Cammeras</h3>
            </div>
            <div className="divFootera2">
              <div className="divFootera1">
                <h3>Shop</h3>
                <p>Drones</p>
                <p>Cameras</p>
                <p>Accessories</p>
                <p>Sale</p>
              </div>
              <div className="divFootera1">
                <h3>Info</h3>
                <p>About</p>
                <p>Forum</p>
                <p>Contact</p>
                <p>Telephone</p>
              </div>
            </div>
            <div className="divFootera2">
              <div className="divFootera1">
                <h3>Support</h3>
                <p>FAQ</p>
                <p>Shipping & Returns</p>
                <p>Store Policy</p>
                <p>Payment Methods</p>
              </div>
              <div className="divFootera1">
                <h3>Contact</h3>
                <p>Customer Service:</p>
                <p>123-456-7890</p>
                <p>info@my-domain.com</p>
                <p>Sale</p>
              </div>
            </div>
          </div>
          <div className="footer2">
            © 2035 by Gamma. Powered and secured by Wix
          </div>
        </footer>
      </Footer>
    </div>
  );
};

export default MyLayout;
