import trasportCalcBlockIcon from "../../utils/images/transportation_logo.png"
import trasportCalcBlockIconHover from "../../utils/images/transportation_logo_hover.png"
import searchIcon from "../../utils/images/search_icon.png"
import searchIconHover from "../../utils/images/search_icon_hover.png"
import contactIcon from "../../utils/images/contact_logo.png"
import contactIconHover from "../../utils/images/contact_logo_hover.png"
import teamIcon from "../../utils/images/team_logo.png"
import teamIconHover from "../../utils/images/team_logo_hover.png"


type FeatureItem = string[];

export interface FeaturesArray {
  [key: string]: FeatureItem;
}

export const featuresArray: FeaturesArray[] = [
  {
    geo: [
      "უფასო კონსულტაცია",
      "ავტომობილის შერჩევა",
      "ავტომობილის შემოწმება",
      "ხარჯების კალკულაცია",
      "აუქციონში მონაწილეობა",
      "ყიდვა",
      "საბუთების მომზადება",
      "დაზღვევა",
      "ტრანსპორტირება",
    ],

    eng: [
      "Free Consultation",
      "Vehicle Selection",
      "Vehicle Checking",
      "Cost Calculation",
      "Auction Participation",
      "Purchase",
      "Document Preparation",
      "Insurance",
      "Transportation",
    ],

    rus: [
      "Бесплатная консультация",
      "Ввыбор автомобиля",
      "Проверка автомобиля",
      "Калькуляция затрат",
      "Участие в аукционе покупка",
      "Покупка",
      "Подготовка документов",
      "Страховка",
      "Транспортировка",
    ],
  },
];


//aray for feature blocks

interface featureBlock {
  title: string,
  mainCover: string,
  hoverCover: string,
}

export const featureBlockArray: featureBlock[] = [
  {
    title: "ტრანსპორტირების კალკულატორი",
    mainCover: `${trasportCalcBlockIcon}`,
    hoverCover: `${trasportCalcBlockIconHover}`
  },

  {
    title: "კონტეინერის ძიება",
    mainCover: `${searchIcon}`,
    hoverCover: `${searchIconHover}`
  },

  {
    title: "კონტაქტი",
    mainCover: `${contactIcon}`,
    hoverCover: `${contactIconHover}`
  },

  {
    title: "ჩვენ შესახებ",
    mainCover: `${teamIcon}`,
    hoverCover: `${teamIconHover}`
  },
]