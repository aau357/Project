import './App.css'
import NavigationBar from './components/NavigationBar'
import About from './components/Pages/About'
import ContactCard from './components/Pages/ContactCard'
import Projects from './components/Pages/Projects'
import Skills from './components/Pages/Skills'
const App = () => {
  return (

    <div className="">
      <NavigationBar />
    
    
      <About />
      <Skills />
      <Projects />
      <ContactCard />
    </div>
  )
}
export default App
