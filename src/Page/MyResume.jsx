import Header from "../components/Header/Header";
import InfoTabs from "../components/InfoTabs/InfoTabs";
import Introduce from "../components/Introduce/Introduce";

const MyResume = () => {
  return (
    <>
      <Header name={`Gihoon Kim`} job={`Software Engineer`} />
      <Introduce />
      <InfoTabs />
    </>
  );
};

export default MyResume;
