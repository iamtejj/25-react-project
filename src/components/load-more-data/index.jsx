import { useState } from 'react'
import './style.css'
import { useEffect } from 'react';

export default function LoadmoreData(){
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0); 
    const [loading,setLoading] = useState(false);
    const [disableButton,setDisableButton] = useState(false)
    
    async function fetchProduct(){
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}`);
        const data = await response.json();
        setLoading(true)
        setProducts((oldProduct)=>{
            return [...oldProduct,...data.products];
        })
        setLoading(false)
    }
    
    useEffect(()=>{
        fetchProduct()
    },[count,]);
  
    useEffect(()=>{
        if(products && products.length == 100) setDisableButton(true)
    },[products]);
    if(loading){
        return(
            <>
                <div>Products is Loading ..... </div>
            </>
        )
    }
    return(
        <>
            <div className='load-more-container'>
                <div className='product-container'>
                {products && products.length ?
                products.map((item)=>{
                    return(
                    <div className='product' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    )
                })
                :null}
                </div>
                <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>
                Load More Products
                </button>
                {disableButton ? <p>You have reached to 100 products</p> : null}
            </div>
            </div>
        </>
    )
}