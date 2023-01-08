import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Authorization } from "./components/Authorization/Authorization";
import styled from "styled-components";
import ContainerApp from "./components/ContainerApp/ContainerApp";

const WrapperApp = styled.div``;

const AppComponent = (props) => {
  // Изменение темы
  let body = document.querySelector("body");
  body.setAttribute("data-theme", props.theme);

  // Редирект с помощью хука useNavigate (react-router)
  let navigate = useNavigate();
  // useEffect(() => {
  //   if (props.authorizedUser.length === 0) {
  //     navigate("/authorization");
  //   } else {
  //     navigate("/");
  //   }
  // }, [props.authorizedUser]);
  return (
    <WrapperApp>
      <Routes>
        <Route path="/" element={<ContainerApp />} />
        <Route path="/dialogs/:id" element={<ContainerApp />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </WrapperApp>
  );
};
const mapStateToProps = (state) => {
  return {
    theme: state.supportReducer.theme,
  };
};
const App = connect(mapStateToProps, {})(AppComponent);

export default App;
