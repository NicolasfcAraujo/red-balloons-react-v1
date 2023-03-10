import { useState } from "react"
import { galleryImages } from "../data"

const Gallery = () => {
    const [images, setImages] = useState(galleryImages)
    const [gridColumns, setGridColumns] = useState(5)

    useState(() => {
        window.addEventListener("resize", () => {
            const columnsNumber = Math.floor(window.innerWidth / 300)
            setGridColumns(columnsNumber)
        })
    })
    return (
        <section style={{display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
            {images.map((image) => {
                const {id, url} = image
                return(
                    <div key={id} style={{width: `calc(100vw / ${gridColumns})`,
                                          height: `calc(100vw / ${gridColumns})`,
                                          display: "flex", justifyContent: "center", alignItems: "center",
                                          overflow: "hidden"}}>
                        <img src={url} alt="img" className="galleryImg" />
                    </div>
                )
            })}
        </section>
    )
}

export default Gallery