
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Bmi from './page/BMI/Bmi'
import Home from './page/home/Home'
import FitnessType from './page/fitness-type/FitnessType'
import FitProg from './page/Fit-prog/FitProg'
import MentalWellness from './page/Mental-wellness/MentalWellness'
import Recipe from './page/Recipe/Recipe'
import Forum from './page/forum/Forum'
import Header from './components/header/Header'
function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bmi' element={<Bmi />} />
        <Route path='/programs' element={<FitnessType />} />
        <Route path="/fitprog/:id" element={<FitProg />} />
        <Route path='/mentwell' element={<MentalWellness />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/forum' element={<Forum />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
