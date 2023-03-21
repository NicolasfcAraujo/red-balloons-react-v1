import "../../fontawesome-free-6.3.0-web/css/all.min.css"
import { Link } from "react-scroll"
import { useState } from "react"

const ScrollToTop = ({}) => {
    const [offset, setOffset] = useState(false)

    useState(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500) {
                setOffset(true)
            } else {
                setOffset(false)
            }
        })
    })

    return (
        <div style={{width: "60px", height: "45px", background: "rgb(256,32,32)",
                     position: "fixed", bottom: "10vh", right: offset ? "0" : "-60px",
                     transition: "0.4s", fontSize: "1.6rem", display: "flex",
                     alignItems: "center", paddingLeft: "10px"}}>
            <Link activeClass="active" 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-120} 
                    duration={750}
                    style={{cursor: "pointer"}}>
                <i className="fa-solid fa-arrow-up"></i>
            </Link>
        </div>
    )
}
export default ScrollToTop