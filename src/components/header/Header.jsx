import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
const Header = () => {
   return (
      <header>
         <Link to={'/'}>         <img className='logo' src={Logo} alt="" />
         </Link>
         <ul className='header-menu'>
            <Link to='/' className='nav-link'>
               Home
            </Link>
            <Link to='/programs' className='nav-link'>Programs</Link>

            <Link to='/bmi' className='nav-link'>
               BMI Calculator
            </Link>

            <Link to={'/mentwell'} className='nav-link'>Mental Wellness</Link>
            <Link to={'/recipe'} className='nav-link'>Recipes</Link>

         </ul>
         <button className='btn'>Join now </button>

      </header>
   )
}

export default Header