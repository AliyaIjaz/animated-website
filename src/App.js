import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
    const location=useLocation();
  return (
   <>
   
     <Navbar />
     <TransitionGroup>
     <CSSTransition
     timeout={1000}
     classNames='fade'
     key={location.key}
     >
     <Routes location={location}>
       <Route path="/" exact element=
       { <Home/>} />
       <Route path="services" element=
       { <Services/>} />
      <Route path="sign-up" element=
       { <SignUp/>} />
      <Route path="products" element=
       { <Products/>} />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
    
    </>
  );
}

export default App;
