import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';
import LandingPage from './screens/LandingPage/LandingPage';
const App = ()=>(
    <BrowserRouter>
    <Header />
    <main> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/mynotes' element={<MyNotes />} />
        
      </Routes>
     </main>
    <Footer />
    </BrowserRouter>
);
      

export default App;
