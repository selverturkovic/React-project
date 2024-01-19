import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Prvideolanding() {
  const navigate = useNavigate();
  const Click1 = () => {
    navigate("/category");
  };
  return (
    <div className="maindiv">
      <div className="Glavninaslov">
        <h2 className="h2">Profesional</h2>
        <h2 className="h2">Drone</h2>
        <h2 className="h2">Solutions</h2>
        <Button variant="contained" color="primary" onClick={Click1}>
          Shop now
        </Button>
      </div>

      <img
        className="slikaDrona"
        src="https://static.wixstatic.com/media/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg/v1/fill/w_653,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg"
        alt="Dron"
      />
    </div>
  );
}

export default Prvideolanding;
