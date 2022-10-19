
import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Converter from './Converter'
import cloud from './cloud.png'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function DragnDrop() {
    const[files,setFiles]=useState([])
    
  const{getRootProps,getInputProps}=useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles)=>{
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
      )
      )
    },
    
  })
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "420px",height:"250px",marginLeft:"63px",marginTop:"25px" }} alt="preview" />
      </div>
    </div>
  ))
 

    return (
        <div className='App' id="tool">
          <div className="drag-box">
            <div className="drop-box">
          {/* <div className="tool-box"> */}
            <div {...getRootProps()}>
            
          <input {...getInputProps()} style={{height:"250px",}}/>
          <h6>Or</h6>
          <img src={cloud} alt="" style={{width:"100px",marginLeft:"150px"}}/>
          <p>Drag&Drop images</p>
          </div>
          </div>
          <div className="row" style={{marginTop:"50px"}}>
            <div className="col-6">
            <div className='img'>{images}</div>
            </div>
            
            <div className="col-6 convert">
                 
          <Converter data={files[0]}></Converter>
            </div>
          
          </div>
         
        </div>
        </div>
    
      );
}

export default DragnDrop