import { useEffect } from "react";
import { useState } from "react";

export default function ScrollIndicator({url}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage,setScrollPercentage] = useState(0)

  async function fetchData(getUrl){
    try {
        setLoading(true)
        const response = await fetch(getUrl);
        const data = await response.json();
        setData(data.products);
        console.log(data)
        setLoading(false);
    } catch (error) {
        console.log(error)
        setErrorMessage("something went wrong")
        setLoading(false)
    }
  }
  function handleScrollPercentage(){
    console.log(document.body.scrollTop,"Body Scroll Top")
    console.log(document.documentElement.scrollTop,"DocumentElement Scroll Top")
    console.log(document.documentElement.scrollHeight,"DocumentElement Scroll Height")
    console.log(document.documentElement.clientHeight,"DocumentElement Scroll clientHeight")

    const howMuchscrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercentage((howMuchscrolled/height*100))

  }

  useEffect(()=>{
    fetchData(url)
  },[url]);

  useEffect(()=>{
    window.addEventListener('scroll',handleScrollPercentage)
    return ()=>{
        window.removeEventListener('scroll',()=>{})
    }
  })

  if(errorMessage !== ''){
    return(
        <div> {errorMessage} </div>
    )
  }

  if(loading){
    return(
        <div> Data is Loading... </div>
    )
  }

  return (
    <>
    <div style={{textAlign:'center'}}>
    <h1>Custom Scroll Indicator</h1>
    <div className="scroll-progress-tracking-container">
        <div className="current-progress-bar" style={{width:`${scrollPercentage}%`}}></div>
    </div>
    {data && data.length>0 ?
    data.map((dataItem)=>{
       return <p key={data.id}>{dataItem.title}</p> 
    })
    :null}
      <div></div>
      </div>
    </>
  );
}
