import { Button } from "@mui/material";
import React from "react";
import { getImageUrl, paths } from "../../utils";
import { useNavigate } from "react-router-dom";
function Proizvodi(props) {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      {data?.map((product) => {
        return (
          <div
            className="boxproizvoda"
            key={product.id}
            onClick={() => navigate(paths.product.replace(":id", product.id))}
          >
            <img
              className="slikaproizvoda"
              src={getImageUrl(
                product?.attributes?.image?.data?.attributes.url
              )}
              alt=""
            />
            <p>Name: {product.attributes.title}</p>
            <p className="cena">${product.attributes.price}</p>
            <Button variant="contained" color="secondary">
              Add to card
            </Button>
          </div>
        );
      })}
    </>
  );
}

export default Proizvodi;
