import SocialLinks from "./SocialLinks"

const date = new Date

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h6 style={{paddingLeft: "20px", fontFamily: 'Montserrat', color: "white"}}>COPYRIGHT © {`${date.getFullYear()}`} RED BALLOONS STUDIOS.</h6>
            </div>
            <div>
                <SocialLinks/>
            </div>
        </div>
    )
}
export default Footer