import React from "react";
import BackBotton from "../components/BackBotton";
import Buttons from "../components/Buttons";
import data from "../assets/json/small.json";
import ParalaxBackGroud from "../components/ParalaxBackGroud";
import { Parallax } from "react-scroll-parallax";

export default function Work() {
  return (
    <>
      <ParalaxBackGroud />
      <div className="WorkMainWraper">
        <BackBotton />
        <Parallax className="test" speed={150} translateY={[-30, 30]}>
          <div className="WorkContent">
            {Object.keys(data).map((element, index) => {
              console.log(data[element]);
              return (
                <div key={element} className="WorkItem">
                  <Buttons
                    header={data[element].name}
                    comment={data[element].short}
                    url={data[element].id}
                    fSize={"Font85"}
                    fColor={"ColorWhite"}
                    work={true}
                  />
                </div>
              );
            })}
          </div>
        </Parallax>
      </div>
    </>
  );
}
