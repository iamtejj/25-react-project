import { FaStar  } from "react-icons/fa";
import './style.css'
import { useState } from "react";
export default function Starration({noOfStar}){
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    function handleMouseMove(getCurrentIndex){
        
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(){
        setHover(rating)
    }
    return(
        <>
        <div className="star-rating">
            {
                [...Array(noOfStar)].map((_,index)=>{
                    index = index + 1;
                    return(
                        <>
                       
                        <FaStar 
                        className={(index <= (hover || rating)) ? "active" :"noactive"}
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMouseMove(index)}
                        onMouseLeave={()=>handleMouseLeave()}
                        size={40} key={index}/>
                        </>
                    )
                })
            }
        </div>
            
        </>
    )
}

