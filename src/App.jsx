// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InputMain from './components/login/InputMain'




function App() {

  function handleLogin() {
    console.log('Login')
  }

  function handleRegister() {
    console.log('Register')
  }

  function handleReset() {
    console.log('Reset')
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Home</div>
    },
    {
      path: '/login',
      element: <InputMain type="Login" callback={handleLogin}/>
    },
    {
      path: '/register',
      element: <InputMain type="Register" callback={handleRegister}/>
    },
    {
      path: '/reset',
      element: <InputMain type="Reset" callback={handleReset}/>
    }
  ]);
  return (
    <>
      {/* <Login type="Register"/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
