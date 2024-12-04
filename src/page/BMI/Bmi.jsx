import { useState } from "react";
import "./Bmi.css";

const Bmi = () => {
   const [weight, setWeight] = useState(70);
   const [height, setHeight] = useState(170);

   const calculateBMI = () => {
      const heightMet = height / 100;
      const bmi = weight / (heightMet * heightMet);
      return bmi.toFixed(2);
   };
   const bmiText = (bmi) => {
      if (bmi < 18.5) {
         return "Your BMI indicates you are underweight. Consider consulting a healthcare provider.";
      } else if (bmi >= 18.5 && bmi < 24.9) {
         return "Your BMI is in the normal range. Keep up the good work!";
      } else if (bmi >= 25 && bmi < 29.9) {
         return "Your BMI indicates you are overweight. Consider making adjustments to your lifestyle.";
      } else {
         return "Your BMI indicates obesity. It’s recommended to consult a healthcare professional.";
      }
   }
   const bmi = calculateBMI();
   const normalizeBmi = (bmi) => {
      const minBmi = 10;
      const maxBmi = 45;
      if(bmi < maxBmi){
         return ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
      }
      else{
         return 99.6
      }
   };

   const bmiPercent = normalizeBmi(bmi);

   return (
      <div className="bmi-container">
         <h1 className="bmi-title"><span className="stroke-text">BMI</span> Calculator</h1>
         <div className="main-con">
            <div className="sliders">
               <div className="slider-container">
                  <h3>Weight</h3>
                  <input
                     type="range"
                     min="30"
                     max="200"
                     value={weight}
                     onChange={(e) => setWeight(e.target.value)}
                  />
                  <div className="slider-value">{weight} kg</div>
                  <p>Your weight in kilograms</p>
               </div>

               {/* Слайдер для роста */}
               <div className="slider-container">
                  <h3>Height</h3>
                  <input
                     type="range"
                     min="100"
                     max="250"
                     value={height}
                     onChange={(e) => setHeight(e.target.value)}
                  />
                  <div className="slider-value">{height} cm</div>
                  <p>Your height in centimeters</p>
               </div>

            </div>
            <div className="bmi-result">
               <h2>BMI</h2>
               <div className="bmi-value">{calculateBMI()} kg/m²</div>
               <h3>Body Mass Index</h3>
               <p>
                  {bmiText(bmi)}

               </p>
               <button className="bmi-button">Get Health Tips</button>
            </div>

         </div>
         <div className="bmi-prog-text">
            <span>Too low</span>
            <span>Perfect</span>
            <span>Too much</span>
         </div>
         <div className="bmi-progress">
            <div
               className="bmi-indicator"
               style={{ "--bmi-percent": Math.min(Math.max(bmiPercent, 0), 100) }}
            ></div>
         </div>

      </div>
   );
};

export default Bmi;
