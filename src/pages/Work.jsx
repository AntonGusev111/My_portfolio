import React from "react";
import BackBotton from "../components/BackBotton";
import Buttons from "../components/Buttons";
import data from "../assets/json/small.json";

export default function Work() {
  return (
    <div className="WorkMainWraper">
      <BackBotton />
      <div className="WorkContent">
        {Object.keys(data).map((element, index) => {
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
    </div>
  );
}
