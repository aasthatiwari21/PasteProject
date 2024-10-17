import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Paste from './Components/Paste'
import ViewPaste from './Components/ViewPaste'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <div>
          <NavBar/>
          <Home/>
      </div>
    }, 
    {
      path: '/pastes',
      element: 
      <div>
        <NavBar/>
        <Paste/>
      </div>

    },
    {
      path: '/paste/:id',
      element: 
      <div>
        <NavBar/>
        <ViewPaste/>
      </div>

    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
