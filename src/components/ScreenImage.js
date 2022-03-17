function ScreenImage({ img, show, setFocusedImage }) {
  return (
    <img
      src={process.env.PUBLIC_URL + "/images/" + img}
      className={show ? "screenImage show" : "screenImage hide"}
      alt=""
      onClick={() => setFocusedImage("")}
    />
  );
}

export default ScreenImage;
