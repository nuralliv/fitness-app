
import one from '../assets/meal/1.avif';
import two from '../assets/meal/2.avif';
import three from '../assets/meal/3.jpeg';
import four from '../assets/meal/4.jpg';
import five from '../assets/meal/5.jpg';
import six from '../assets/meal/6.avif';
import seven from '../assets/meal/7.jpg';
import eight from '../assets/meal/8.jpg';
import nine from '../assets/meal/9.jpg';
import ten from '../assets/meal/10.avif'

const healthyMeals = [
   {
      id: 1,
      name: "Avocado Toast",
      image: one,
      category: "vegan",
      ingredients: ["Whole grain bread", "Avocado", "Lemon juice", "Salt"],
      prepTime: "5 min",
   },
   {
      id: 2,
      name: "Greek Yogurt Parfait",
      image: two,
      category: "vegetarian",
      ingredients: ["Greek yogurt", "Granola", "Berries (strawberries, blueberries)"],
      prepTime: "5 min",
   },
   {
      id: 3,
      name: "Caprese Salad",
      image: three,
      category: "vegetarian",
      ingredients: ["Tomatoes", "Mozzarella cheese", "Basil", "Olive oil", "Balsamic vinegar"],
      prepTime: "10 min",
   },
   {
      id: 4,
      name: "Oatmeal with Fruits",
      image: four,
      category: "vegan",
      ingredients: ["Oats", "Milk or water", "Banana", "Cinnamon"],
      prepTime: "10 min",
   },
   {
      id: 5,
      name: "Grilled Chicken Salad",
      image: five,
      category: "gluten-free",
      ingredients: ["Grilled chicken breast", "Lettuce", "Cucumber", "Cherry tomatoes", "Olive oil"],
      prepTime: "15 min",
   },
   {
      id: 6,
      name: "Smoothie Bowl",
      image: six,
      category: "vegan",
      ingredients: ["Frozen banana", "Berries", "Almond milk", "Granola", "Chia seeds"],
      prepTime: "7 min",
   },
   {
      id: 7,
      name: "Vegetable Stir-Fry",
      image: seven,
      category: "vegan",
      ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Garlic"],
      prepTime: "15 min",
   },
   {
      id: 8,
      name: "Egg Salad Sandwich",
      image: eight,
      category: "vegetarian",
      ingredients: ["Hard-boiled eggs", "Whole grain bread", "Lettuce", "Greek yogurt or mayonnaise"],
      prepTime: "10 min",
   },
   {
      id: 9,
      name: "Avocado and Egg Toast",
      image: nine,
      category: "vegetarian",
      ingredients: ["Whole grain bread", "Avocado", "Egg", "Salt", "Pepper"],
      prepTime: "8 min",
   },
   {
      id: 10,
      name: "Hummus Veggie Wrap",
      image: ten,
      category: "vegan",
      ingredients: ["Whole wheat tortilla", "Hummus", "Cucumber", "Carrots", "Spinach"],
      prepTime: "10 min",
   },
];

export default healthyMeals;
