import './Showcase.scss'
import showcaseItems from '../../assets/Showcase/showcase.js'
import ShowcaseItem from '../ShowcaseItem/ShowcaseItem'
function Showcase() {

    return (
        <section className='showcase'id='swowcase'>
            <h1>ВЫБЕРИ СВОЙ <span>EKOTAP</span></h1>
            <p>Варианты комплектаций</p>
            <div className="showcase-grid">
                {showcaseItems.map(item => (
                    <ShowcaseItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        optionsText={item.options.text}
                        optionsImg={item.options.img}
                        img={item.img}
                        price={item.price}
                        desciption1={item.desciption1}
                        desciption2={item.desciption2}
                        desciption3={item.desciption3}
                    />
                ))}
            </div>
        </section>

    )
}
export default Showcase
