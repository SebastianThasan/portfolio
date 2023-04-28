import { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'

const MyImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log('currentIndex is: ' + currentIndex)

    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const imageContainer = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

    const dotsContainerStyle = {
        display: 'flex',
        justifyContent: 'center'
    }

    const dotStyle = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px'
    }

    const getLast = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length-1)
        }
        else {
            setCurrentIndex(currentIndex-1)
        }
    }

    const getNext = () => {
        if (currentIndex === images.length-1) {
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(currentIndex+1)
        }
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const arrowStyles = {
        fontSize: '50px'
    }

    return (
        <div style={container}>
            
            <div>
                <div style={imageContainer}>
                    <div style={arrowStyles}>
                        <BsFillCaretLeftFill onClick={getLast}/>
                    </div>
                    <img src={`${images[currentIndex].src}`} alt='workout app screenshot' />
                    <div style={arrowStyles}>
                        <BsFillCaretRightFill onClick={getNext}/>
                    </div> 
                </div>
                <div style={dotsContainerStyle}>
                    {
                        images.map((image, index) => (
                            <div key={index} style={dotStyle} onClick={() => goToSlide(index)}><RxDotFilled /></div>
                        ))
                    }
                </div>
            </div>
            
        </div>
        
    )
}

export default MyImageSlider