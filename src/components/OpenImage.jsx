import { galleryImages } from "../data"
import { useGlobalContext } from "../context"

const OpenImage = () => {
    const { imageId, handleNextImage, handlePreviousImage, handleCloseGallery } = useGlobalContext()
    return (
        <section>
            <div>
                <button className="btn btn-cancel" onClick={handleCloseGallery}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div>
                <button className="btn btn-next" onClick={handleNextImage}>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <div>
                <button className="btn btn-previous" onClick={handlePreviousImage}>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
            </div>            
            <div className="openImages">
                {galleryImages.map((image) => {
                    const {id, url} = image
                    let imgClass = ''
                    if (id == imageId) {
                        imgClass = 'galleryImg activeImg'
                    } else {
                        imgClass = 'galleryImg'
                    }
                    return (
                        <div key={id} className={imgClass}>
                            <img src={url}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default OpenImage