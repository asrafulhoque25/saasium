import Footer from "../components/Footer/Footer";
import Banner from "../components/banner/Banner";
import BannerSlider from "../components/brand-slider/BannerSlider";
import CaseFeature from "../components/caseFeature/CaseFeature";
import FavouriteTools from "../components/favouriteTool/FavouriteTools";
import Outcome from "../components/outcome/Outcome";
import WorkProcess from "../components/workProcess/WorkProcess";
import Testimonial from "../components/testimonial/Testimonial";
import DownloadApp from "../components/downloadApp/downloadApp";

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerSlider />
            <Outcome />
            <CaseFeature />
            <FavouriteTools />
            <WorkProcess />
            <Testimonial />
            <DownloadApp />
            <Footer />
        </div>
    );
};

export default Home;
