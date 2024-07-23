import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FirstPage from "./component/FirstPage.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstPage />
    {(function () {
      console.dir(FirstPage);
      console.log("<FirstPage />");
      console.log(
        <FirstPage randomProp="I am random Prop" country="India">
          <h2>I am h2</h2>
          <h3>I am h3</h3>
        </FirstPage>
      );

      // h1
      const h1 = React.createElement(
        "h1",
        {
          className: "heading-kp",
        },
        React.createElement("span", null, "I am another span"),
        React.createElement("span", null, "I am span")
      );

      console.log("h1");
      console.log(h1);
    })()}
  </React.StrictMode>
);
