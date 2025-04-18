import react from "react";
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/*public route before log in*/}
      <Route path="/" element={<Login />} />
      {/*Protected route after log in- dashboard */}
      <Route 
      path='/dashboard'
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
      />
      
    </Routes>
  )
}

export default App;
