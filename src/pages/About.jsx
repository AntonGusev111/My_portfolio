import React from "react";
import BackBotton from "../components/BackBotton";
import { Link } from "react-router-dom";
import ParalaxBackGroud from "../components/ParalaxBackGroud";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  const text = [
    "1.	Сильные технические навыки: Обладаю пониманием полнофункциональной разработки, а также имею опыт работы как с FrontEnd, так и с BackEnd. Обладаю навыками:  HTML, CSS, JavaScript, Python и SQL. Я умею работать с различными платформами, библиотеками и базами данных",
    "2.	Опыт работы со стеком современных технологий: имею практический опыт работы с популярными фреймворками, такими как React, а также Django и FastApi. Работал с такими базами данных, как MySQL и PostgreSQL.",
    "3.	Практический опыт: имею портфолио успешных проектов, демонстрирующих мою способность применять различные технологии в рамках поставленных задач. Я работал над разными приложениями, что демонстрирует мою способность справляться со сложными задачами. ",
    "4.	Agile-методология: я разбираюсь в гибких методологиях, работал в быстро меняющихся средах, в которых упор делается на сотрудничество, непрерывную интеграцию и быструю итерацию. Понимаю важность гибкой и итеративной разработки, гарантирующей, что наши проекты будут реализованы эффективно и результативно.",
    "5.	Интерес к обучению:cтремлюсь быть в курсе последних тенденций в разработке программного обеспечения. Активно ищу возможности расширить свои навыки посредством онлайн-курсов и самообучения.",
    "6.	Хорошие коммуникативные навыки: Я умею передавать технические концепции как техническим, так и нетехническим заинтересованным сотрудникам. Обладаю отличными письменными и устными коммуникативными навыками, что позволяет мне сотрудничать с разными командами, объяснять сложные идеи и регулярно предоставлять обновленную информацию о ходе проекта.",
    "7.	Работа в команде: умею работать в команде, преуспеваю в совместной работе. Открыт для обратной связи, готов взаимодействовать с другими и стремлюсь помочь своим коллегам добиться успеха.",
  ];

  return (
    <>
      <ParalaxBackGroud />
        <div className="AboutMainWraper">
          <BackBotton />
          <div className="AboutHeaderWraper">
            <div className="AboutHeader"></div>
          </div>
          <div className="articleWraper">
          <Parallax className="test" speed={150} translateY={[-50, 40]}>
            <div className="article">
              <div className="articleHeader">Обо мне</div>
              <div className="mainParagraph">
                Добрый день. Меня зовут Антон, я начинающий full-stack
                разработчик на языках Python, JavaScript.
              </div>
              {text.map((element, index) => {
                return (
                  <div key={index} className="paragraph">
                    {element}
                  </div>
                );
              })}
              <div className="resumeUrlWraper">
                <Link
                  to="https://disk.yandex.ru/i/3S5RQCqXuzrKhA"
                  className="resumeUrl"
                >
                  MyResume
                </Link>
              </div>
            </div>
            </Parallax>
          </div>
        </div>
      
    </>
  );
}
