import { socialLinks } from "../data"

const SocialLinks = () => {
    return (
        <ul style={{display: "flex", listStyle: "none", justifyContent: "flex-end"}}>
            {socialLinks.map((link) => {
                const {id, className, url} = link
                return (
                    <li key={id} style={{paddingRight: "20px"}}>
                        <a href={url} style={{textDecoration: "none"}}>
                            <i className={className} style={{color: "#7a7a7a", fontSize: "1.2rem"}}></i>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SocialLinks