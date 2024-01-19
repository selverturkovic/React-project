import React, { useEffect } from "react";
import Proizvodi from "../../components/products/Proizvodi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAcessories,
  fetchBestseller,
  fetchCameras,
  fetchDrons,
  fetchNewProducts,
} from "../../slices/categories";
import "../styles/categorypage.scss";
import { Typography } from "@mui/material";
function Categorypage() {
  const Bestseller = useSelector((state) => state.ecommerce.bestseller);
  const newProducts = useSelector((state) => state.ecommerce.back);
  const Dronovi = useSelector((state) => state.ecommerce.dronovi);
  const Cameras = useSelector((state) => state.ecommerce.cameras);
  const Acessories = useSelector((state) => state.ecommerce.acessories);

  const dispatch = useDispatch();

  console.log(Bestseller);

  useEffect(() => {
    dispatch(fetchBestseller());
    dispatch(fetchNewProducts());
    dispatch(fetchDrons());
    dispatch(fetchCameras());
    dispatch(fetchAcessories());
  }, []);

  return (
    <>
      <Typography className="naslovi" variant="h2">
        Our Bestsellers
      </Typography>
      <div className="products">
        <Proizvodi data={Bestseller?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        New products
      </Typography>
      <div className="products">
        <Proizvodi data={newProducts?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        Drones
      </Typography>
      <div className="products">
        <Proizvodi data={Dronovi?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        Cameras
      </Typography>
      <div className="products">
        <Proizvodi data={Cameras?.data} />
      </div>
      <Typography className="naslovi" variant="h2">
        Accessories
      </Typography>
      <div className="products">
        <Proizvodi data={Acessories?.data} />
      </div>
    </>
  );
}

export default Categorypage;
