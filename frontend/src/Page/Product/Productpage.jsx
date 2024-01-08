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
import { fetchEcommerceData } from "../../slices/index";

const Productpage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const ecommerceData = useSelector((state) => state.ecommerce.data);

  // const ecommerceData = useSelector((state) =>
  //   state.ecommerce.data.find((item) => item.id === parseInt(id))
  // );
  console.log(ecommerceData);
  const status = useSelector((state) => state.ecommerce.status);
  const error = useSelector((state) => state.ecommerce.error);

  useEffect(() => {
    dispatch(fetchEcommerceData(id));
  }, [dispatch, id]);

  if (ecommerceData.length === 0) {
    return <div>Loading...</div>;
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (!ecommerceData) {
    return <p>Product not found</p>;
  }
  return (
    <div>
      {/* {ecommerceData.data.map((item) => ( */}
      <div>
        <h2>{ecommerceData.data.attributes.title}</h2>
        <p>{id}</p>
        {/* Ostale informacije o proizvodu */}
      </div>
      {/* ))} */}
    </div>
  );
};

export default Productpage;
