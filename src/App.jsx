import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function previousHandler(){
    setCount(count-1)
  }

  function NextHandler(){
    setCount(count+1)
  }



  return (
    <div className="mainContainer">
      <div className="content">
        <div className="mainPara">
          <div className="showPara" style={{width:"30px",height:"30px",backgroundColor:count==1?"#5D3FD3":"#ffffff",borderRadius:"50%", color:count==1?"#ffffff":"#5D3FD3",display:"flex",justifyContent:"center",alignItems:"center"}} >
            <p >1</p>
          </div>
          <div className="showPara" style={{width:"30px",height:"30px",backgroundColor:count==2?"#5D3FD3":"#ffffff",borderRadius:"50%",color:count==2?"#ffffff":"#5D3FD3",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p>2</p>
          </div>

          <div className="showPara" style={{width:"30px",height:"30px",backgroundColor:count==3?"#5D3FD3":"#ffffff",borderRadius:"50%",color:count==3?"#ffffff":"#5D3FD3",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p >3</p>
          </div>
        </div>

        <div className="titleContent">
          {count==1?<h5>Step 1:Learn HTML 5</h5>:count==2?<h5>Step 2:Learn CSS 3</h5>:<h5>Step 3:Learn JavaScript</h5>}
        </div>

        <div className="btnContent">
          <button onClick={previousHandler}>Previous</button>
          <button onClick={NextHandler}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App
