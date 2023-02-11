import twitter from '../img/Twitter Icon.png'
import facebook from '../img/Facebook Icon.png'
import github from '../img/GitHub Icon.png'
import instagram from '../img/Instagram Icon.png'

function Socmed(){
  return (
    <div className="socmed">
      <img className="logo" src={twitter}></img>
      <img className="logo" src={facebook}></img>
      <img className="logo" src={github}></img>
      <img className="logo" src={instagram}></img>
    </div>
  )
}

export default Socmed