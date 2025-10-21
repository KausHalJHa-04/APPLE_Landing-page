// import { useState } from 'react'

// import './app.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all';
import ShowCase from './components/ShowCase';
import Performance from './components/Performance';

gsap.registerPlugin(ScrollTrigger);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />

    </main>
  )
}

export default App
