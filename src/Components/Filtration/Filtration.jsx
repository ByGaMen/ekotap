import './Filtration.scss'
import filter from '../../assets/Filtration/ekotapFilter.png'
import filterStage1 from '../../assets/Filtration/filterStage1.png'
import filterStage2 from '../../assets/Filtration/filterStage2.png'
import filterStage3 from '../../assets/Filtration/filterStage3.png'
import filterStage4 from '../../assets/Filtration/filterStage4.png'
import FiltrationStage from '../FiltrationStage/FiltrationStage'
function Filtration() {
    const filterStages = [
        {
            img: filterStage1,
            alt: 'filter stage 1',
            name: 'Седиментный фильтр',
            description: 'Эта первая ступень эффективно улавливает большие частицы, такие как песок, ржавчина и другие механические загрязнения.  Он предохраняет последующие фильтры от быстрого загрязнения.'
        },
        {
            img: filterStage2,
            alt: 'filter stage 2',
            name: 'Сорбционный фильтр',
            description: 'Вторая ступень фильтрации предназначена дляудаления из воды органических примесей, свободного хлора и его производных, улучшения общих органолептических свойств воды (вкуса, запаха, цвета).'
        },
        {
            img: filterStage3,
            alt: 'filter stage 3',
            name: 'Обратноосмотическая мембрана',
            description: 'Третья ступень позволяет отфильтровать воду от солей и посторонних примесей.Она произведена из полиамидной пленки, пропускающей молекулы, размер которых приблизительно равен диаметру молекул воды.'
        },
        {
            img: filterStage4,
            alt: 'filter stage 4',
            name: 'Карбон-блок',
            description: 'Последняя ступень предназначена финальной доочистки воды. Фильтр с активированным углем очищает воду от вредных примесей, в первую очередь от хлора, который добавляется очистными сооружениями городов, а также от неприятного запаха, вкуса и бактерий, попавших в воду.'
        },
    ]
    return (
        <section className="filtration">
            <h1>ПРОФЕССИОНАЛЬНАЯ <span>ФИЛЬТРАЦИЯ</span></h1>
            <p>Система очистки воды Экодар осмос RO400NG обеспечивает высококачественную фильтрацию за счет четырехступенчатого процесса.</p>
            <div className="filtration-images">
                <div className="wrapper"><img src={filter} alt="filter" /></div>
                <div className="filtration-images-stages">
                    {filterStages.map((stage, index) => (
                        <FiltrationStage
                            img={stage.img}
                            alt={stage.alt}
                            name={stage.name}
                            description={stage.description}
                            key={index}
                            number={index + 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Filtration