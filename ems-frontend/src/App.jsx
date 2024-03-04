// Code: Main App component
import './App.css'
import FooterComponent from "./components/FooterComponent.jsx";
import ListComponent from "./components/ListComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StudentComponent from "./components/StudentComponent.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
        <HeaderComponent />
            <Routes>
                // http://localhost:3000/
                <Route path="/" element={<ListComponent />}></Route>
                // http://localhost:3000/students
                <Route path="/products" element={<ListComponent />}></Route>
                // http://localhost:3000/add-student
                <Route path="/add-product" element={<StudentComponent />}></Route>
            </Routes>
        <FooterComponent />
        </BrowserRouter>

    </>
  )
}

export default App
