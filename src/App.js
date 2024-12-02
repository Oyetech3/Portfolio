import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './Routes/Layout';
import Home from './Routes/Home';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index path="/" element= {<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route> 
        </Routes>
      </BrowserRouter>
      <div className="socials">
            <a className="acc" href="http://linkedin.com/in/oyekola-abdulqobid-bolaji-999490271">
                <img src="/linknd.png" alt="linknd"/>
            </a>
            <a className="acc" href="https://github.com/Oyetech3">
                <img src="/github.png" alt="linknd"/>
            </a>
            <a className="acc" href="https://x.com/oyekolaabdulqo1?s=21">
                <img src="/twitter.png" alt="linknd"/>
            </a>
      </div>
    </div>
  
  );
}

export default App;
