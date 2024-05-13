import { useState } from 'react'
import './App.css'
import Head from './Head'
import Sidebar from './Sidebar'
import Home from './Home'
import Cards from './Cards'

function App() {
  const [openSidebarToggle,setOpenSidebarToggle]=useState(false)

  const OpenSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Head OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home/>
    </div>
  )
}

export default App
