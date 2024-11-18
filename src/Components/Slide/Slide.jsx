import './Slide.scss'
import PropTypes from 'prop-types'
function Slide({ imgURL }) {
    return (
        <section className='slide'>
            <img src={imgURL} alt='slide'/>
        </section>
    )
}
Slide.propTypes = {
    imgURL: PropTypes.string
}
export default Slide