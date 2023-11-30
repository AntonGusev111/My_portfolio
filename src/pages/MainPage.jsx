import React from "react";
import Buttons from "../components/Buttons";

export default function MainPage() {
  return (
    <div className="MainPageWraper">
      <div className="ContentWraper">
        <Buttons
          header={"Hello."}
          fColor={"ColorWhite"}
          headerChange={"About"}
          fSize={"Font102"}
          url={"/About"}
        />
        <Buttons
          header={"I am"}
          fColor={"ColorRed"}
          headerChange={"Work"}
          fSize={"Font102"}
          url={"/Work"}
        />
        <Buttons
          header={"Anton"}
          fColor={"ColorRed"}
          headerChange={"Contact"}
          fSize={"Font102"}
          url={"/Contact"}
        />
      </div>
    </div>
  );
}
