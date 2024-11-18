import Hero from '../../Components/Hero/Hero'
import Player from '../../Components/Player/Player'
import Slide from '../../Components/Slide/Slide'
import Product from '../../Components/Product/Product'
import Showcase from '../../Components/Showcase/Showcase'
import Pictures from '../../Components/Pictures/Pictures'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Filtration from '../../Components/Filtration/Filtration'
import Employees from '../../Components/Employees/Employees'
import ContactInformation from '../../Components/ContactInformation/ContactInformation'
import './Home.scss'
import slideURL1 from '../../assets/Slide/slide1.png'
import slideURL2 from '../../assets/Slide/slide2.png'
import slideURL3 from '../../assets/Slide/slide3.png'

function Home() {
    return (
        <main className='home' id='home'>
            <Hero/>
            <Player />
            <Slide imgURL={slideURL1} />
            <Product />
            <Slide imgURL={slideURL2} />
            <Showcase />
            <Slide imgURL={slideURL3} />
            <Pictures />
            <ContactUs />
            <Filtration />
            <Employees />
            <ContactInformation />
        </main>
    )
}
export default Home