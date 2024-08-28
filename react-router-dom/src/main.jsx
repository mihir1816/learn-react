
import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Home from './Componants/Home/Home.jsx'
import About_us from './Componants/About_us/About_us.jsx'
import User from './Componants/User/User.jsx'
import Contact from './Componants/Contact/Contact.jsx'
import Root from './Root.jsx'
import Github  , {getdatabyloder}  from './Componants/Github/Github.jsx'


const router = createBrowserRouter(
createRoutesFromElements(

    <Route path='/' element={ <Root /> }  >
        <Route path='' element={ <Home /> } />
        <Route path='about' element={ <About_us /> } />
        <Route path='contact' element={ <Contact /> }  />
        <Route 
        path='github' 
        element={<Github />} 
        loader={getdatabyloder} 
      />
        <Route path='user/:userid' element={<User />} />
    </Route>

)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
