import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.scss"; // Import custom styles
import annapurnaYojana from './../assets/annapurna-yojana.jpg';
import PorkaMaharashtra from './../assets/pocra-maharashtra-yojana.jpg';
import SaurKrushi from './../assets/saur-krishi-vahini-yojana.jpg';


const heroSlides = [
  {
    id: 1,
    image: annapurnaYojana,
    title: "महाराष्ट्र मुख्यमंत्री अन्नपूर्णा योजना",
    description: "अन्नपूर्णा योजना",
    subtitle: 'अन्नपूर्णा योजना',
    ctaText: "अधिक माहिती",
    ctaLink: "https://mukhyamantriannapurnayojana.com/"
  },
  {
    id: 2,
    image: PorkaMaharashtra,
    title: "नानाजी देशमुख कृषी संजीवनी प्रकल्प म्हणजेच पोकरा योजना होय.",
    description: "पोकरा योजना",
    subtitle: 'abceed',
    ctaText: "अधिक माहिती",
    ctaLink: "https://mahapocra.gov.in/"
  },
  {
    id: 3,
    image: SaurKrushi,
    title: "मुख्यमंत्री सौर कृषी वाहिनी योजना",
    description: "सौर कृषी वाहिनी योजना.",
    subtitle: 'ggggg',
    ctaText: "अधिक माहिती",
    ctaLink: "https://pmsuryaghar.gov.in/"
  }
];

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="swiper-container"
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-overlay">
                <div className="hero-content">
                  <h5>{slide.title}</h5>
                  <p>{slide.description}</p>
                  <a href={slide.ctaLink} className="hero-cta" target="_blank">{slide.ctaText}</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

 export default HeroSlider;
