

import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LoadmoreData from './components/load-more-data'
import RandomColor from './components/random-color'
import Starration from './components/star-rating'
import menus from './components/tree-view/data.js'
import TreeView from './components/tree-view/index.jsx'

function App() {
 

  return (
    <>
      <Accordian />    
      <RandomColor />
      <Starration noOfStar={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadmoreData />
      <TreeView menus={menus} />
    </>
  )
}

export default App
