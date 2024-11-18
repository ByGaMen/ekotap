import './Contact.scss'
import prtopTypes from 'prop-types'
function Contact({ img, text, alt }) {
    return (
        <div className='contact'>
            <img src={img} alt={alt} />
            <p>{text}</p>
        </div>
    )
}
Contact.propTypes = {
    img: prtopTypes.string,
    text: prtopTypes.string,
    alt: prtopTypes.string
}
export default Contact