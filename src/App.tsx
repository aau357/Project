import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from './Companents/Pages/HomePages'
import ContactCard from './Companents/Pages/contactCard'
const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="" element={<HomePages />} />
        <Route path='contactCard' element={<ContactCard/>}/>
        </Routes>
      </Router>


    </div>

  )
}

export default App