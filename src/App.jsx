import "./App.css";
import Router from "./router/Router";
import { Helmet } from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider scrollAxis='vertical'>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Porfolio</title>
          </Helmet>
        </div>
        <Router />
      </ParallaxProvider>
    </>
  );
}

export default App;
