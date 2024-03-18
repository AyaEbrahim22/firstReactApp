import React from 'react'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import NotfoundPage from './Components/NotfoundPage/NotfoundPage'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'


export default function App() {
  
  let routers = createHashRouter([

    {path:'', element: <Layout/>, children:[
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'portfolio', element: <Portfolio/>},
      {path: 'contact', element: <Contact/>},
      {path: '*', element: <NotfoundPage/>}
    ]}

  ])
  

  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
