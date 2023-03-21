import orcImg from "../images/orc.jpg"

const Studio = () => {
    return (
        <section style={{display: "grid", gridTemplateColumns: "repeat(2, 50vw)",
                         gridTemplateRows: "repeat(2, 500px)", height: "1000px"}}>
            <div style={{gridColumnStart: "1", gridColumnEnd: "2",
                         gridRowStart: "1", gridRowEnd: "2", background: "red",
                         backgroundImage: `url(${orcImg})`, backgroundPosition: "center"}}>
            </div>
            <div style={{gridColumnStart: "2", gridColumnEnd: "3",
                         gridRowStart: "1", gridRowEnd: "2", background: "grey"}}>

            </div>
            <div style={{gridColumnStart: "1", gridColumnEnd: "3",
                         gridRowStart: "2", gridRowEnd: "3", background: "white"}}>

            </div>
        </section>
    )   
}
export default Studio