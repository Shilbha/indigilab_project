import React from 'react'
import './App.css';
import icon3 from './icon3.png';
import icon1 from './icon1.png';
import icon2 from './icon2.png';


function WorkFlow() {
  return (
    <div>
        <h2>easy to use</h2>
        <div className="container">
            <div className="row">
            <div className="col">
                <img src={icon3} alt="" style={{width:"150px",marginLeft:"-10px"}}/>
                
            </div>
            <div className="col">
                <img src={icon2} alt="" style={{width:"150px",marginLeft:"80px"}}/>
            </div>
            <div className="col">
               <img src={icon1} alt="" style={{width:"150px",marginLeft:"150px"}}/>
            </div>
        </div>
        </div>
        <div className="container1">
            <div className="row">
            <div className="col">
                <p style={{color:"#414141",fontVariant:'small-caps',fontSize:"22px"}}>upload the image!</p>
            </div>
            <div className="col">
               <p style={{color:"#414141",fontVariant:'small-caps',fontSize:"22px",marginLeft:"100px"}}>get the text!</p>
            </div>
            <div className="col">
              <p style={{color:"#414141",fontVariant:'small-caps',fontSize:"22px",marginLeft:"150px"}}>translate it!</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WorkFlow