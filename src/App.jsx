

import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import Starration from './components/star-rating'

function App() {
 

  return (
    <>
      <Accordian />    
      <RandomColor />
      <Starration noOfStar={10} />
    </>
  )
}

export default App
