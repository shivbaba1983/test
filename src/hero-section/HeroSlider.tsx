import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.scss"; // Import custom styles
// import annapurnaYojana from './../assets/annapurna-yojana.jpg';
// import PorkaMaharashtra from './../assets/pocra-maharashtra-yojana.jpg';
// import SaurKrushi from './../assets/saur-krishi-vahini-yojana.jpg';
import SearchData from './../searchdata/SearchData';
import LeftYojanaDetails from './../data/LeftYojanaDetails.json';
import RightYojanaDetails from './../data/RightYojanaDetails.json';

// const heroSlides = [
//   {
//     id: 1,
//     image: annapurnaYojana,
//     title: "महाराष्ट्र मुख्यमंत्री अन्नपूर्णा योजना",
//     description: "अन्नपूर्णा योजना",
//     subtitle: 'अन्नपूर्णा योजना',
//     ctaText: "अधिक माहिती",
//     ctaLink: "https://mukhyamantriannapurnayojana.com/"
//   },
//   {
//     id: 2,
//     image: PorkaMaharashtra,
//     title: "नानाजी देशमुख कृषी संजीवनी प्रकल्प म्हणजेच पोकरा योजना होय.",
//     description: "पोकरा योजना",
//     subtitle: 'abceed',
//     ctaText: "अधिक माहिती",
//     ctaLink: "https://mahapocra.gov.in/"
//   },
//   {
//     id: 3,
//     image: SaurKrushi,
//     title: "मुख्यमंत्री सौर कृषी वाहिनी योजना",
//     description: "सौर कृषी वाहिनी योजना.",
//     subtitle: 'ggggg',
//     ctaText: "अधिक माहिती",
//     ctaLink: "https://pmsuryaghar.gov.in/"
//   }
// ];


const HeroSlider = () => {

  //const [leftSectionData, setLeftSectionData] = useState(LeftYojanaDetails);
  //const [rightSectionData, setRightSectionData] = useState(RightYojanaDetails);


  //const [readMoreClick, setReadMoreClick] = useState(false);
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState();
  // useEffect(() => {
  //   // setHeroSearchTerm(tempSearchTerm);
  //   setTempSearchTerm(tempSearchTerm);
  // }, [readMoreClick])

  function heroAdditionalInfoClick(idSelected,serachTerm) {
    setTempSearchTerm(serachTerm);
    setSelectedId(idSelected)
   // setReadMoreClick(serachTerm);
  }
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
        className="swiper-container"
      >
        {LeftYojanaDetails.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.heroImage})` }}>
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>{slide.marathiTitle}</h1>
                  <p>{slide.purpose}</p>
                  {/* <a href={slide.ctaLink} className="hero-cta" target="_blank" onClick={()=>heroAdditionalInfoClick(slide.title)}>{slide.ctaText}</a> */}
                  <button className="hero-cta" onClick={() => heroAdditionalInfoClick(slide.id,slide.marathiTitle)}>{slide.ctaText}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="search-main-section">
        <SearchData tempSearchTerm={tempSearchTerm} selectedId={selectedId} />
      </div>
    </div>
  );
};

export default HeroSlider;
