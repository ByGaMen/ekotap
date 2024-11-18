import './FiltrationStage.scss'
import prtopTypes from 'prop-types'
import line from '../../assets/Filtration/line.svg'
import { useState } from 'react'
function FiltrationStage({ img, alt, name, description, number }) {
    const [hover, setHover] = useState(false)

    return (
        <div className='filtration-stage'>
            <div className={hover ? "hover-description" : "hover-description disabled"}>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
            <p>{number} ступень</p>
            <img src={img} alt={alt} />
            <div
                className="filtration-stage-cross"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img src={line} alt="line" />
                <img src={line} alt="line" />
            </div>
        </div>
    )
}
FiltrationStage.propTypes = {
    img: prtopTypes.string,
    alt: prtopTypes.string,
    name: prtopTypes.string,
    description: prtopTypes.string,
    number: prtopTypes.number
}
export default FiltrationStage