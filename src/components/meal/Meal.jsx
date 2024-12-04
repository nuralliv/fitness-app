/* eslint-disable react/prop-types */
import tick from '../../assets/tick.png';
import './Meal.css';

const Meal = ({ title, category, image, ingredients, prepTime }) => {
   return (
      <div className="meal">
         <div className="meal-l">
            <img src={image} alt={title} />
         </div>
         <div className="meal-r">
            <div className="meal-r-t">
               <div className="category-meal">{category.toUpperCase()}</div>
               <div className="prep-time">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     style={{ fill: "white" }}
                  >
                     <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                     <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
                  </svg>
                  {prepTime}
               </div>
            </div>
            <h2 className="meal-name">{title}</h2>
            <div className="ingredients">
               {ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient">
                     <img src={tick} alt="" /> {ingredient}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Meal;
