import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function header(props) {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  return <div></div>;
}

export default header;
