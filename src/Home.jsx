import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
import { FaBug , FaExpand} from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";
import Cards from './Cards';

function Home() {
  return (
    <main className='main-container'>
        {/* <div className='main-title'>
            <h3>SecZap</h3>
        </div> */}
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Scans</h3>
                    <FaExpand className='card_icon colo2'/>
                </div>
                <h1>1234</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Threats Detection</h3>
                    <FaBug className='card_icon colo'/>
                </div>
                <h1>78</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>OSINT Analysis</h3>
                    <FaRegCalendarPlus className='card_icon colo3'/>
                </div>
                <h1>42</h1>
            </div>
        </div>
        <div>
            <Cards/>
            {/* <div> yeh vala charts ke liye tha , but since i don't need to make any chart here </div> */}
            {/* {showCards && <Cards />} */}
        </div>
    </main>
  )
}

export default Home
