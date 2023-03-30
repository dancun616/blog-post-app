import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import LoginPage from "./routes/login";
import SignupPage from "./routes/signup";
import PostsPage from "./routes/post";
import Comments from "./routes/comments";
import { Route, Routes } from "react-router-dom";
import AuthorProfile from "./routes/author";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/post" element={<PostsPage />} />
        <Route path="/author" element={< AuthorProfile/>} />
        <Route path="/comments" element={< Comments/>} />

      </Routes>
    </>
  );
}

export default App;
