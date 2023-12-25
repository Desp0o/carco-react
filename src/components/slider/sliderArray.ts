import slide1 from "../../utils/images/slider1.jpg"
import slide2 from "../../utils/images/slider2.jpg"
import slide3 from "../../utils/images/slider3.jpg"
import slide4 from "../../utils/images/slider4.jpg"

interface SliderItem {
    id: number;
    image: string;
    textGeo: string;
    textRus: string;
    textEng: string;
}

export const sliderArr: SliderItem[] = [
    {
        id: 0,
        image: `${slide1}`,
        textGeo: 'ჩამოიყვანე ავტომობილი ამერიკიდან <br> გადაზიდვის ყველაზე დაბალი ტარიფით',
        textRus: 'перевезти автомобиль <br>по самым низким тарифам на доставку',
        textEng: 'Transport The Vehicle <br> The Lowest Shipping Rates'
    },

    {
        id: 1,
        image: `${slide2}`,
        textGeo: 'ჩვენი გუნდი გაგიწევთ კონსულტაციას <br> ავტომობილის  სავარაუდო შეკეთების ხარჯებთან დაკავშირებით',
        textRus: 'Наша команда сообщит вам <br> ориентировочную стоимость ремонта автомобиля',
        textEng: 'Our Team Will Advise You About <br>The Estimated Costs Of Repairing The Vehicle'
    },

    {
        id: 2,
        image: `${slide3}`,
        textGeo: 'იზრუნე ეკოლოგიაზე და <br>მართე ელექტრო ავტომობილი',
        textRus: 'Заботьтесь об экологии <br> и ездите на электромобиле',
        textEng: 'Take Care Of The <br> Environment And Drive An Electric Car'
    },

    {
        id: 3,
        image: `${slide4}`,
        textGeo: 'ჩვენი პარტნიორი გადამზიდავები',
        textRus: 'Наши партнерские перевозчики',
        textEng: 'Our Partner Carriers'
    }
]