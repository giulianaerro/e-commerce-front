export const Logo = () => {
  const imgUrl =
    "https://res.cloudinary.com/geo-pet/image/upload/v1666802495/e-commerce/moma.png";

  return (
    <img
      loading="lazy"
      width="117"
      height="75"
      src={imgUrl}
      alt="logo de moma"
    />
  );
};
