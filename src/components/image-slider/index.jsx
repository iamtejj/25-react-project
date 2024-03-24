import { useState,useEffect} from 'react'
import './style.css'
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({url,limit,page}){
    const [images,setImage] = useState([])
    const [currentSlide,setCurrentslider] = useState(0);
    const [errorMsg,setErrorMsg] = useState(null);
    const [loading,setLoading] = useState(false);


    async function fetchImages(getUrl){
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json()
            if(data){
                setImage(data);
                setLoading(false);
            }
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    }
    function handlePrevious(){
        setCurrentslider(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext(){
        setCurrentslider(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(()=>{
        if(url !== '') fetchImages(`${url}?page=${page}&limit=${limit}`);

    },[url,limit,page])

 
    if(loading){
        return(
            <>
            <div>Loading data Please wait</div>
            </>
        )
    }
    if(errorMsg !== null){
        return(
            <>
            <div>Error Occured</div>
            </>
        ) 
    }
   

    return(
        <>
        <div className='container'>
        <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />

        {
            images && images.length ?
            images.map((imageItem,index)=>{
               return <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={index == currentSlide ? "current-image": "current-image hide-current-image"}
                />
            })
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        <span className='circle-indicators'>
            {images && images.length ?
                images.map((_,index)=>{
                   return <button key={index} className={currentSlide === index ?"current-indicator":"current-indicator inactive-indicator"}>
                    </button>
                    
                }) 
            :null}
        </span>
        </div>
        </>
    )
}
