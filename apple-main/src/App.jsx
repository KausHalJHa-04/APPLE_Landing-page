// import { useState } from 'react'

// import './app.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all';

import Performance from './components/Performance';
import Showcase from './components/ShowCase';
import Features from './components/Features';
import Highlight from './components/Highlight';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlight />
      <Footer />
    </main>
  )
}

export default App
