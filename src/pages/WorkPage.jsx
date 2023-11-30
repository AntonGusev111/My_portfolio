import React from "react";
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";
import BackBotton from "../components/BackBotton";
import data from "../assets/json/full.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WorkPage() {
  const imgRef = useRef();
  const param = useParams();
  const info = data[param.id];
  const imgs = Object.keys(info.content).map((element) => {
    return { original: element };
  });

  const carouselSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className:"mySlider",
    arrows:false,
  };

  return (
    <div className="WorkPageMainWraper">
      <BackBotton />
      <div className="WorkPageHeader Font102 ColorWhite">{info.name}</div>
      <div className="WorkPageDescription Font27 ColorWhite">
        {Object.keys(info.desc)}:{Object.values(info.desc)}
      </div>
      <div className="contentWraper">
        <div className="MysliderWraper">
          <Slider
            onSwipeStart={() => {
              console.log("awd");
            }}
            {...carouselSettings}
          >
            {Object.keys(info.content).map((element, index) => {
              console.log()
              return (
                <>
                  <img
                    className="sliderImg"
                    key={index}
                    src={element}
                    alt="slide-1"
                  />
                  <p className="legend">{info.content[element]}</p>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
