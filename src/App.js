import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import ListComponent from "./component/ListComponent";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import AuthResultPage from "./pages/AuthResultPage";
import ListPage from "./pages/ListPage";
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";
import QrReader from "./pages/QrReader";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage />
        </Route>
        <Route path="/list" exact>
          <ListPage />
        </Route>
        <Route path="/balance" exact>
          <BalancePage />
        </Route>
        <Route path="/qr" exact>
          <QrCodePage />
        </Route>
        <Route path="/qrreader" exact>
          <QrReader />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
