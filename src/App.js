import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Desboard from "./Components/Desboard/Desboard";
import Blog from "./Components/Blog/Blog";
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';
import Error from './Components/Error/Error';
function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/desboard' element={<Desboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
