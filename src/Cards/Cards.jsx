import PropTypes from "prop-types";
import clockImage from "../assets/images/time.png";
import calorieImage from "../assets/images/fire.png";

const Cards = ({ recipyCard }) => {
  console.log(recipyCard);
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipyCard;
  return (
    <div>
      <div className=" bg-base-100 shadow-2xl p-4 rounded-xl border-2">
        <div>
          <img
            className=" w-full h-80 rounded-2xl mb-4"
            src={recipe_image}
            alt="recipe-image"
          />
        </div>

        <div className="p-2">
          <h2 className="card-title text-[#282828] text-xl font-semibold font-Lexend mb-4">
            {recipe_name}
          </h2>
          <p className="text-[#878787]  font-FiraSans mb-4">
            {short_description}
          </p>
          <hr />
          <h4 className="text-[#282828] text-xl font-medium font-Lexend mt-4 mb-4">
            Ingredients: {ingredients.length}
          </h4>
          <div className="h-52">
          <ul className="text-[#878787]  font-Lexend mb-6">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="list-inside list-disc">
                {ingredient}
              </li>
            ))}
          </ul>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex gap-3">
              <img src={clockImage} alt="Clock-logo" />
              <p className="text-[#282828CC] font-FiraSans">
                <span>{preparing_time}</span>minutes
              </p>
            </div>
            <div className="flex gap-3">
              <img src={calorieImage} alt="calorie-logo" />
              <p className="text-[#282828CC] font-FiraSans">
                <span>{calories}</span>calories
              </p>
            </div>
          </div>
          <div className="flex">
            <button className="btn px-10 rounded-full bg-[#0BE58A]">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  recipyCard: PropTypes.object.isRequired,
};

export default Cards;
