
import "./MainResponsiveLayout.scss"
import ComplexHeader from '../header/ComplexHeader';
import ExpandCollapseControl from '../components/ExpandCollapseControl';
import Attraction from '../attraction/attraction';
import Facility from '../facility/facility';
import CustomMarquee from '../components/CustomMarquee';
import ContactInfo from '../contact-us/ContactInfo';
import LeafletMap from '../leafletmap/LeafletMap';
import TileGrid from './../yojana/TileGrid';
import SearchData from './../searchdata/SearchData';
import { useEffect, useState } from "react";
 import LeftYojanaDetails from './../data/LeftYojanaDetails.json';
 import RightYojanaDetails from './../data/RightYojanaDetails.json';

const MainResponsiveLayout = () => {

const [leftSectionData, setLeftSectionData ] = useState(LeftYojanaDetails);
const [rightSectionData, setRightSectionData ] = useState(RightYojanaDetails);

  return (
    <div className="application-level">
      <ComplexHeader />
      <CustomMarquee />
      <div className="search-main-section222">
      <SearchData setLeftSectionData={setLeftSectionData} setRightSectionData={setRightSectionData}/>
      </div>
      
      <div className="main-container">

        <div className="left-section">
        <TileGrid leftright={"L"} data={leftSectionData}/>

        {/* <div className='section-1'>
            <ExpandCollapseControl title="लाडकी बहिन योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>

          <div className='section-1'>
            <ExpandCollapseControl title="लाडका शेतकरी योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='section-1'>
            <ExpandCollapseControl title="म्हाडा लॉटरी">
              <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='section-1'>
            <ExpandCollapseControl title="मुख्यमंत्री युवा कार्य शिक्षण योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>

          <div className='section-1'>
            <ExpandCollapseControl title="महाराष्ट्र विकलांग पेन्शन योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='section-1'>
            <ExpandCollapseControl title="माझी कन्या भाग्यश्री योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>
          
          <div className='section-1'>
            <ExpandCollapseControl title="डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='section-1'>
            <ExpandCollapseControl title="महात्मा जोतिराव फुले जनआरोग्य योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='section-1'>
            <ExpandCollapseControl title="नव तेजस्विनी योजना">
              <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='section-1'>
            <ExpandCollapseControl title="मागेल त्याला शेततळे शेततळे अनुदान योजना">
              <Facility />
            </ExpandCollapseControl>
          </div> */}
          
        </div>


        <div className="right-section">
        <TileGrid leftright={"R"} data={rightSectionData}/>
          {/* <div className='facility-section'>
            <ExpandCollapseControl title="आम आदमी विमा योजना महाराष्ट्र">
            <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='attraction-section'>
            <ExpandCollapseControl title="अटल बंदकम कामगार योजना (ग्रामीण)">
            <Facility />
            </ExpandCollapseControl>
          </div>

          <div className='contact-info-section'>
            <ExpandCollapseControl title="श्रावण बाल सेवा राज्य निवृत्ती योजना">
            <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='location-info-section'>
            <ExpandCollapseControl title="महाराष्ट्र विधवा पेन्शन योजना">
            <Facility />
            </ExpandCollapseControl>
          </div>

          <div className='location-info-section'>
            <ExpandCollapseControl title="बाल संगोपन योजना">
            <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='location-info-section'>
            <ExpandCollapseControl title="महाराष्ट्र वृद्धापकाळ पेन्शन योजना">
            <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='location-info-section'>
            <ExpandCollapseControl title="बाबासाहेब आंबेडकर स्वाधार योजना">
            <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='location-info-section'>
            <ExpandCollapseControl title="मुख्यमंत्री रोजगार निर्मिती कार्यक्रम (सीएमईजीपी)">
            <Facility />
            </ExpandCollapseControl>
          </div>
          <div className='location-info-section'>
            <ExpandCollapseControl title="महात्मा जोतिराव फुले शेतकरी कर्जमुक्ती योजना">
            <Facility />
            </ExpandCollapseControl>
          </div> */}
          
          
          {/* <div className='location-info-section'>
            <ExpandCollapseControl title="संपर्क साधा" category="M">
            <ContactInfo />

            <LeafletMap/>
            </ExpandCollapseControl>
          </div> */}
        </div>

      </div>

      <div className='location-info-section'>
            <ExpandCollapseControl title="संपर्क साधा" id="" category="Unknown">
            <ContactInfo />

            <LeafletMap/>
            </ExpandCollapseControl>
          </div>
    </div>
  );
};

export default MainResponsiveLayout;