import React from "react";
import { FaHome } from "react-icons/fa";
import './Home.css'

function Home()
{
    const[first,setfirst] = React.useState('Home'); 

    const func = () =>{
        if (first=="Home") {
            setfirst('about')
            
        }
        else{
            setfirst('Home')
        }
    }
    
    return(
        <>
        <h1><FaHome onClick={func} className="icons" /> {first}</h1>
        </>
    );
}

export default Home;