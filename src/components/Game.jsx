const Game = ({id, image, alt, name}) => {
    return (
        <article key={id} className='gameArticle' style={window.innerWidth > 800 ? {width: "400px"} : {width: "280px"}}>
            <a href="" style={{display: "grid", gridTemplateColumns: "1fr", justifyItems: 'center', textDecoration: 'none'}}>
                <h2 style={{fontFamily: 'Montserrat', paddingBottom: "10px", color: "#f5f5f5"}}>
                    {name}
                </h2>
                <div style={window.innerWidth > 800 ? 
                            {width: "400px", height: "400px", overflow: "hidden"} 
                            : 
                            {width: "280px", height: "280px", overflow: "hidden"}}>
                    <img style={{width: "100%"}} src={image} alt={alt} />
                </div>
            </a>
        </article>
    )
}
export default Game