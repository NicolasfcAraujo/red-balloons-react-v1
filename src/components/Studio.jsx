import orcImg from "../images/orc.jpg"
import { useGlobalContext } from "../context"

const Studio = () => {

    const { isOrc, handleOrcToggle } = useGlobalContext() 

    return (
        <section style={{display: "grid", gridTemplateColumns: "repeat(4, 25vw)",
                         gridTemplateRows: "repeat(2, 500px)", height: "1000px"}}
                 id="studio">
            <div style={{gridColumnStart: "1", gridColumnEnd: "2",
                         gridRowStart: "1", gridRowEnd: "2", background: "red",
                         backgroundImage: `url(${orcImg})`, backgroundSize: "cover"}}
                 onClick={handleOrcToggle}>
            </div>
            <div style={{gridColumnStart: "2", gridColumnEnd: "5",
                         gridRowStart: "1", gridRowEnd: "2", background: "grey", fontFamily: 'Golos Text',
                         padding: "50px", fontSize: window.innerWidth > 800 ? "1rem" : "0.75rem"}}
                 onClick={handleOrcToggle}>
                <p>
                    <h1 style={{fontSize: "2.4rem", fontWeight: "700"}}>THE STUDIO</h1><br />
                    We are always looking to create spectacular worlds. <br /><br />

                    You will always be an inspiration to continue this wonderful legacy. <br /><br />

                    Our mission is to create art and games, making you have fun, imagine while <br />
                    looking and  enter you to a new universe involving yourself in fantastic experiences.<br /><br />

                    Red Balloons Studios is an indie studio in Recife, PE. Brazil.<br /><br />

                    If you have any questions about our work, please contact: <br />
                    e-mail: contato@redballoonsgames.com.br<br /><br />

                    Service: outsource of <b>illustration</b>, <b>concept art</b> and <b>3d modeling</b>
                </p>
            </div>
            <div style={{gridColumnStart: "1", gridColumnEnd: "5",
                         gridRowStart: "2", gridRowEnd: "3", background: "white"}}
                 id="contacts">

            </div>
        </section>
    )   
}
export default Studio