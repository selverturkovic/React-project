import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { searchProducts } from "../../slices/search";
import { getImageUrl, paths } from "../../utils";
import { Button } from "@mui/material";
import "../styles/searchpage.scss";

function Searchpage() {
  const params = useParams();
  const searchState = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const list = searchState?.list?.data;
  const navigate = useNavigate();
  console.log(list);

  useEffect(() => {
    dispatch(searchProducts(params.q));
  }, [params.q, dispatch]);

  return (
    <div className="list">
      {list &&
        list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(paths.product.replace(":id", item.id))}
            >
              <div className="boxproizvoda boxproizvoda1">
                <img
                  className="slikaproizvoda slika"
                  src={getImageUrl(
                    item?.attributes?.image?.data?.attributes.url
                  )}
                  alt=""
                />
                <p>Name: {item.attributes.title}</p>
                <p className="cena">${item.attributes.price}</p>
                <Button variant="contained" color="secondary">
                  Add to card
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Searchpage;
