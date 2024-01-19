// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../components/ContextProvider";

// function Productpage() {
//   const { data, setData } = useContext(UserContext);
//   // const [data,setData]= useState()
//   console.log(data);

//   // useEffect(() => {
//   //   const getData = async () => {
//   //     try {
//   //       const response = await fetch("http://localhost:1337/api/products");
//   //       const responseData = await response.json();
//   //       console.log(responseData);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   getData();
//   // }, []);
//   if (!data) {
//     return null;
//   }
//   return (
//     <div
//       style={{
//         border: "1px solid gray",
//         height: "500px",
//         width: "350px",
//         borderRadius: "20px",
//       }}
//     >
//       <div>
//         {data.map((item) => (
//           <div key={item.id}>
//             <h2>{item.attributes.title}</h2>
//             <p>{item.attributes.description}</p>
//             {/* Dodajte ostale podatke po potrebi */}
//           </div>
//         ))}
//       </div>
//       {/* {data && (
//         <div>
//           <div style={{ padding: "10px" }}>
//             {/* <p>Title: {data.attributes.title}</p>
//             <p>Price: {data.attributes.price}</p>
//             <p>Slug: {data.attributes.slug}</p>
//             <p>Status: {data.attributes.status}</p> */}
//       {/* <button
//               onClick={() => {
//                 setData(undefined);
//               }}
//             >
//               Product
//             </button>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// }

// export default Productpage;
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
