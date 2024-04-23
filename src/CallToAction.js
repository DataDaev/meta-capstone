import { Link } from "react-router-dom";
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
          <Link to="/reservations">
            <button>Reserve a table</button>
          </Link>
        </div>
        <div>
          <img src={restaurantFood} alt="" />
        </div>
      </article>
    </>
  );
}
