//import logo from './logo.svg';
import './App.css';
 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Index } from './page/Index';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Index/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
