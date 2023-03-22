import orcImg from "../images/orc.jpg"
import { useGlobalContext } from "../context"
import Team from "./Team"

const Studio = () => { 

    return (
        <section id="studio">
            <div style={{display: "flex"}}>
                <div style={{width: "25vw", background: "red",
                            backgroundImage: `url(${orcImg})`, backgroundSize: "cover"}}>
                </div>
                <div style={{ width: "75vw", background: "grey", fontFamily: 'Golos Text',
                            padding: "60px", fontSize: window.innerWidth > 800 ? "1rem" : "0.75rem"}}>
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
            </div>
            
            <div style={{background: "white"}}
                 id="contacts">
                <Team/>
            </div>
        </section>
    )   
}
export default Studio