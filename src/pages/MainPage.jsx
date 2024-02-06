import React from "react";
import Buttons from "../components/Buttons";
import pythonIcon from "../assets/py.png";
import TypeIt from "typeit-react";

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
      <div className="MainPageAnimation">
        <div className="IdeSimulation">
          <div className="IdeHeader">
            <div className="IdeBookmark">
              <div className="IdeBookmarkConetn">
                <img src={pythonIcon} alt="" /> My_script.py &times;
              </div>
              <div className="IdeBookmarkFooter"></div>
            </div>
          </div>
          <div className="ideBody">
            <div className="Lines">
              <span className="LonesLine">1</span>
              <br></br>
              <span className="LonesLine">2</span>
              <br></br>
              <span className="LonesLine">3</span>
              <br></br>
              <span className="LonesLine">4</span>
              <br></br>
              <span className="LonesLine">5</span>
              <br></br>
              <span className="LonesLine">6</span>
              <br></br>
              <span className="LonesLine">7</span>
              <br></br>
              <span className="LonesLine">8</span>
              <br></br>
              <span className="LonesLine">9</span>
              <br></br>
              <span className="LonesLine">10</span>
              <br></br>
              <span className="LonesLine">11</span>
              <br></br>
              <span className="LonesLine">12</span>
              <br></br>
              <span className="LonesLine">13</span>
              <br></br>
              <span className="LonesLine">14</span>
              <br></br>
              <span className="LonesLine">15</span>
              <br></br>
              <span className="LonesLine">16</span>
              <br></br>
              <span className="LonesLine">17</span>
              <br></br>
              <span className="LonesLine">18</span>
              <br></br>
              <span className="LonesLine">19</span>
              <br></br>
              <span className="LonesLine">20</span>
              <br></br>
              <span className="LonesLine">21</span>
              <br></br>
              <span className="LonesLine">22</span>
              <br></br>
              <span className="LonesLine">23</span>
              <br></br>
              <span className="LonesLine">24</span>
              <br></br>
              <span className="LonesLine">25</span>
              <br></br>
              <span className="LonesLine">26</span>
              <br></br>
              <span className="LonesLine">27</span>
              <br></br>
              <span className="LonesLine">28</span>
              <br></br>
              <span className="LonesLine">29</span>
              <br></br>
              <span className="LonesLine">30</span>
              <br></br>
              <span className="LonesLine">31</span>
              <br></br>
              <span className="LonesLine">32</span>
              <br></br>
              <span className="LonesLine">33</span>
              <br></br>
              <span className="LonesLine">34</span>
              <br></br>
            </div>
            
            <div className="IdeWorkSpace">
              <TypeIt options={{speed:200}}>
              <span className="yellow">
                import <span className="white text"> cv2 </span>
              </span>
              <br></br>
              <span className="yellow">
                import <span className="white"> numpy </span>
              </span>
              <br></br>
              <span className="yellow">
                import <span className="white"> os </span>
              </span>
              <br></br>
              <span className="yellow">
                import <span className="white"> pathlib </span>
                <span className="yellow">
                  import <span className="white"> Path </span>
                </span>
              </span>
              <br></br>
              <span className="yellow">
                import <span className="white"> memory_profiler </span>
                <span className="yellow">
                  import <span className="white"> profile </span>
                </span>
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span className="grey"># @profile()</span>
              <br></br>
              <br></br>
              <span className="yellow">
                def <span className="white"> find_phone</span>
                <span className="white">
                  (img_path: <span className="blue">str</span>):
                </span>
              </span>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;YOLO_CFG =
                <span className="green">"Resources/yolov4.cfg"</span>
              </span>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;YOLO_WEIGHTS =
                <span className="green">"Resources/yolov4.weights"</span>
              </span>
              <br></br>
              <br></br>
              <span className="white">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;cv =
                cv2.dnn.readNetFromDarknet(YOLO_CFG, YOLO_WEIGHTS)
              </span>
              <br></br>
              <span className="white">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;l_names = cv.getLayerNames()
              </span>
              <br></br>
              <span className="white">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;out_l_indexes =
                cv.getUnconnectedOutLayers()
              </span>
              <br></br>
              <span className="white">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;out_l = [l_names[index - 1]{" "}
                <span className="yellow">for</span> index{" "}
                <span className="yellow"> in </span> out_l_indexes]
              </span>
              <br></br>
              <br></br>
              <span className="white">
                {" "}
                &nbsp; &nbsp; &nbsp; &nbsp;<span className="yellow">
                  with
                </span>{" "}
                <span className="blue">open</span> (
                <span className="green"> "Resources/coco.names.txt" </span> ){" "}
                <span className="yellow">as</span> file:
              </span>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;classes =
                file.read().split(
                <span className="green">
                  "<span className="yellow">\n</span>"
                </span>
                )
              </span>
              <br></br>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;search_object = [
                <span className="green">'cell phone'</span>]
              </span>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;img = cv2.imread(img_path)
              </span>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;height, width, _ =
                img.shape(img_path)
              </span>
              <br></br>
              <span className="white">
                &nbsp; &nbsp; &nbsp; &nbsp;lob = cv2.dnn.blobFromImage(img,
                <span className="blue">1</span> /
                <span className="blue">255</span>
                <span className="yellow">,</span> (
                <span className="blue">608</span>
                <span className="yellow">,</span>
                <span className="blue">608</span>)
              </span>
              <br></br>
              <span className="white">
                
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; (
                <span className="blue">
                  0<span className="yellow">,</span>
                </span>
                <span className="blue">
                  0<span className="yellow">,</span>
                </span>
                <span className="blue">0</span>)
                <span className="yellow">,</span>{" "}
                <span className="Red">swapRB</span>=
                <span className="yellow">True</span>,{" "}
                <span className="Red">crop</span>=
                <span className="yellow">False</span>)
              </span>
              </TypeIt>
            </div>
          </div>
          <div className="IdeFooter">find_phone()</div>
        </div>
      </div>
    </div>
    
  );

}
