import React from "react";
import Navbar from "./Navbar";
import Todos from "./Todos";


function Home(){
    return(
    <div className="home">
    <Navbar/>
    <Todos/>
    </div>
    )
}

export default Home;
