import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/products");
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </div>
  );
}

export default App;
