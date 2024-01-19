export const paths = Object.freeze({
  landing: "/",
  product: "/product/:id",
  category: "/category/",
  search: "/search/:q",
});

export const getImageUrl = (url) => {
  return "http://localhost:1337" + url;
};
