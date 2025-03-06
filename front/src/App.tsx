import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './Login'
import { Home } from './Home'
import AuthMiddleware from './_middleware/authMiddleware'

function App() {


  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <AuthMiddleware>
            <Home />
          </AuthMiddleware>
        } />
    </Routes>
  )
}

export default App
