import { useState } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Partners from "./sections/Partners";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav/>
      <Hero/>
      <Features/>
      <Partners/>
      <Reviews/>
      <Footer/>
    </>
  );
}

export default App;
