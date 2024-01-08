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
