import { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import translate from "translate";
import trans from './trans.png';
import copy from './copy.png'
import arrow from './arrow.png'

function Converter(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");
  const[inputval,setinputval]=useState("");
  const[click,setClick]=useState(false);
  const data = props.data
   
  const worker = createWorker();

  const convertImageToText = useCallback(async () => {
    if(!selectedImage) return;
    await worker.load();
    await worker.loadLanguage("eng+jpn");
    await worker.initialize("eng+jpn");
    const { data } = await worker.recognize(selectedImage);
    setTextResult(data.text);
   
  
  }, [worker, selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText])

  const handleChangeImage = () => {
    if(data) {
      setSelectedImage(data);

    } else {
      setSelectedImage(null);
      setTextResult("")
      
    }
  }
 
   const translation = () =>{
    translate.engine = "google";
    translate.key = process.env.GOOGLE_KEY;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
  
    if (from == "english") {

      if (to == "japanese") {
        const text = translate(textResult, { to: "ja" }).then((result)=>{
            setinputval(result)
           
         setClick(true)

        });
      }

      
    }
if (from == "japanese") {
  translate.from = "jpn";
  if (to == "english") {
    const text = translate(textResult, { to: "en" }).then((result)=>{
        setinputval(result)
     setClick(true)

    });
  }

      
    }
    
   }
  return (
    <div className="App" >
    
    
    
       
        <button type="button" class="btn btn-secondary btn2" onClick={handleChangeImage}>convert</button>
  
    
     
      <div>
        
        <div className="input-wrapper">
      <select id="from" style={{marginLeft:"-210px"}}>
        <option className='from' selected value="english">English</option>
        <option value="japanese">Japanese</option>
 </select>
      <img src={arrow} alt="" className='img-a' />
      <select id="to" style={{marginLeft:"10px"}}>
       
        <option value="english">English</option>
        <option value="japanese">Japanese</option>


      </select>

<a >
  <img src={trans} alt="" onClick={translation} className="btn-trans"/>
</a>
       <CopyToClipboard text={textResult}>
        <a>
       <img src={copy} className='btn-copy'/>
        </a>
        </CopyToClipboard>
        </div>
      </div>
     
      <div className="result1">
       {textResult && (
          <div>
            <p>{textResult}</p>
          </div>
        )}
       </div>
       {click && inputval}
    </div>
  );
}

export default Converter;