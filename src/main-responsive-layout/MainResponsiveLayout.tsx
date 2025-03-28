
import "./MainResponsiveLayout.scss"
import ComplexHeader from '../header/ComplexHeader';
import Attraction from '../attraction/attraction';
import Facility from '../facility/facility';
import CustomMarquee from '../components/CustomMarquee';
import ContactInfo from '../contact-us/ContactInfo';
import LeafletMap from '../leafletmap/LeafletMap';
import SearchData from './../searchdata/SearchData';
import { useEffect, useState } from "react";
import LeftYojanaDetails from './../data/LeftYojanaDetails.json';
import RightYojanaDetails from './../data/RightYojanaDetails.json';
import HeroSlider from './../hero-section/HeroSlider';


import ExpandCollapse from './../expand-collapse/ExpandCollapse';
const MainResponsiveLayout = () => {

  const [leftSectionData, setLeftSectionData] = useState(LeftYojanaDetails);
  const [rightSectionData, setRightSectionData] = useState(RightYojanaDetails);

  return (
    <div className="application-level">
      <ComplexHeader />
      <CustomMarquee />
      <HeroSlider />
      <div className="search-main-section">
        <SearchData setLeftSectionData={setLeftSectionData} setRightSectionData={setRightSectionData} />
      </div>

      <div className="main-container">

        <div className="left-section">
          <ExpandCollapse leftright={"L"} data={leftSectionData} />

        </div>


        {/* <div className="right-section">
          <ExpandCollapse leftright={"R"} data={rightSectionData} />

        </div> */}

      </div>
    </div>
  );
};

export default MainResponsiveLayout;