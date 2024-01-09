import emailIcon from "../../utils/images/email.png"
import mobileIcon from  "../../utils/images/mobile.png"
import supportIcon from "../../utils/images/office_phone.png"
import adressIcon from "../../utils/images/location_footer.png"

interface footerdb {
    titleGeo: string,
    titleRus: string,
    titleEng: string, 
    info: string,
    icon: string,
}

export const footerArray: footerdb[] = [
    {
        titleGeo: 'ელ.ფოსტა:',
        titleRus: 'Эл. Адрес:',
        titleEng: 'Email:',
        info: 'info@Carco.Ge',
        icon: `${emailIcon}`
    },

    {
        titleGeo: 'მობილური:',
        titleRus: 'Мобильный:',
        titleEng: 'Mobile:',
        info: '577444987',
        icon: `${mobileIcon}`
    },

    {
        titleGeo: 'ოფისი:',
        titleRus: 'Офис:',
        titleEng: 'Office:',
        info: '557330744',
        icon: `${supportIcon}`
    },

    {
        titleGeo: 'მისამართი:',
        titleRus: 'Адрес:',
        titleEng: 'Adress:',
        info: 'თბილისი, ი.ჭავჭავაძის 66',
        icon: `${adressIcon}`
    },

]