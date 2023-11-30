import React from "react";
import { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Buttons({
  header,
  comment,
  fSize,
  fColor,
  headerChange,
  url,
  work,
}) {
  const [headerState, setHeaderState] = useState(false);
  const navigate = useNavigate();
  const wraperClass = useRef();
  const buttonClick = () => {
    console.log(url)
    navigate(url)
    if(work){
      navigate(`/Work/${url}`)
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
  useEffect(()=>{
    setTimeout(() => {  wraperClass.current.classList.add('maxH') }, 100);
  },[])



  return (
    <div
      className="Buttons_wraper minH"
      ref={wraperClass}
      onClick={buttonClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLive}
    >
      <div  className={"Text_wraper"}> 
        <div className={`Button_Header ${fColor} ${fSize}`}>
          <p color={fColor} className="Button_Header">
            {headerState ? headerChange : header}
          </p>
          <p className="Button_Comment">{comment}</p>
        </div>
      </div>
    </div>
  );
}