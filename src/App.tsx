import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Companents/Navbar'
import HomePages from './Companents/Pages/HomePages'
import ContactCard from './Companents/Pages/ContactCard'
import AboutUs from './Companents/Pages/AboutUs'
import Pricing from './Companents/Pages/Pricing'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<HomePages />} />
        <Route path="/ContactCard" element={<ContactCard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}
export default App  