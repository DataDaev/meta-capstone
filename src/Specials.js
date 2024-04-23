import { useEffect, useState } from "react";
import { fetchSpecialsData } from "./Data/SpecialsData";

export default function Specials() {
  const [weeklySpecials, setWeeklySpecials] = useState({});

  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        const specialsData = await fetchSpecialsData();
        setWeeklySpecials(specialsData);
      } catch (error) {
        console.log("Error fetching specials Data:", error);
      }
    };
    fetchSpecials();
  }, []);

  return (
    <>
      <div className="specials">
        <span>This week specials!</span>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {Object.values(weeklySpecials).map((dish) => (
          <div className="specials-card">
            <img src={dish.image} alt="Special dishes images" />
            <div className="specials-content">
              <div className="specials-name-price-container">
                <span>{dish.name}</span>
                <span className="specials-price">{dish.price}</span>
              </div>
              <p>{dish.description}</p>
              <span className="specials-order">Order a delivery</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
