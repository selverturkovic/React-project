import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/productpage.scss";
import "../styles/mainLandingPage.scss";

import { fetchProduct } from "../../slices/product";
import { getImageUrl } from "../../utils";

const Productpage = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  console.log(productState);

  useEffect(() => {
    dispatch(fetchProduct(data.id));
  }, []);

  return (
    <div>
      <div key={productState.id} className="boxproizvoda boxproizvoda1">
        <img
          className="slikaproizvoda slikaproizvoda1"
          src={getImageUrl(
            productState?.product?.data?.attributes?.image.data.attributes.url
          )}
          alt=""
        />
        <p>Ime: {productState?.product?.data?.attributes?.title}</p>
        <p>Cena: {productState?.product?.data?.attributes?.price}</p>
        <p>
          Opis proizvoda: {productState?.product?.data?.attributes?.description}
        </p>
        <Button variant="contained" color="secondary">
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default Productpage;
