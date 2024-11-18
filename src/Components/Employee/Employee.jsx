import './Employee.scss'
import propTypes from 'prop-types'
function Employee({ image, name, role, description, email }) {
    return (
        <div className='employee'>
            <img src={image} alt={'profile picture of ' + name} />
            <h2>{name}</h2>
            <h2>{role}</h2>
            <p>{description}</p>
            <span>{email}</span>
        </div>
    )
}
Employee.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    role: propTypes.string,
    description: propTypes.string,
    email: propTypes.string
}
export default Employee