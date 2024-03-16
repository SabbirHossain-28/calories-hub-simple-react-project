import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardCointainer = () => {
  const [recipyCards, setRecipyCard] = useState([]);
  const [addDataToTable, setAddDataToTable] = useState([]);

  const handleAddToTable = (tableData) => {
    // console.log(tableData);
    // console.log(addDataToTable);
    const isAdded=addDataToTable.find(recipeItem=>recipeItem.recipe_id==tableData.recipe_id);
    console.log(isAdded);
    if(!isAdded){
      setAddDataToTable([...addDataToTable, tableData]);
    }
    else{
      toast('Sorry you already added the recipe');

    }
  };
  useEffect(() => {
    fetch("Food.json")
      .then((res) => res.json())
      .then((data) => setRecipyCard(data));
  }, []);
  return (
    <div className=" w-11/12 mx-auto flex flex-col lg:flex-row gap-6">
      <div className="mt-12 w-2/3">
        <div className="grid lg:grid-cols-2 gap-6">
          {recipyCards.map((recipyCard, idx) => (
            <Cards
              key={idx}
              recipyCard={recipyCard}
              handleAddToTable={handleAddToTable}
            ></Cards>
          ))}
        </div>
      </div>
      <div className="w-1/3 mt-12 rounded-2xl border-2">
        <Cart tableData={addDataToTable}></Cart>
        {/* <Cart></Cart> */}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CardCointainer;
