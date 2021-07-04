import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Routes from './Routes'
import './styles/global.css'

function App() {
  return (
    <div>
      {/* <Routes /> */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Contact /> */}
    </div>
  )
}

export default App
