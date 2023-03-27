import React from "react";
import Navbar from "./Navbar";
import Todos from "./Todos";
// import { Link } from "react-router-dom";

// import Signup from "./Signup";

function Home(){
    return(
    <div className="home">
    <Navbar/>
    <Todos/>
    {/* <Signup/> */}
    {/* <Link to="/sign-in">Click to view our contact page</Link> */}
    </div>
    )
}

export default Home;
