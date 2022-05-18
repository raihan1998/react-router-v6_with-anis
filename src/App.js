import { Route, Routes } from "react-router-dom";
import "./App.css";
// components
import Header from "./components/Header/Header";
// Pages
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/blogs/:title" element={<Blog></Blog>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
