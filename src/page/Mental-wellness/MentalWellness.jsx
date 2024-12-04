import './Mental-welness.css'
import graph from '../../assets/graph (1).png'
import mentalHealth from '../../assets/wellness/mental-health.png'
import meditation from '../../assets/wellness/meditation.png'
import mentalPower from '../../assets/wellness/power.png'
import strengh from '../../assets/wellness/strength.png'
const MentalWellness = () => {
  return (
    <div className='mental-wellness'>
      <div className="h-name">
        <h3>health</h3>
        <h1><span className='stroke-text'>Mental</span> <span>Wellness</span> <span className='stroke-text'>Guide</span></h1>
        <p>Mental wellness is crucial because it affects how we think, feel, and handle stress in our daily lives. It improves relationships, boosts productivity, and supports overall health. Prioritizing mental well-being leads to a happier and more fulfilling life.</p>
      </div>
      <div className="mental-wellness-content">
        <div className="mental-wellness-content-left">
          <p><span className='gradient-text'>450 million</span>  people worldwide suffer from mental health disorders.
          </p>
          <div className="main-content">
            <h1 className='gradient-text'>450m</h1>
            <h3>people</h3>
          </div>
          <div className="lowest-part">#takeСareOfYourself</div>

        </div>
        <div className="mental-wellness-content-right">

          <p><span className='gradient-text'>Mental health is essential for happiness.</span> Studies show that individuals with strong mental wellness report higher life satisfaction, better relationships, and increased resilience against challenges.
          </p>
          <div className="main-content">
            <div className="imgs">
              <img src={graph} alt="" />
              <img src={graph} alt="" />
            </div>

            <h3>statistic result</h3>
          </div>
          <div className="lowest-part">#takeСareOfYourself</div>

        </div>
      </div>
      <div className="mental-lowest">
        <div className="mental-lowest-title">
          <h2>Embrace Mental Wellness</h2>
          <h3>Caring for your mind is as vital as caring for your body. Build balance, resilience, and happiness through mindfulness and self-care.
          </h3>
        </div>
        <div className="mental-lowest-content">
          <div className="block-list">
            <div className="block">
              <img src={mentalHealth} alt="" />
              <p><strong>Balanced Mind
              </strong>Mental wellness boosts focus and decision-making.

              </p>
            </div>
            <div className="block">
              <img src={meditation} alt="" />
              <p>
                <strong>Body-Mind Harmony
                </strong> Exercise improves mood and mental clarity.
              </p>
            </div>
            <div className="block">
              <img src={strengh} alt="" />
              <p><strong>Emotional Strength
              </strong>Mindfulness reduces stress and builds resilience.

              </p>
            </div>
            <div className="block">
              <img src={mentalPower} alt="" />
              <p><strong>Self-Care Matters
              </strong>Mental health is key to happiness and success.
              </p>
            </div>
         
          </div>
        </div>
      </div>

    </div>



  )
}

export default MentalWellness