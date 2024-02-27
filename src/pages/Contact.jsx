import React from "react";
import BackBotton from "../components/BackBotton";
import ContactButtons from "../components/ContactButtons";
import ParalaxBackGroud from "../components/ParalaxBackGroud";


export default function Contact() {
  return (
    <>
    <ParalaxBackGroud />
    <div className="ContactMainWraper">
      <BackBotton />
      <div className="ContactHeaderWraper">
        <div className="ContactHeader">Давайте сделаем что-то большое</div>
      </div>
      <div className="ContactArticle">
        <div className="ContactArticleHeader">Контакты</div>
        <div className="ContactArticleText">
        </div>
        <div className="ContactButtonsBlock">
          <ContactButtons header={'GusevAD111@gmail.com'} headerChange={'Copy to clipboard'}/>  
          <ContactButtons redirect={true} header={'HH.ru'} url={'https://hh.ru/resume/79bcaa59ff09ced3e50039ed1f363646474d74'}/>
          <ContactButtons redirect={true} header={'Resume'} url={'https://disk.yandex.ru/i/WDRppnWaSLaDfA'}/>
          <ContactButtons redirect={true} header={'GitHub'} url={'https://github.com/GusevADresume'}/>    
        </div>
      </div>
    </div>
    </>
  );
}
