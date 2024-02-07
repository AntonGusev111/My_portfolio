import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useState } from "react";
import BackBotton from "../components/BackBotton";
import data from "../assets/json/full.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes } from "styled-components";
import {wobble} from "react-animations";
import gh from "../assets/gth12.jpeg"



export default function WorkPage() {
  const [load1, setLoader] = useState(false);
  const param = useParams();
  const info = data[param.id];

  const carouselSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "mySlider",
    arrows: false,
  };

  const load = (e) => {
    if (e) {
      setLoader(true);
    }
  };


  const bounceAnimation = keyframes`${wobble}`;

  const BouncyDiv = styled.div`
    animation:  ${bounceAnimation};
    animation-duration: 4s;
    animation-iteration-count: 5;
  `;

  return (
    <div className="WorkPageMainWraper">
      <BackBotton />
      <div className="ProjectPajeHeaderWraper">
        <div className="WorkPageHeader Font102 ColorWhite">{info.name}</div>
        <div className="BouncyWrapper">
          <BouncyDiv className="Bouncy">
            <div className="AnimatedProjectBotton">
            <a href={info.url} target="_blank">Посмотреть проект</a>
            </div>
          </BouncyDiv>
        </div>
        <div className="githubIcon">
           <a href={info.repo} target="_blank"><img className="githubIcon" src={gh}></img></a> 
          </div>
      </div>

      <div className="WorkPageDescription Font27 ColorWhite">
        {Object.keys(info.desc)}:{Object.values(info.desc)}
      </div>
      <div className="AnimatedPullWraper">
        <div className="AnimatedPull">PULL</div>
      </div>

      <div className="contentWraper">
        <div className="MysliderWraper">
          {load1 ? "" : <Loader />}
          <Slider {...carouselSettings}>
            {Object.keys(info.content).map((element, index) => {
              return (
                <>
                  <img
                    className="sliderImg"
                    onLoad={(e) => load(e)}
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
