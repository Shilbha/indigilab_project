import React from 'react'
import mail from './mail.png';
import phone from './phone.png';
import linkedin from './linkedin.png';
import location from './location.png';

function Footer() {
  return (
    <div id="footer">
      <div className="footer">
      <div className="container3">
            <div className="row">
            <div className="col">
              <h1><span style={{color:"#ffdf00"}}>Zo</span>Text</h1>
                <p>Our free online image to text converter offers you a lot features. It's just more than a converter. Using our image to text converter, you can also translate the extracted text to Japanese and vice-versa. It's a go to solution for all your conversion needs.</p>
            </div>
            <div className="col">
            <div class="row row-cols-1" style={{marginLeft:"150px"}}>
              <div class="col">
                <img src={mail} alt="" /><p className='p-box'>shilbhasathishkumar@gmail.com</p>
              </div>
              <div class="col">
              <img src={phone} alt="" />
              <p className='p-box'>+91 9345323858</p>
              </div>
              <div class="col">
              <img src={linkedin} alt="" />
              <p className='p-box'>Shilbha Sathishkumar</p>
              </div>
              <div class="col">
              <img src={location} alt="" />
              <p className='p-box'>Chennai,Tamil Nadu, India</p>
              </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer