

import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import Starration from './components/star-rating'

function App() {
 

  return (
    <>
      <Accordian />    
      <RandomColor />
      <Starration noOfStar={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </>
  )
}

export default App
