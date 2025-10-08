import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import InfoTabs from "../components/InfoTabs/InfoTabs";
import Introduce from "../components/Introduce/Introduce";
import ResumeDownload from "../components/ResumeDownload/ResumeDownload";

const MyResume = () => {
  return (
    <>
      <Header name={`Gihoon Kim`} job={`Software Engineer`} />
      <Introduce />
      <InfoTabs />
      <ResumeDownload />
      <Footer />
    </>
  );
};

export default MyResume;
