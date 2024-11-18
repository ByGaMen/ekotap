import mug from '../../assets/Showcase/mug.svg'
import hot from '../../assets/Showcase/hot.svg'
import glass from '../../assets/Showcase/glass.svg'
import embient from '../../assets/Showcase/embient.svg'
import cold from '../../assets/Showcase/cold.svg'
import bubbles from '../../assets/Showcase/bubbles.svg'
import image1_2 from '../../assets/Showcase/item1-2.png'
import image3_4 from '../../assets/Showcase/item3-4.png'

const showcaseItems = [
    {
        id: 1,
        title: 'EKOTAP PRO+S 5в1',
        options: {
            text: ['кипяток', 'охлаждение', 'газированная', 'горячая', 'холодная'],
            img: [mug, glass, bubbles, hot, cold],
        },
        img: image1_2,
        price: '252 000',
        desciption1: 'Габариты квадратный (ШхГхВ): 21.7 x 5.2 x 32.6 см',
        desciption2: 'Нижний блок (ШхГхВ): 23х39х39 см',
        desciption3: 'Монтажное отверстие под кран - 3,5 см',
    },
    {
        id: 2,
        title: 'EKOTAP PRO+A 5в1',
        options: {
            text: ['кипяток', 'охлаждение', 'эмбиент', 'горячая', 'холодная'],
            img: [mug, glass, embient, hot, cold],
        },
        img: image1_2,
        price: '202 000',
        desciption1: 'Габариты круглый (ШхГхВ): 22,4 x 5.2 x 38.6 см',
        desciption2: 'Нижний блок (ШхГхВ): 23х39х39 см',
        desciption3: 'Монтажное отверстие под кран - 3,5 см',
    },
    {
        id: 3,
        title: 'EKOTAP TS 3в1 HCS',
        options: {
            text: ['кипяток', 'охлаждение', 'газированная'],
            img: [mug, glass, bubbles],
        },
        img: image3_4,
        price: '230 000',
        desciption1: 'Габариты квадратный (ШхГхВ): 21.7 x 5.2 x 32.6 см',
        desciption2: 'Нижний блок (ШхГхВ): 23х39х39 см',
        desciption3: 'Монтажное отверстие под кран - 3,5 см',
    },
    {
        id: 4,
        title: 'EKOTAP TS 3в1 HCA',
        options: {
            text: ['кипяток', 'охлаждение', 'эмбиент'],
            img: [mug, glass, embient],
        },
        img: image3_4,
        price: '183 000',
        desciption1: 'Габариты квадратный (ШхГхВ): 22,4 x 5.2 x 38.6 см',
        desciption2: 'Нижний блок (ШхГхВ): 23х39х39 см',
        desciption3: 'Монтажное отверстие под кран - 3,5 см',

    }
]

export default showcaseItems