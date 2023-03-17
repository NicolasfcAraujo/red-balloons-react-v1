import React, { useState, useContext } from "react"
import { galleryImages } from "./data"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [imageId, setImageId] = useState(1)

    const handleOpenGallery = (id) => {
        setImageId(id)
        setIsGalleryOpen(true)
    }

    const handleCloseGallery = () => {
        setIsGalleryOpen(false)
        setImageId(1)
    }

    const handleNextImage = () => {
        setImageId(imageId + 1)
        if (imageId >= galleryImages.length) {
            setImageId(1)
        }
    }

    const handlePreviousImage = () => {
        setImageId(imageId - 1)
        if (imageId <= 1) {
            setImageId(galleryImages.length)
        }
    }

    return (
        <AppContext.Provider value={{isGalleryOpen,
                                     handleOpenGallery,
                                     handleCloseGallery,
                                     imageId,
                                     handleNextImage,
                                     handlePreviousImage}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }