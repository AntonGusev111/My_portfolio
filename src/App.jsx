import "./App.css";
import Router from "./router/Router";
import { Helmet } from "react-helmet";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Porfolio</title>
        </Helmet>
      </div>
      <Router />
    </>
  );
}

export default App;
