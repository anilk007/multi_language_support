import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Menu from "./shared/menu/Menu";
import RouteComponent from "./shared/route/Route";

import { useTranslation } from "react-i18next";

function App({ changeLanguage }) {
  const { t } = useTranslation();

  return (
    <Router>
      <div>
        <Menu />
        <h1>{t("welcomeMessage")}</h1>
        <p>{t("greeting", { name: "John" })}</p>
        <button onClick={() => changeLanguage("en")}>Switch to English</button><br></br>
        <button onClick={() => changeLanguage("fr")}>Switch to French</button><br></br>
        <button onClick={() => changeLanguage("es")}>Switch to Spanish</button>
        <RouteComponent />
      </div>
    </Router>
  );
}

export default App;
