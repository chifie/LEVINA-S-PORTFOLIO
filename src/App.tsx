import Navbar from './components/ui/navbar'
import Footer from './components/ui/footer'
import About from './components/home/about'
import Home from './components/home/home'
import Contact from './components/home/contact';
import Skills from './components/home/skills';
import Projects from './components/home/projects';
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
