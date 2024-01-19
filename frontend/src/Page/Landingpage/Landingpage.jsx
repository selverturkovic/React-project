import React, { useEffect } from "react";
import "../styles/header.scss";
import "../styles/mainLandingpage.scss";
import "../styles/footer.scss";

import { useTheme } from "@emotion/react";
import Proizvodi from "../../components/products/Proizvodi";
import { fetchBestseller, fetchNewProducts } from "../../slices";
import { useDispatch, useSelector } from "react-redux";
import Prvideolanding from "../../components/Prvideolanding/Prvideolanding";
import Camera from "../../components/Camera/Camera";
import Topbrands from "../../components/Topbrands/Topbrands";
import Testimonials from "../../components/Testimoinals/Testimonials";

function Landingpage() {
  // const theme = useTheme();

  const Bestseller = useSelector((state) => state.ecommerce.bestseller);
  const newProducts = useSelector((state) => state.ecommerce.back);
  const dispatch = useDispatch();
  console.log(Bestseller);
  useEffect(() => {
    dispatch(fetchBestseller());
    dispatch(fetchNewProducts());
  }, []);
  return (
    <div className="glavniDiv">
      <main className="main">
        <Prvideolanding />
        <Camera />
        <Topbrands />
        <div className="glavniDiv1">
          <img
            className="planina"
            src="https://static.wixstatic.com/media/ea26fd_b068bc852e404ce7ad4a93e0792ec4a0~mv2_d_2134_1300_s_2.jpg/v1/fill/w_980,h_903,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_b068bc852e404ce7ad4a93e0792ec4a0~mv2_d_2134_1300_s_2.jpg"
            alt=""
          />
          <div className="naslovi naslovi1">
            <p className="naslov naslov1">Our Bestsellers</p>
          </div>
          <div className="box">
            <Proizvodi data={Bestseller?.data} />
          </div>
          <div className="naslovi naslovi1 naslovi2">
            <p className="naslov naslov1">New products</p>
          </div>
          <div className="box box1">
            <Proizvodi data={newProducts?.data} />
          </div>
        </div>
        <Testimonials />
      </main>
    </div>
  );
}

export default Landingpage;
