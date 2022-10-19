import React from 'react'
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './icon8.png';
import icon9 from './icon9.png';


function Features() {
  return (
    <div id='features'>
       <div className="wrapper">
        <h2>key features</h2>
        <div className="container">
            <div className="row">
            <div className="col">
                <img src={icon8} alt="" style={{width:"70px",marginLeft:"-10px"}}/><p>
                best free image to text converter</p>
                <p className='para'>No matter what types of images you need to convert, our online image to text converter is more than just a converter. It’s the go-to solution for all of your image to text conversion needs.</p>
            </div>
            <div className="col">
                <img src={icon6} alt="" style={{width:"70px"}}/>
                <p>
                no login required</p>
                <p className='para p1'>You can enjoy the benefits of all features offered by our free image to text converter without having to log in.</p>
            </div>
            <div className="col">
               <img src={icon4} alt="" style={{width:"70px",marginLeft:"10px"}}/>
               <p style={{marginLeft:"100px"}}>copy the text</p>
               <p className='para p1'>By just clicking the copy text icon, you may easily copy the extracted text using our copy text tool.</p>
            </div>
        </div>
        </div>
        <div className="container2">
            <div className="row">
            <div className="col">
            <img src={icon5} alt="" style={{width:"70px",marginLeft:"60px"}}/>
            <p>can be translated into desired language</p>
            <p className='para p2'>we offer you an option to translate the extracted text into any language you desire. If the extracted text is in English, using our translation tool you can  seamlessly translate it to Japanese without using a third-party service.</p>
            </div>
            <div className="col">
             
            <img src={icon7} alt="" style={{width:"70px",marginLeft:"25px"}}/>
            <p style={{marginLeft:"100px"}}>
                universal conversion</p>
                <p className='para p3'>Our free image to text converter works on any OS, including Windows, Mac, and Linux. Because of this, you can convert image to text from any OS or device as long as you have an Internet connection.</p>
            </div>
            <div className="col">
            <img src={icon9} alt="" style={{width:"70px",marginLeft:"0px"}}/>
            <p style={{marginLeft:"80px"}}>no language constraints</p>
            <p className='para p3'>There are no language restrictions on our converter. It can extract texts from pictures with just English or Japanese text or images with both kinds of content.</p>
            </div>
           
        </div>
        </div>
       </div>

    </div>
  )
}

export default Features