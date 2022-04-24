import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, DAppProvider } from "@usedapp/core";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/images/1Purple.png";
import logo2 from "../src/images/7Red.png";
import logo3 from "../src/images/6Orange.png";
import logo4 from "../src/images/3Navy.png";
import "./Fonts/go3v2.ttf";

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      "https://rinkeby.infura.io/v3/4431cf92881c44f493cd4022cadbc17e",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
            <img src={logo} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">
            <img src={logo2} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">
            <img src={logo3} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">
            <img src={logo2} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">
            <img src={logo4} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">
            <img src={logo3} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">
            <img src={logo} alt="logo" style={{ width: "20px" }} />
          </div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
        </div>
        <App />
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
