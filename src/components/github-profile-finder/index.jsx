import { useEffect, useState } from "react"
import User from "./user";
import './style.css'

export default function GithubProfileFinder(){
    const [userName,setUserName] = useState('iamtejj');
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(false)

    async function fetchGithubUserData(){
        setLoading(true)
        const res = await fetch('https://api.github.com/users/'+userName);
        const data = await res.json();
        if(data){
            setUserData(data)
            setLoading(false)
        }
    }

    function handleSubmit(){
        fetchGithubUserData()
    }
    
    useEffect(()=>{
        fetchGithubUserData()
    },[]);

    if(loading){
        return(
            <>
            <h1>Loading Data Please Wait</h1>
            </>
        )
    }
    return(
        <>
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input name="search-by-username" type="text" placeholder="Search Github Username...." value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div>
        </>
    )
}