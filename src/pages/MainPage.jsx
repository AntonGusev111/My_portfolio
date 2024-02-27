import React from "react";
import Buttons from "../components/Buttons";
import ParalaxBackGroud from "../components/ParalaxBackGroud";

export default function MainPage() {
  return (<>
    <ParalaxBackGroud />
    <div className="MainPageWraper">
      <div className="ContentWraper">
        <Buttons
          header={"Hello."}
          fColor={"ColorWhite"}
          headerChange={"About"}
          fSize={"Font102"}
          url={"/My_portfolio/About"}
        />
        <Buttons
          header={"I am"}
          fColor={"ColorRed"}
          headerChange={"Work"}
          fSize={"Font102"}
          url={"/My_portfolio/Work"}
        />
        <Buttons
          header={"Anton"}
          fColor={"ColorRed"}
          headerChange={"Contact"}
          fSize={"Font102"}
          url={"/My_portfolio/Contact"}
        />
      </div>
      
    </div>
    </>
  );

}
