import { useState } from "react";
//array object destructure
function New() {
  const[state,setstate]=useState("this is page 1");
  function changePage2() {
    setstate("this is page 2");
  }
  function changePage1(){
    setstate("this is page 1");

  }
  return (<>
  <div>
  {state}
</div>
  <button onClick={changePage2}>Go to page 2</button>
    <button onClick={changePage1}>GO to page 1</button>

</>
  );
}

export default New;
