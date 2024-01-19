import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Logo from "../../Page/Landingpage/Logo";
import Korpa from "../../Page/Landingpage/korpa";
import SearchIcon from "@mui/icons-material/Search";

import { Button, IconButton, TextField } from "@mui/material";
import "../../Page/styles/header.scss";
import { useNavigate, useParams } from "react-router-dom";
import "../../Page/styles/footer.scss";
import { paths } from "../../utils";
const { Header, Content, Footer } = {
  Header: Toolbar,
  Content: Container,
  Footer: Paper,
};

const MyLayout = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const { q } = useParams();

  const [searchValue, setSearchValue] = useState(q);

  const handleSearch = () => {
    navigate(paths.search.replace(":q", searchValue));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleClick = () => {
    navigate("/product/:id");
  };
  const Click1 = () => {
    navigate("/category");
  };
  const Click2 = () => {
    navigate("/");
  };

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
          {/* <Button onClick={handleClick} color="inherit">
            Product
          </Button> */}
          <Button onClick={Click1} color="inherit">
            Category
          </Button>
          <TextField
            placeholder="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{
              width: 200,
            }}
            InputProps={{
              startAdornment: (
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <Korpa />
        </Toolbar>
      </Header>

      <Content style={{ padding: "0px" }}>{children}</Content>
      <Footer>
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
