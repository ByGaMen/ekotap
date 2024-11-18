import './Hero.scss'
import arrowDown from '../../assets/Hero/Vector.svg'
function Hero() {
    return (
        <section className='hero'>
            <div className="text">
                <h2>КИПЯТОК ОХЛАЖДЕННАЯ И ГАЗИРОВАННАЯ <br />ВОДА ИЗ ОДНОГО КРАНА</h2>
                <p>Ekotap - кухонная питьевая система с фильтром обратного осмоса <br />подающий кипяток охлажденную и газированную воду.</p>
                <img src={arrowDown} alt="arrow down" />
            </div>

        </section>
    )
}
export default Hero