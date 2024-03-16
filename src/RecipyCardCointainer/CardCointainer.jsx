import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const CardCointainer = () => {
  const [recipyCards, setRecipyCard] = useState([]);

  useEffect(() => {
    fetch("Food.json")
      .then((res) => res.json())
      .then((data) => setRecipyCard(data));
  }, []);
  return (
    <div className="flex">
      <div className="mt-12 w-2/3">
        <div className="grid grid-cols-2 gap-6">
        {recipyCards.map((recipyCard, idx) => (
          <Cards key={idx} recipyCard={recipyCard}></Cards>
        ))}
        </div>
      </div>
      <div className="w-1/3 border-2">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default CardCointainer;
