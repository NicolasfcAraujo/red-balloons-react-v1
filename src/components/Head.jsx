import logo from '../images/logo.png'
import { pageLinks } from '../data'
import PageLinks from './PageLinks'
import { useEffect, useRef } from 'react'
import "../../fontawesome-free-6.3.0-web/css/all.min.css"

const Head = ({logoWidth, classFixed, menu}) => {
  useEffect(() => {
    const time = setInterval(() => {
      console.log(menu)
    }, 2000)
  })
  return (
    <>
      <div className={classFixed}>
        <div className='logo'>
            <img src={logo} alt="red balloons" style={{width:`${logoWidth}px`}}/>
        </div>
        {/*         MENU TOGGLE         */}
        {menu ?
          <>
            <div></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <button className='menuBtn'>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
          </>
          : 
          <>
            <nav className='links' style={{gridTemplateColumns: `repeat(${pageLinks.length}, 1fr)`}}>
              <PageLinks links={pageLinks}/>
            </nav>
          </>
        }
      </div>
      <div style={{height: "50px", background: "black", position: "absolute", top: "120px", width: "100vw", zIndex: "2"}}>

      </div>
    </>
  )
}
export default Head