import './App.css';

import Home from './components/Home';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router>
      

          <Routes>
            <Route exact path="/signup" element={<Signup />}>
              {" "}
            </Route>
            <Route exact path="/login" element={<Login />}>
              {" "}
            </Route>
            <Route exact path="/" element={<Home/>}>
              {" "}
            </Route>
            {/* <Route exact path="/about" element={<About />}>
              {" "}
            </Route>
            <Route exact path="/notes" element={<Notes />}>
              {" "}
            </Route>
            <Route exact path="/editnote" element={<EditNote />}>
              {" "}
            </Route>
            <Route exact path="/addnote" element={<AddNote />}>
              {" "}
            </Route> */}
          </Routes>
        </Router>
    </>
  );
}

export default App;
