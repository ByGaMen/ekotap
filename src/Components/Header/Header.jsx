import './Header.scss'
import sandwich from '../../assets/Header/sandwich.svg'
import logoEkotap from '../../assets/Header/logoEkotap.svg'
import lineVertical from '../../assets/Header/lineVertical.svg'
import phoneIcon from '../../assets/Header/phoneIcon.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <header className='header'>
            <div
                className="menu"
                onClick={() => setMenu(!menu)}
            >
                <img src={sandwich} alt='sandwich' />
                <p>Меню</p>
                {menu && <div className="menu-open">
                    <a href='#product'>О нас</a>
                    <a href='#swowcase'>Товары</a>
                    <a href='#contact-us'>Свяжитесь с нами</a>
                    <a href='#contact'>Контакты</a>
                </div>}
            </div>
            <div className="logo">
                <Link to='/'>
                    <img
                        src={logoEkotap}
                        alt="Ekotap"
                        className='logo-img'
                    />
                </Link>

                <img
                    src={lineVertical}
                    alt="break"
                    className='logo-break'
                />
                <p>кухонные питьевые<br /> системы</p>
            </div>
            <button className='header-button'>Заказать звонок</button>
            <button className='header-button-phone'><img src={phoneIcon} alt="phone icon" /></button>

        </header>
    )
}
export default Header