
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/molecules/ResponsiveAppBar/ResponsiveAppBar'
import Home from '@pages/home/index'
import Users from '@pages/users/index'
import '@assets/app.css'
import Projects from '@pages/projects'
import Login from '@pages/auth/login'

function App() {

  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuarios' element={<Users />} />
        <Route path='/proyectos' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
