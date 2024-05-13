import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs'
function Head({OpenSidebar}) {
  const { loginWithRedirect , isAuthenticated , logout} = useAuth0();
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch className='icon'/>
        </div>
        <div className='header-right'>
        {isAuthenticated ? (
          <button className='csslogout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        ) : (
          <button className='csslogin' onClick={() => loginWithRedirect()}>Log In</button>
        )}
        </div>
    </header>
  )
}

export default Head
