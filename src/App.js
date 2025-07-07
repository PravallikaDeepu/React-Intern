import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import AdmissionOnline from './Components/AdmissionOnline.js';
import Home from './Components/Card';
import History from './Components/History';
import Vision from './Components/Vision';
import Mission from './Components/Mission';
import Message from './Components/Message';
import Infra from './Components/Infra'
import Academics from './Components/Academics';
import Curriculum from './Components/Curriculum';
import Methodology from './Components/Methodology';
import Resources from './Components/Resources'
import './style/style.css'
import Admissions from './Components/Admissions';
import Faculty from './Components/Faculty';
import Students from './Components/Students';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/admission/form" element={<AdmissionOnline />} />
      <Route path='/' element={<Home/>}></Route>
          <Route path='/contact/' element={<Contact/>} />
          <Route path='/history/' element= {<History/>} />
          <Route path='/vision/' element={<Vision/>}/>
          <Route path='/mission/' element={<Mission/>}/>
          <Route path='/message/' element={<Message/>}/>
          <Route path='/infra/' element={<Infra/>}/>
          <Route path='/academics/' element= {<Academics/>}/>
          <Route path='/curriculum/' element={<Curriculum/>}/>
          <Route path='/methodology/' element={<Methodology/>}/>
          <Route path='/resources/' element={<Resources/>}/>
          <Route path='/admissions' element={<Admissions/>}/>
          <Route path='/faculty/' element={<Faculty/>}/>
         <Route path='/student/' element={<Students/>}/>
         <Route path='/gallery/' element={<Gallery/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
