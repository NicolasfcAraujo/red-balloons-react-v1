import { Link } from "react-scroll"

const PageLinks = ({links, className, altMenuRef}) => {

  return (
    <>
        {links.map((link) => {
            const {id, url, name} = link
            return <li key={id} className={className}>
                    <Link activeClass="active" 
                          to={url} 
                          spy={true} 
                          smooth={true} 
                          offset={-115} 
                          duration={750}
                          style={{cursor: "pointer"}}>{name}</Link>
                   </li>
        })}
    </>
  )
}
export default PageLinks