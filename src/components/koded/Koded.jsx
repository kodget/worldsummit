import FoodIndustryPromo from "./FoodPromo"
import AgriFoodPlatform from "./AgriFoodPlatform"
import DatamatixFooter from "./DatamatixFooter"
import PromoSection from "./PromoSection"
import HeaderComponent from "./HeaderComponent"
import WSCPlatform from "./WSCPlatform"
import AsiaFoodSupporters from "./AsiaFoodSupporters"
import UpcomingEventsSection from "./UpcomingEventSection"
import DynamicEventsGrid from "./DynamicEventsGrid"

export default function Koded() {
    return (
        <>
            <WSCPlatform />
            <AsiaFoodSupporters />
            <UpcomingEventsSection />
            <FoodIndustryPromo />
            <AgriFoodPlatform />
            <DatamatixFooter />
        </>
    )
}