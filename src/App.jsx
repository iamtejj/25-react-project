

import Accordian from './components/accordian'
import ModelTest from './components/custom-model-popup/model-test.jsx'
import TabTest from './components/custom-tabs/tab-test.jsx'
import GithubProfileFinder from './components/github-profile-finder/index.jsx'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode/index.jsx'
import LoadmoreData from './components/load-more-data'
import QRcodeGenerator from './components/qr-code-generator/index.jsx'
import RandomColor from './components/random-color'
import ScrollIndicator from './components/scroll-indicator/index.jsx'
import SearchAutoComplete from './components/search-auto-complete/index.jsx'
import Starration from './components/star-rating'
import menus from './components/tree-view/data.js'
import TreeView from './components/tree-view/index.jsx'

function App() {
 

  return (
    <>
      {/* <Accordian />    
      <RandomColor />
      <Starration noOfStar={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadmoreData />
      <TreeView menus={menus} />
      <QRcodeGenerator />
      <LightDarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabTest /> */}
      {/* <ModelTest /> */}
      {/* <GithubProfileFinder /> */}
      <SearchAutoComplete />
    </>
  )
}

export default App
