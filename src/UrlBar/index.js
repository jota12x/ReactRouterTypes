import React from "react";
import { Container, Icon, Input } from "semantic-ui-react";
import history from "../history";

const UrlBar = ({ url, routerType }) => {
  history.listen((location) => {
    console.log("Location has changed 2");
  });
  return (
    <Container
      textAlign="left"
      style={{ border: "1px solid #d4d4d5", padding: 10, position: "relative" }}
    >
      <Icon
        name="arrow left"
        color="black"
        style={{ marginRight: 10 }}
        onClick={() => history.goBack()}
      ></Icon>
      <Input
        label="https://www.sun-test/"
        placeholder="type your url"
        value={history.location.pathname}
      />
      <Icon
        name="arrow right"
        color="black"
        style={{ position: "absolute", right: 10, top: "45%" }}
        onClick={() => history.goForward()}
      ></Icon>
    </Container>
  );
};

export default UrlBar;
