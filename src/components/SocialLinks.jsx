import { socialLinks } from "../data"

const SocialLinks = ({justify="flex-end"}) => {
    return (
        <ul style={{display: "flex", listStyle: "none", justifyContent: justify}}>
            {socialLinks.map((link) => {
                const {id, className, url} = link
                return (
                    <li key={id} style={{paddingRight: "40px"}}>
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