import { galleryImages } from "../data"

const OpenImage = () => {

    return (
        <section>
            <div>
                {galleryImages.map((image) => {
                    const {id, url} = image
                    return (
                        <div key={id} className={}>
                            <img src={url}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default OpenImage