import React from "react";


function Navbar(){
    return(
        <div className="nav-bar">
            <h1 className="title">Todo Gen</h1>
            <a href="/" >Home</a>
            <a href="/sign-up" >Sign-Up</a>
            <a href="/sign-in" >Sign-In</a>
        </div>
    )

}

export default Navbar