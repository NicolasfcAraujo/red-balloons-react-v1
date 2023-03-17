import { useEffect, useState } from "react"
import { galleryImages } from "../data"
import { useGlobalContext } from "../context"

const Gallery = ({padding}) => {
    const [images, setImages] = useState(galleryImages)
    const [gridColumns, setGridColumns] = useState(null)
    const [columnSize, setColumnSize] = useState(300)

    const { handleOpenGallery } = useGlobalContext()

    const handleColumnsCheck = () => {
        if (window.innerWidth < 815){
            setColumnSize(150)
        } else if (window.innerWidth < 1000){
            setColumnSize(200)
        } else {
            setColumnSize(300)
        }       
        let columnsNumber = Math.floor(window.innerWidth / columnSize)
        if (columnsNumber < 1) {
            columnsNumber = 1
        }
        setGridColumns(columnsNumber)
    }

    useEffect(() => {
        let newImages = galleryImages.filter((image) => image.id <= gridColumns*2)
        if (newImages.length < gridColumns*2){
            newImages = galleryImages.filter((image) => image.id <= gridColumns)
        }
        setImages(newImages)
    }, [gridColumns])

    useEffect(() => handleColumnsCheck())
    useEffect(() => {
        window.addEventListener("resize", () => {
            handleColumnsCheck()
        })
    },)

    return (
        <section style={{display: "grid", gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                         gridTemplateRows: (galleryImages.length >= gridColumns*2) ? `1fr 1fr`: `1fr`,
                         paddingTop: padding}}>
            {images.map((image) => {
                const {id, url} = image
                return(
                    <div key={id} style={{width: `calc(100vw / ${gridColumns})`,
                                          height: `calc(100vw / ${gridColumns})`,
                                          display: "flex", justifyContent: "center", alignItems: "center",
                                          overflow: "hidden", backgroundSize: "cover", backgroundImage: `url(${url})`,
                                          cursor: "pointer"}} className="galleryItem" onClick={() => handleOpenGallery(id)}>
                    </div>
                )
            })}
        </section>
    )
}

export default Gallery