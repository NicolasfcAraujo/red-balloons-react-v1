import logo from '../images/logo.png'
import { pageLinks } from '../data'
import PageLinks from './PageLinks'
import { useEffect, useRef, useState } from 'react'
import "../../fontawesome-free-6.3.0-web/css/all.min.css"
import SocialLinks from './SocialLinks'

const Head = ({logoWidth, classFixed, menu}) => {
  const [altMenu, setAltMenu] = useState(false)

  return (
    <>
      <div className={classFixed}>
        <div className='logo'>
            <a href="">
              <img src={logo} alt="red balloons" style={{width:`${logoWidth}px`}}/>
            </a>
        </div>
        {/*         MENU TOGGLE         */}
        {menu ?
          <>
            <div></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <button className='menuBtn' onClick={() => setAltMenu(!altMenu)}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </>
          : 
          <>
            <nav className='links' style={{gridTemplateColumns: `repeat(${pageLinks.length}, 1fr)`}}>
              <PageLinks links={pageLinks}/>
            </nav>
            <SocialLinks/>
          </>
        }
      </div>
      {altMenu &&
        <div className='altMenu'>
          <PageLinks links={pageLinks}/>
          <SocialLinks justify='flex-start'/>
        </div>
      }
    </>
  )
}
export default Head