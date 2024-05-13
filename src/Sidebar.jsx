import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
import { IoMdQrScanner ,  IoMdSettings} from "react-icons/io";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import Cards from './Cards'; 

function Sidebar({openSidebarToggle,OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaBug/> Seczap
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdQrScanner className='icon'/> Scan
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaRegCalendarPlus className='icon'/> OSINT Analysis
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdSettings className='icon'/> Settings
                </a>
            </li>
            <button className="my-button">Upgrade to Pro</button>
        </ul>
    </aside>
  )
}

export default Sidebar
