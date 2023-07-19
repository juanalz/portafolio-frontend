
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/molecules/ResponsiveAppBar/ResponsiveAppBar'
import Home from '@pages/home/index'
import Users from '@pages/users/index'
import '@assets/app.css'
import Projects from '@pages/projects'
import Login from '@pages/auth/login'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { fetchValidateToken } from '@lib/slice/authSlice';

function App() {

  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {  
      const response = await dispatch(fetchValidateToken());
      console.log(response);
    }
    fetchData();
  }, [])
  

  return (
    <Router>
      {user &&
        <ResponsiveAppBar />      
      }
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
