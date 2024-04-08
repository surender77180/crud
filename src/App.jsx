import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './components/Add';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/create' element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App