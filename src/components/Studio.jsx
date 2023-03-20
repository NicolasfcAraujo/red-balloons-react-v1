const Studio = () => {
    return (
        <section style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                         gridTemplateRows: "repeat(2, 1fr)", height: "1000px"}}>
            <div style={{gridColumnStart: "1", gridColumnEnd: "2",
                         gridRowStart: "1", gridRowEnd: "2", background: "red"}}>

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