
import '../Recipe/Recipe.css';
import Prog from '../../components/prog/Prog';
import { useState } from 'react';
import { fitnessPracData } from '../../data/fitnessPracData';


const Recipe = () => {
   const [selectedCategory, setSelectedCategory] = useState('all');

   const filteredProg = selectedCategory === 'all'
      ? fitnessPracData
      : fitnessPracData.filter((prog) => prog.level === selectedCategory);

   const handleFilterClick = (level) => {
      setSelectedCategory(level);
   };

   return (
      <div className="recipe">
         <h1>
            <span> Fitness</span> <span className="stroke-text">Programs </span>
         </h1>
         <div className="filters">
            <div className="filters-content">
               {['all', 'beginner', 'intermediate', 'advanced'].map((category) => (
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
            {filteredProg.map((prog, index) => (
               <Prog
                  key={index}
                  image={prog.image}
                  title={prog.title}
                  index={index}
                  level={prog.level}
                  averageTime={prog.averageTime}
               />
            ))}
         </ul>
      </div>
   );
};

export default Recipe;
