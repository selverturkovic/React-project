import { Button } from "@mui/material";
import React from "react";

function Camera() {
  return (
    <div className="maindiv">
      <div className="dronovi">
        <img
          className="slikedronova"
          src="https://static.wixstatic.com/media/ea26fd_9c22735f30f6459295457a5bc33c8070~mv2_d_2640_1200_s_2.jpg/v1/fill/w_525,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_9c22735f30f6459295457a5bc33c8070~mv2_d_2640_1200_s_2.jpg"
          alt=""
        />
        <div className="divnaslici">
          <p className="camerap">Thermal camera collection</p>
          <Button variant="contained" color="primary">
            Shop now
          </Button>
        </div>
      </div>
      <div className="dronovi">
        <img
          className="slikedronova"
          src="https://static.wixstatic.com/media/ea26fd_4cff245e1a194ab4b234f411f0e2d571~mv2_d_2640_1200_s_2.jpg/v1/fill/w_525,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_4cff245e1a194ab4b234f411f0e2d571~mv2_d_2640_1200_s_2.jpg"
          alt=""
        />
        <div className="divnaslici">
          <p className="camerap">Essential drones accessories</p>
          <Button variant="contained" color="primary">
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Camera;
