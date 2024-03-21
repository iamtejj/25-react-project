import { useState } from "react"
import data from './data'
import './style.css'
export default function Accordian(){
    const [selected,setSelected] = useState(null);
    const [enableMultiselection,setEnableMultiselection] = useState(false)
    const [multiple,setMultiple] = useState([])
    function handleSingleSelection(getCurrentId){
        setSelected((oldvalue)=>{
            if(oldvalue === getCurrentId){
                return null
            }
            else{
                return getCurrentId
            }
        })
    }
    function handleMultipleSelection(getCurrentId){
        if(selected === getCurrentId){
            setSelected(null)
        }
        let cpymultiple = [...multiple];
        if(multiple.indexOf(getCurrentId) === -1){
            cpymultiple.push(getCurrentId)
        }
        else{
            
            cpymultiple.splice(cpymultiple.indexOf(getCurrentId),1);
        }
        setMultiple(cpymultiple)
    }
    return(
        <>
            <div className="wrapper">
                <button onClick={()=>{setEnableMultiselection(!enableMultiselection)}}>Enable Multiselection</button>
                <div className="accordian">
                    {data && data.length >0 ?
                    data.map((dataItem)=> <div key={dataItem.id} className="item">
                        <div onClick={
                            enableMultiselection ?()=>{ handleMultipleSelection(dataItem.id)} : ()=>{handleSingleSelection(dataItem.id)}
                            } className="title">
                            <h3>{dataItem.question} </h3>
                            <span>+</span>
                        </div>
                        {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                        <div className="content">
                            {dataItem.answer}
                        </div>
                        : null}
                    </div>)
                    
                    :<div>No Data found</div>}
                </div>
            </div>
        </>
    )
}