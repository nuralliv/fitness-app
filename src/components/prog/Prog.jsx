/* eslint-disable react/prop-types */
import './Prog.css'
import { Link } from 'react-router-dom'
const Prog = ({ title, index, level, image, averageTime }) => {
  function levelColor() {
    if (level === 'beginner') {
      return '#FFB02E'
    }
    else if (level === 'intermediate') {
      return '#FF7F50'
    }
    else {
      return 'red'
    }
  }
  return (
    <Link to={`/fitprog/${index}`} className="prog">
      <img src={image} alt="" />
      <div className='level' > <span style={{
        color: levelColor(),
      }}>{level.toUpperCase()} </span></div>
      <div className='course-st'>{title}</div>
      <div className='prog-lowest'>
        <div className='prog-time'>                  <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "black" }}
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
        </svg> <span>{averageTime}</span></div>
        <button><span>More</span>   <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20" 
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
        >
          <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
        </svg></button>
      </div>




    </Link>
  )
}

export default Prog