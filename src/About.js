import marioAndAdrian1 from "./icons_assets/Mario and Adrian A.jpg";
import marioAndAdrian2 from "./icons_assets/Mario and Adrian b.jpg";

export default function About() {
  return (
    <section className="our-story-container" id="about">
      <div className="our-story">
        <div className="our-story-description">
          <span>Our Story</span>
          <p>
            Little Lemon was founded in 2010 by two brothers, Mario and Adrian.
            They were born and raised in Chicago, and their love for
            Mediterranean cuisine inspired them to open a restaurant that would
            bring the flavors of the Mediterranean to the Windy City. Little
            Lemon is a cozy family-owned restaurant that offers traditional
            Mediterranean dishes with a modern twist. Our chefs use fresh
            ingredients to create delicious and healthy meals that will
            transport you to the sunny shores of the Mediterranean. We are
            committed to providing our customers with an unforgettable dining
            experience, and we take pride in offering exceptional service in a
            warm and welcoming atmosphere.
          </p>
        </div>
        <div className="our-story-chefs">
          <img src={marioAndAdrian1} alt="Chefs Mario and Adrian #1" />
          <img src={marioAndAdrian2} alt="Chefs Mario and Adrian #2" />
        </div>
      </div>
    </section>
  );
}
