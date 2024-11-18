import './ContactInformation.scss'
import Contact from '../Contact/Contact'
import map from '../../assets/ContactInformation/map.png'
import tel from '../../assets/Contact/tel.svg'
import mail from '../../assets/Contact/mail.svg'
import marker from '../../assets/Contact/marker.svg'
import ok from '../../assets/Contact/ok.svg'
import vk from '../../assets/Contact/vk.svg'
import youtube from '../../assets/Contact/youtube.svg'


function ContactInformation() {
    const contacts = [
        {
            img: tel,
            text: '+7 495 4567890 - отдел продаж',
            alt: 'tel icon'
        },
        {
            img: tel,
            text: '+7(985)041-58-60 - проектным организациям / дизайнерам',
            alt: 'tel icon'
        },
        {
            img: mail,
            text: 'Info@ekotap.ru - по любым вопросам',
            alt: 'mail icon'
        },
        {
            img: marker,
            text: '108811, Москва, Киевское шоссе, Бизнес- парк «Румянцево»,стр. 1А, 1 подъезд, 4 этаж',
            alt: 'marker icon'
        },
    ]
    return (
        <section className='contact-information' id='contact'>
            <div className="contact-information-location">
                <img src={map} alt="map" />
                <div className="contact-information-location-addres">
                    <h4>Адрес</h4>
                    <p>Москва, Киевское шоссе, Бизнес-парк «Румянцево», стр. 1А, 1 подъезд, 4 этаж</p>
                </div>
            </div>
            <div className="contact-information-personal">
                <div className="contact-information-personal-contact">
                    <h2>Контакты</h2>
                    {contacts.map((contact, index) => (
                        <Contact
                            key={index}
                            img={contact.img}
                            text={contact.text}
                            alt={contact.alt}
                        />
                    ))}
                </div>
                <div className="contact-information-personal-footer">
                    <p>© Компания EKOTAP. Все права защищены. 2024</p>
                    <div className="contact-information-personal-footer-images">
                        <img src={vk} alt="vk icon" />
                        <img src={ok} alt="ok icon" />
                        <img src={youtube} alt="youtube icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactInformation