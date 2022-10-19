import './App.css';
import DragnDrop from './DragnDrop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro';
import Features from './Features';
import Footer from './Footer';
import WorkFlow from './WorkFlow';


function App() {
 
  return (
    <div className='App'>
      
<div className="container">
  <div className="row intro-wrapper"><Intro/></div>
  <div className="row tool-box"><WorkFlow/></div>
  <div className="row features"><Features/></div>
  <div className="row tool-box" ><DragnDrop></DragnDrop></div>
  <div className="row footer"><Footer/> </div>
</div>
    
     
   </div> 

  );
}

export default App;
