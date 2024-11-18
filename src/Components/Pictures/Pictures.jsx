import './Pictures.scss'
import picture1 from '../../assets/Pictures/picture1.png'
import picture2 from '../../assets/Pictures/picture2.png'
import picture3 from '../../assets/Pictures/picture3.png'
function Pictures() {
    return (
        <section className='pictures'>
            <h1><span>EKOTAP</span> В ИНТЕРЬЕРЕ КУХНИ</h1>
            <p>ПРЕДОСТАВЛЯЕМ 3D МОДЕЛИ ДЛЯ ВАШИХ ПРОЕКТОВ</p>
            <div className="pictures-grid">
                <img src={picture1} alt="picture of ekotap" />
                <img src={picture2} alt="picture of ekotap" />
                <img src={picture3} alt="picture of ekotap" />
            </div>

        </section>
    )
}
export default Pictures