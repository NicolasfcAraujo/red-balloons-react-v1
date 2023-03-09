import logo from '../images/logo.png'
import { pageLinks } from '../data'
import PageLinks from './PageLinks'

const Head = ({logoWidth, classFixed}) => {

  return (
    <div className={classFixed}>
      <div className='logo'>
          <img src={logo} alt="red baloons" style={{width:`${logoWidth}px`}}/>
      </div>
      <nav className='links' style={{gridTemplateColumns: `repeat(${pageLinks.length}, 1fr)`}}>
          <PageLinks links={pageLinks}/>
      </nav>
    </div>
  )
}
export default Head