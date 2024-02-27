import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import BigStar from "../assets/backgroud/BigStar.png";

export default function ParalaxBackGroud() {
  const BigDipper = (
    <div className="BigDipper">
      <MouseParallaxChild factorX={0.1} factorY={0.1}>
        <img className="smallStar BigDipper1" src={BigStar} alt="" />
        <img className="smallStar BigDipper2" src={BigStar} alt="" />
        <img className="smallStar BigDipper3" src={BigStar} alt="" />
        <img className="smallStar BigDipper4" src={BigStar} alt="" />
        <img className="BigStar BigDipper5" src={BigStar} alt="" />
        <img className="MediumStar BigDipper6" src={BigStar} alt="" />
        <img className="MediumStar BigDipper7" src={BigStar} alt="" />
      </MouseParallaxChild>
    </div>
  );

  const UrsaMinor = (
    <div className="UrsaMinor">
      <MouseParallaxChild factorX={0.1} factorY={0.1}>
        <img className="MediumStar UrsaMinor1" src={BigStar} alt="" />
        <img className="smallStar UrsaMinor2" src={BigStar} alt="" />
        <img className="MediumStar UrsaMinor3" src={BigStar} alt="" />
        <img className="smallStar UrsaMinor4" src={BigStar} alt="" />
        <img className="MediumStar UrsaMinor5" src={BigStar} alt="" />
        <img className="MediumStar UrsaMinor6" src={BigStar} alt="" />
        <img className="MediumStar UrsaMinor7" src={BigStar} alt="" />
      </MouseParallaxChild>
    </div>
  );

  return (
    <div className="Paralacx">
      <MouseParallaxContainer
        className={"Paralacx"}
        globalFactorX={1}
        globalFactorY={1}
        useWindowMouseEvents={true}
      >
        <div className="constellations">{UrsaMinor}</div>
        <div className="constellations">{BigDipper}</div>
      </MouseParallaxContainer>
    </div>
  );
}
