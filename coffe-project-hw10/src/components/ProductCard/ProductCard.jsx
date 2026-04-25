const ProductCard = (props) => {
  return (
    <li>
      <article aria-label={props.name}>
        <a href="#">
          <img className="product_image" src={props.imgURL} alt={props.name} />
        </a>
        <h4 className="product_title">{props.name}</h4>
        <p className="product_subtitle">{props.availability}</p>
        <p className="product_price">${props.price}.00</p>
        <p className="product_discount">Get 20% Off in App</p>
      </article>
    </li>
  );
};

export default ProductCard;
