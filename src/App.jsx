import './App.css'
import Navbar from './components/NavBar'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='flex'>
        <Navbar />
        <Routes>
          <Route name="home" path='/' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
