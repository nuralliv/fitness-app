import Hero from '../../components/hero/Hero'
import Programs from '../../components/programs/Programs'
import Reasons from '../../components/reasons/Reasons'
import './Home.css'
const Home = () => {
   return (
      <div className='home'>
         <Hero />
         <Programs />
         <Reasons />
      </div>
   )
}

export default Home