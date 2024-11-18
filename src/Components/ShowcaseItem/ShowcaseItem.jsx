import './ShowcaseItem.scss'
import PropTypes from 'prop-types'
import blackDot from '../../assets/Showcase/blackDot.svg'
import whiteDot from '../../assets/Showcase/whiteDot.svg'
import { useState } from 'react'
function ShowcaseItem({ title, optionsText, optionsImg, img, price, desciption1, desciption2, desciption3 }) {
    const [selectedColor, setSelectedColor] = useState(1)
    const [selectedShape, setSelectedShape] = useState(1)

    return (
        <div className="showcase-item">
            <h2>{title}</h2>
            <p>{optionsText.join(' / ')}</p>

            <div className="showcase-item-grid">
                <div className="option-img">
                    {optionsImg.map((optionImg, index) => (
                        <div key={index}>
                            <div >
                                <img
                                    src={optionImg}
                                    alt={optionsText[index]}
                                />
                            </div>
                            <p>{optionsText[index]}</p>
                        </div>


                    ))}
                </div>
                <img src={img} alt={title} />
                <div className="showcase-item-footer-order">
                    <h2>{price} ₽</h2>
                    <button>Заказать</button>
                </div>
                <div className="showcase-item-footer-controls">
                    <div className="showcase-item-footer-controls-img">
                        <button
                            className={selectedColor == 1 ? 'active-color' : 'color'}
                            onClick={() => setSelectedColor(1)}
                        >
                            <img src={blackDot} alt="black dot" />
                        </button>
                        <button
                            className={selectedColor == 2 ? 'active-color' : 'color'}
                            onClick={() => setSelectedColor(2)}
                        >
                            <img src={whiteDot} alt="white dot" />
                        </button>
                        <hr />
                        <button className={selectedShape == 1 ? 'active-shape' : 'shape'}
                            onClick={() => setSelectedShape(1)}>круглый</button>
                        <button className={selectedShape == 2 ? 'active-shape' : 'shape'}
                            onClick={() => setSelectedShape(2)}>квадратный</button>
                    </div>
                    <div className="showcase-item-footer-controls-description">
                        <p>{desciption1}</p>
                        <p>{desciption2}</p>
                        <p>{desciption3}</p>
                    </div>
                </div>
            </div>

        </div >
    )
}
ShowcaseItem.propTypes = {
    title: PropTypes.string,
    optionsText: PropTypes.arrayOf(PropTypes.string),
    optionsImg: PropTypes.arrayOf(PropTypes.string),
    img: PropTypes.string,
    price: PropTypes.string,
    desciption1: PropTypes.string,
    desciption2: PropTypes.string,
    desciption3: PropTypes.string
}
export default ShowcaseItem