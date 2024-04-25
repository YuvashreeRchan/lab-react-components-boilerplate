
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from "./components/Body";
import imageData from './components/ImageData';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Body imageData={imageData}/>
      <GallaryFooter/> 
    </div>
  );
}

export default App;
