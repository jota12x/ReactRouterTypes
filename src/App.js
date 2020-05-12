import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
} from "semantic-ui-react";
import BrowserWindow from "./BrowserWindow";
import history from "./history";
function App() {
  const [routerType, setRouterType] = useState(0);
  return (
    <div className="App">
      <Container className="App-header">
        <Grid style={{ width: "100%" }} padded textAlign="center">
          <Grid.Row columns={1} centered>
            <Grid.Column width={12} textAlign="center">
              <Image
                centered
                src={logo}
                className="App-logo"
                alt="logo"
                style={{ maxWidth: 192 }}
              />
              <Header as="h2" style={{ color: "#61dafb" }}>
                Welcome to the React Router tutorial
              </Header>

              <Header as="h4" style={{ margin: 0 }}>
                Which Router do you want to test?
              </Header>

              <Menu tabular attached="top">
                <Menu.Item
                  name="BrowserRouter"
                  active={routerType === 1}
                  onClick={() => {
                    history.push(history.location.pathname);
                    setRouterType(1);
                  }}
                ></Menu.Item>
                <Menu.Item
                  name="HashRouter"
                  active={routerType === 2}
                  onClick={() => {
                    history.push(history.location.pathname);
                    setRouterType(2);
                  }}
                ></Menu.Item>
                <Menu.Item
                  name="MemoryRouter"
                  active={routerType === 3}
                  onClick={() => setRouterType(3)}
                ></Menu.Item>
              </Menu>
              <Segment attached="bottom">
                <BrowserWindow routerType={routerType}></BrowserWindow>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
//
