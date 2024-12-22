import React, { useState } from "react";


function About() {
    const [state,setState]=useState(false);
    const func = () =>{
        setState(true);
    }
  return (
    <>
    <button onClick={func}>click me</button>
    {state &&
        <div>i am a Superhero</div>
    }
    </>
  )
}

export default About  