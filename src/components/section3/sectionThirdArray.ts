import truckIcon from "../../utils/images/truck_main.png"
import serviceIcon from "../../utils/images/service.png"
import documentationIcon from "../../utils/images/documentation.png"
import locationIcon from "../../utils/images/location_main.png"
import teamIcon from "../../utils/images/team_logo.png"
import priceIcon from "../../utils/images/price_main.png"


interface thirdArray {
    title: string,
    icon: string,
}

export const thirdSectionArray: thirdArray[] = [
    {
        title: "გადაზიდვის სისწრაფე",
        icon: `${truckIcon}`
    },

    {
        title: "მომსახურების მაღალი ხარისხი",
        icon: `${serviceIcon}`
    },

    {
        title: "დოკუმენტაციის დამზადება",
        icon: `${documentationIcon}`
    },

    {
        title: "წვდომა ლოკაციებზე",
        icon: `${locationIcon}`
    },

    {
        title: "კვალიფიციური თანამშრომლები",
        icon: `${teamIcon}`
    },

    {
        title: "საუკეთესო ფასი",
        icon: `${priceIcon}`
    },
]