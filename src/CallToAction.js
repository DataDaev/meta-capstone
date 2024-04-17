import restaurantFood from "./icons_assets/restauranfood.jpg";

export default function CallToAction() {
  return (
    <>
      <article className="main-content">
        <div className="intro">
          <span className="display-title">Little Lemon</span>
          <span className="sub-title">Chicago</span>
          <p>
            We are a family owned <br /> Mediterranean restaurant, <br />
            focused on traditional
            <br />
            recipes served with a modern
            <br /> twist.
          </p>
          <button>Reserve a table</button>
        </div>
        <div>
          <img src={restaurantFood} alt="" />
        </div>
      </article>
    </>
  );
}
