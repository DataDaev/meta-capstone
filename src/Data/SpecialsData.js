import greekSaladImage from "../icons_assets/greek salad.jpg";
import bruchettaImage from "../icons_assets/bruchetta.jpg";
import lemonDessertImage from "../icons_assets/lemon dessert.jpg";

const specialsData = {
  greekSalad: {
    name: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of \ncrispy lettuce, peppers, olives \nand our chicago style feta \ncheese, garnished with \ncrunchy garlic and rosemary \ncroutons.",
    image: greekSaladImage,
  },
  bruchetta: {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "The famous greek salad of \ncrispy lettuce, peppers, olives \nand our chicago style feta \ncheese, garnished with \ncrunchy garlic and rosemary \ncroutons.",
    image: bruchettaImage,
  },
  lemonDessert: {
    name: "Greek salad",
    price: "$5.00",
    description:
      "The famous greek salad of \ncrispy lettuce, peppers, olives \nand our chicago style feta \ncheese, garnished with \ncrunchy garlic and rosemary \ncroutons.",
    image: lemonDessertImage,
  },
};

export function fetchSpecialsData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(specialsData);
    }, 0);
  });
}
