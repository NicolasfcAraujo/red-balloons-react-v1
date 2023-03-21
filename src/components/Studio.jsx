import orcImg from "../images/orc.jpg"
import { useGlobalContext } from "../context"

const Studio = () => {

    const { isOrc, handleOrcToggle } = useGlobalContext() 

    return (
        <section style={{display: "grid", gridTemplateColumns: "repeat(4, 25vw)",
                         gridTemplateRows: "repeat(2, 500px)", height: "1000px"}}>
            <div style={{gridColumnStart: "1", gridColumnEnd: isOrc? "4" : "2",
                         gridRowStart: "1", gridRowEnd: "2", background: "red",
                         backgroundImage: `url(${orcImg})`, backgroundSize: "cover", 
                         transition: "1s"}}
                 onClick={handleOrcToggle}>
            </div>
            <div style={{gridColumnStart: isOrc ? "4" : "2", gridColumnEnd: "5",
                         gridRowStart: "1", gridRowEnd: "2", background: "grey", fontFamily: 'Golos Text',
                         padding: "20px", fontSize: window.innerWidth > 800 ? "1.4rem" : "0.8rem", 
                         whiteSpace: isOrc ? "nowrap": "normal", transition: "1s"}}
                 onClick={handleOrcToggle}>
                <p>
                    <h2>THE STUDIO</h2><br />
                    We are always looking to create spectacular worlds. <br /><br />

                    You will always be an inspiration to continue this wonderful legacy. <br /><br />

                    Our mission is to create art and games, making you have fun, imagine while looking and  enter you to a new universe involving yourself in fantastic experiences.<br /><br />

                    Red Balloons Studios is an indie studio in Recife, PE. Brazil.<br /><br />

                    If you have any questions about our work, please contact: <br />
                    e-mail: contato@redballoonsgames.com.br<br /><br />

                    Service: outsource of illustration, concept art and 3d modeling
                </p>
            </div>
            <div style={{gridColumnStart: "1", gridColumnEnd: "5",
                         gridRowStart: "2", gridRowEnd: "3", background: "white"}}>

            </div>
        </section>
    )   
}
export default Studio