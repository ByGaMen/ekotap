import './ContactUs.scss'
import profile from '../../assets/ContactUs/profile.svg'
import call from '../../assets/ContactUs/call.svg'
import mail from '../../assets/ContactUs/mail.svg'
import { useState } from 'react'
function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        topic: '',
        checkbox: false
    })
    const handleChange = (e) => {
        const { name, value, type } = e.target
        setFormData(prev => {
            return type === 'checkbox' ? { ...prev, [name]: !prev[name] } : { ...prev, [name]: value }

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <section className='contact-us' id='contact-us'>
            <form className="form" onSubmit={handleSubmit}>
                <h2 onClick={() => console.log(formData)}>свяжитесь с нами</h2>
                <div className="form-grid">
                    <label>
                        <input
                            autoComplete='off'
                            type="text"
                            placeholder='ФИО'
                            name='name'
                            onChange={handleChange}
                            value={formData.name}
                            required


                        />
                        <img src={profile} alt="profile icon" />
                    </label>
                    <label>
                        <input
                            autoComplete='off'
                            type="tel"
                            pattern="[7-9]{1}[0-9]{10}"
                            title="Phone number with 7-9 and remaing 9 digit with 0-9"
                            placeholder='Телефон'
                            name='phone'
                            onChange={handleChange}
                            value={formData.phone}
                            required

                        />
                        <img src={call} alt="call icon" />
                    </label>
                    <label>
                        <input
                            autoComplete='off'
                            type="email"
                            placeholder='E-mail'
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            required

                        />
                        <img src={mail} alt="mail icon" />
                    </label>
                    <label htmlFor='topic'>
                        <select
                            id='topic'
                            name='topic'
                            onChange={handleChange}
                            value={formData.topic}
                            required

                        >
                            <option value="" disabled>Тема обращения</option>
                            <option value="1">Тема обращения 1</option>
                            <option value="2">Тема обращения 2</option>
                            <option value="3">Тема обращения 3</option>
                            <option value="4">Тема обращения 4</option>
                        </select>
                    </label>
                    <label className='checkbox-label'>
                        <input
                            type="checkbox"
                            className='checkbox'
                            name='checkbox'
                            checked={formData.checkbox}
                            onChange={handleChange}
                            required

                        />
                        <p>Нажимая кнопку «Отправить», вы подтверждаете свое согласие на обработку персональных данных <a href="/&">согласие на обработку персональных данных</a></p>
                    </label>
                    <button
                        type='submit'

                    >
                        Отправить
                    </button>
                </div>
            </form>
        </section>
    )
}
export default ContactUs