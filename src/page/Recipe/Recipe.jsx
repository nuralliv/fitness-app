import { useState } from 'react';
import Meal from '../../components/meal/Meal';
import healthyMeals from '../../data/healthyMeals';
import './Recipe.css';

const Recipe = () => {
   const [selectedCategory, setSelectedCategory] = useState('all');

   const filteredMeals = selectedCategory === 'all'
      ? healthyMeals
      : healthyMeals.filter((meal) => meal.category === selectedCategory);

   const handleFilterClick = (category) => {
      setSelectedCategory(category);
   };

   return (
      <div className="recipe">
         <h1>
            <span>Recipes </span> <span className="stroke-text">for </span>
            <span>Results</span>
         </h1>
         <div className="filters">
            <div className="filters-content">
               {['all', 'vegetarian', 'vegan', 'gluten-free'].map((category) => (
                  <button
                     key={category}
                     className={selectedCategory === category ? 'activeBtn' : ''}
                     onClick={() => handleFilterClick(category)}
                  >
                     {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
               ))}
            </div>

         </div>
         <ul className="meal-list">
            {filteredMeals.map((meal, index) => (
               <Meal
                  key={index}
                  image={meal.image}
                  title={meal.name}
                  index={index}
                  ingredients={meal.ingredients}
                  category={meal.category}
                  prepTime={meal.prepTime}
               />
            ))}
         </ul>
      </div>
   );
};

export default Recipe;
