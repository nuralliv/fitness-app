import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

const Hero = () => {
   return (
      <div className="Hero">
         <div className="main-content">
            <div className="left-h">
               <div className="the-best-ad">
                  <div></div>
                  <span>The best fitness club in the town </span>
               </div>
               <div className="hero-text">
                  <div><span className='stroke-text'>Shape </span>
                     <span>Your</span>
                  </div>
                  <div>
                     <span>Ideal body</span>
                  </div>
                  <div>
                     <span>                  In here  we will help  you to  shape and build your ideal body and live up your life to fullest
                     </span>
                  </div>
               </div>
               <div className="figures">
                  <div>
                     <span>+140</span>
                     <span>expert coachs</span>
                  </div>
                  <div>
                     <span>+978</span>
                     <span>members joined </span>
                  </div>
                  <div>
                     <span>+50</span>
                     <span>fitness programs</span>
                  </div>
               </div>
               <div className="hero-buttons">
                  <button className='btn'>Get Started</button>
                  <button className='btn'>Learn More</button>

               </div>
            </div>

            <div className="right-h">

               <div className='heart-rate'>
                  <img src={heart} alt="" />
                  <span>Heart Rate </span><span>116 bpm</span>

               </div>

               <img src={hero_image} alt="" className='hero-image' />
               <img src={hero_image_back} alt="" className='hero-image-back' />

               <div className="calories">
                  <img src={calories} alt="" />
                  <div>
                     <span>Calories Burned</span>
                     <span>220 kcal </span>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Hero