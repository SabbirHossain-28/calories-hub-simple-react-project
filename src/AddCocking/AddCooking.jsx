import PropTypes from "prop-types";

const AddCooking = ({ prepare, totalTime, totalCalories }) => {
  return (
    <div>
      <div className="lg:p-6">
        <div className="text-center mb-3">
          <h2 className="text-[#282828] lg:text-2xl font-semibold font-Lexend">
            Currently Cooking:{prepare.length}
          </h2>
        </div>
        <hr />
        <div>
          <div className="">
            <table className="table table-xs lg:table-md">
              <thead>
                <tr className="border-none">
                  <th></th>
                  <th className="text-[#878787] lg:text-base lg:font-semibold font-FiraSans">
                    Name
                  </th>
                  <th className="text-[#878787] lg:text-base lg:font-semibold font-FiraSans">
                    Time
                  </th>
                  <th className="text-[#878787] lg:text-base lg:font-semibold font-FiraSans">
                    Calories
                  </th>
                </tr>
              </thead>
              <tbody>
                {prepare.map((recipeData, idx) => (
                  <tr
                    key={idx}
                    className="bg-[#28282808] border-none text-[#282828B3] text-base font-normal font-FiraSans"
                  >
                    <th>{idx + 1}</th>
                    <td>{recipeData.recipe_name}</td>
                    <td>{recipeData.preparing_time}minutes</td>
                    <td>{recipeData.calories}Calories</td>
                  </tr>
                ))}
              </tbody>
              <tbody>
                <tr className="border-none text-[#282828B3] text-base font-bold font-FiraSans">
                  <th></th>
                  <td></td>
                  <td>Total Times: {totalTime}minutes</td>
                  <td>Total Calories: {totalCalories}calories</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
AddCooking.propTypes = {
  prepare: PropTypes.array,
  totalTime: PropTypes.number,
  totalCalories: PropTypes.number,
};
export default AddCooking;
