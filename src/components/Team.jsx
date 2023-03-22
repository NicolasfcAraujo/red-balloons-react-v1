import { useEffect, useState } from "react"
import { people } from "../data"

const Team = () => {
    const [gridColumns, setGridColumns] = useState(null)
    const [articleSize, setArticleSize] = useState(null)

    const handleTeamColumns = () => {
        if (window.innerWidth < 800) {
            setArticleSize(150)
        } else {
            setArticleSize(250)
        }
        setGridColumns(Math.floor((window.innerWidth*0.8)/articleSize))
    }

    useEffect(() => handleTeamColumns())
    useEffect(() => {
        window.addEventListener("resize", () => handleTeamColumns())
    },[])

    return (
        <section style={{padding: "45px 45px", fontFamily: 'Golos Text'}}>
            <div>
                <h1 style={{fontSize: "4rem", fontFamily: 'Golos Text'}}>TEAM</h1>
            </div>
            <div style={{display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                        justifyItems: "center", paddingTop: "45px"}}>
                {people.map((person) => {
                    const { id, name, image, position, social } = person
                    return (
                        <article key={id} style={{width: `${articleSize}px`, paddingBottom: "50px"}}>
                            <div>
                                <img style={{width: `${articleSize}px`}} src={image} alt={name} />
                            </div>
                            <div>
                                <p style={{fontSize: articleSize < 200 ? "1rem":"1.6rem"}}>{name}</p>
                                <p style={{fontSize: articleSize < 200 ? "0.8rem":"1.2rem"}}>{position}</p>
                                <ul style={{display: "flex"}}>
                                    {social.map((socialMedia) => {
                                        const { socialId, socialName, url} = socialMedia

                                        return (
                                            <li key={socialId} style={{listStyle: "none", padding: "15px 20px 0 0", 
                                                                       fontSize: articleSize < 200 ? "1.2rem" : "1.4rem"}}>
                                                <a href={url} style={{textDecoration: "none", color: "rgb(40,40,40)"}}>
                                                    <i class={socialName}></i>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}
export default Team