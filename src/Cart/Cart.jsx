import PropTypes from "prop-types";
const Cart = ({tableData}) => {
    // console.log(tableData);
  return (
    <div className="p-6">
      <div className="text-center">
        <h2 className="text-[#282828] text-2xl font-semibold font-Lexend">
          Want to cook:{tableData.length}
        </h2>
      </div>
      <hr />
      <div>
        <div className="">
          <table className="table">
            <thead>
              <tr className="border-none">
                <th></th>
                <th className="text-[#878787] text-base font-semibold font-FiraSans">
                  Name
                </th>
                <th className="text-[#878787] text-base font-semibold font-FiraSans">
                  Time
                </th>
                <th className="text-[#878787] text-base font-semibold font-FiraSans">
                  Calories
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
              tableData.map((recipe,idx) =>
                  <tr key={idx} className="border-none">
                <th>{idx+1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button className="px-1 py-1 text-base   font-normal text-[#150B2B] rounded-full bg-[#0BE58A]">
                    Preparing
                  </button>
                </td>
              </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  tableData: PropTypes.array,
};
export default Cart;
