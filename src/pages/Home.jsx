
import Footer from '../components/Footer/Footer'
import Banner from '../components/banner/Banner'
import BannerSlider from '../components/brand-slider/BannerSlider'
import CaseFeature from '../components/caseFeature/CaseFeature'
import FavouriteTools from '../components/favouriteTool/FavouriteTools'
import Outcome from '../components/outcome/Outcome'

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerSlider />
      <Outcome />
      <CaseFeature />
      <FavouriteTools />
      <Footer />
    </div>
  )
}

export default Home