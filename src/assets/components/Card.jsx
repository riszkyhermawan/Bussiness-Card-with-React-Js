import Photo from './Photo'
import Title from './Title'
import About from './About'
import Interest from './Interest'
import Socmed from './Socmed'

function Card(){
  return (
    <div className="card">
      <Photo />
      <Title />
      <About />
      <Interest />
      <Socmed />
    </div>
  )
}

export default Card