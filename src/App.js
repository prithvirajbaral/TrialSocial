import './App.css';
import Home from './Components/Home';
import Posts from './Components/Posts';
import Todos from './Components/Todos';
import Albums from './Components/Albums';
import Photos from './Components/Photos';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/todos/:id" element={<Todos />} />
          <Route path="/albums/:id" element={<Albums />} />
          <Route path="/photos/:id" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

