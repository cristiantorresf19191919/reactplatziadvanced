import React, { Fragment } from "react";
import { ListOfCategories } from "./components/listOfCategories/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards/index";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./components/container/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { Detail } from "./pages/Detail";

export const App = () => {
  // const urlParams = new window.URLSearchParams
  // (window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log({ detailId })
  return (
    <>
      <GlobalStyle />
      <a href="/">
        <Logo />
      </a>
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:id" />
      </Router>
    </>
  );
};
