import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Instructors from "./components/Instructors"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Instructors />
      <Footer />
    </div>
  );
}

export default App;
