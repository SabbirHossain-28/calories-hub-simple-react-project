import PropTypes from "prop-types";
import AddCooking from "../AddCocking/AddCooking";
import { useState } from "react";
const Cart = ({ tableData, setAddDataToTable }) => {
  // console.log(tableData);
  const [prepare, setPrepare] = useState([]);
  const [totalTime,setTotalTime]=useState(0);
  const [totalCalories,setTotalCalories]=useState(0);


  const handlePassOrderToPrepare = (id) => {
    const prepareForCook = tableData.filter(
      itemId => itemId.recipe_id !== id
    );
    
    const selectedId = tableData.find((tData) => tData.recipe_id === id);

    const newTotalTime=totalTime+selectedId.preparing_time;
    setTotalTime(newTotalTime);

    const newTotalCalories=totalCalories+selectedId.calories;
    setTotalCalories(newTotalCalories);

    setAddDataToTable(prepareForCook);
    setPrepare([...prepare, selectedId]);
  };
  


  return (
    <div className="p-3 lg:p-6">
      <div className="text-center mb-3">
        <h2 className="text-[#282828] lg:text-2xl font-semibold font-Lexend">
          Want to cook:{tableData.length}
        </h2>
      </div>
      <hr />
      <div>
        <div className="">
          <table className="table table-xs lg:table-md">
            <thead>
              <tr className="border-none">
                <th></th>
                <th className="text-[#878787] lg:text-base font-semibold font-FiraSans">
                  Name
                </th>
                <th className="text-[#878787] lg:text-base font-semibold font-FiraSans">
                  Time
                </th>
                <th className="text-[#878787] lg:text-base font-semibold font-FiraSans">
                  Calories
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((recipe, idx) => (
                <tr key={idx} className="border-none bg-[#28282808] text-[#282828B3] text-base font-normal font-FiraSans">
                  <th>{idx + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}minutes</td>
                  <td>{recipe.calories}calories</td>
                  <td>
                    <button
                      onClick={() => handlePassOrderToPrepare(recipe.recipe_id)}
                      className="lg:px-2 lg:py-1 lg:text-base font-normal text-[#150B2B] rounded-full bg-[#0BE58A] btn-xs lg:btn-md"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddCooking 
      prepare={prepare}
      totalTime={totalTime}
      totalCalories={totalCalories}
      ></AddCooking>
    </div>
  );
};
Cart.propTypes = {
  tableData: PropTypes.array,
  setAddDataToTable:PropTypes.func,
};
export default Cart;
