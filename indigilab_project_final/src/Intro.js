import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'
import intro2 from './intro2.png'


function Intro() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg head "  >
  <div class="container-fluid">

    <a class="navbar-brand" href="#"><img src={logo} alt="" style={{width:"240px",marginTop:"-70px",marginLeft:"-35px"}} /></a>
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav1" style={{marginLeft:"680px"}} >
        <li class="nav-item ">
          <a class="nav-link active nav-box" aria-current="page" href="#">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-box" href="#features">features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-box" href="#tool">tool</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-box" href="#footer">about</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="image">
  <img src={intro2} alt="" style={{width:"1200px",marginLeft:"-190px"}}/>
</div>
<h1>ZoText,</h1>
<div class="box">
  <div class="typed-out">Just the BEST</div>
</div>
<button type="button" class="btn btn-secondary btn1">get started</button>
    </div>
  )
}

export default Intro