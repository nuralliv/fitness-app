import './FitProg.css'
import { useParams } from 'react-router-dom'
import { fitnessPracData } from '../../data/fitnessPracData'
import whiteTick from '../.././assets/whiteTick.png'
import { progIcons } from '../../assets/prog-items/progIocns'
const FitProg = () => {
   const { id } = useParams();
   const fitProg = fitnessPracData[id];
   return (
      <main className="fit-prog">
         <div className="fit-top" >
            <video autoPlay loop muted className="video">
               <source src={fitProg.video} type="video/mp4" />
            </video>
            <div className="in-video">
               <h1>{fitProg.title.toUpperCase()}</h1>
               <p>{fitProg.description}</p>
               <a href='#main' className='learn-more'>Learn more</a>
            </div>

         </div>
         <div className="fit-main" id='main'>
            <div className="fit-main-left">
               <div className="result-all">
                  <h2>Result </h2>
                  <div className="results">
                     {fitProg.result.slice(0, 4).map((res, index) => (
                        <div key={index} className="res">
                           <img src={progIcons[index]} alt="" />

                           <span> {res.toUpperCase()}
                           </span>
                        </div>


                     ))}
                  </div>


               </div>

            </div>
            <div className="fit-main-right">
               <div className="plan-all">
                  <h2>Plan</h2>

                  <div className="plan">
                     {fitProg.plan.map((term, index) => (
                        <div key={index} className="term">
                           <span>{index + 1}. {term}
                           </span>
                           <span><img src={whiteTick} alt="" /></span>
                        </div>

                     ))}
                  </div>
               </div>

            </div>



         </div>

      </main>
   )
}

export default FitProg