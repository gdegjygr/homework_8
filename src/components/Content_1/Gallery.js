import React, {useState} from "react";
import galleryModule from './Gallery.module.css'
import sliderImage1 from '../images/screenshot1-prevImage.png'
import sliderImage2 from '../images/screenshot1-image.png'
import sliderImage3 from '../images/screenshot2-image.png'
import sliderImage4 from '../images/screenshot3-image.png'
import sliderImage5 from '../images/screenshot5-image.png'
import sliderImage6 from '../images/screenshot6-image.png'

export default function Gallery() {
    const imageBase = [
        {image: sliderImage1},
        {image: sliderImage2},
        {image: sliderImage3},
        {image: sliderImage4},
        {image: sliderImage5},
        {image: sliderImage6},
    ]
    
    const [screenshot, setScreenshot] = useState(imageBase[0].image)

    return(
        <div className={galleryModule.galleryParent}>
            <div>
                <img 
                alt="slider image" 
                src={screenshot}                
                className={galleryModule.sliderImage}
                />
            </div>
            <div className={galleryModule.galleryCarousel}>
                {imageBase && imageBase.map(item => (
                    <img
                    alt="screenshot"
                    src={item.image}
                    className={galleryModule.thumbnail}
                    onClick={() => setScreenshot(item.image)}
                    />
                ))}
            </div>
        </div>
    )
};
