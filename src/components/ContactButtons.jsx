import React from "react";
import { useState, useRef } from "react";

export default function ContactButtons({
  header,
  headerChange,
  url,
  redirect,
}) {
  const [headerState, setHeaderState] = useState(false);
  const headerDiv = useRef("");
  const headerChangeDiv = useRef("");
  const copyUrl = () => {
    if (redirect) {
        window.location.href = url
    } else {
      navigator.clipboard.writeText(header);
    }
  };

  const mouseEnter = () => {
    if (headerChange != undefined) {
      setHeaderState(true);
    }
  };
  const mouseLive = () => {
    if (headerChange != undefined) {
      setHeaderState(false);
    }
  };

  const ChangeValue = () => {
    if (url == undefined) {
      headerDiv.current.style.display = "none";
      headerChangeDiv.current.style.display = "block";
    }
  };

  const returnValue = () => {
    if (url == undefined) {
      headerChangeDiv.current.style.display = "none";
      headerDiv.current.style.display = "block";
    }
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLive}
      onClick={copyUrl}
      onMouseDown={ChangeValue}
      onMouseUp={returnValue}
      className="ContactButtonsWraper"
    >
      <div className="ContactButtonsTextWraper">
        <div className="ContactButtonsHeader">
          <div ref={headerDiv}>{headerState ? headerChange : header}</div>
          <div ref={headerChangeDiv} className="ContactButtonsHeaderChange">
            Email copied
          </div>
        </div>
      </div>
    </div>
  );
}
