import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
  return <div></div>;
}

export default App;
