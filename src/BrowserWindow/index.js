import React, { useState } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  List,
  Transition,
} from "semantic-ui-react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  MemoryRouter,
} from "react-router-dom";
import Company from "../Browser/Company";
import Footer from "../Browser/Footer";
import CaseStudies from "../Browser/CaseStudies";
import HomepageLayout from "../Browser";
import UrlBar from "../UrlBar";
import Navbar from "../Browser/Navbar";
const BrowserRouterProperties = () => (
  <>
    <List.Item>
      <Icon name="check" />
      Uses HTML5 History API and depend of the Location object
    </List.Item>
    <List.Item>
      <Icon name="check" />
      Easy to use and setup, therefore, the most popular
    </List.Item>
    <List.Item>
      <Icon name="close" />
      Require server configuration for redirection to index.html
    </List.Item>
    <List.Item>
      <Icon name="close" />
      Impossible to configure with another history object
    </List.Item>
  </>
);
const HashRouterProperties = () => (
  <>
    <List.Item>
      <Icon name="check" />
      Support legacy browsers as uses the window.location.hash attribute
    </List.Item>
    <List.Item>
      <Icon name="check" />
      Doesn't require any server configuration (Pretty easy to deploy on GH
      Pages)
    </List.Item>
    <List.Item>
      <Icon name="close" />
      Change the normal URL , which stetically feels weird
    </List.Item>
    <List.Item>
      <Icon name="close" />
      Doesn't support pushState and other HTML5 history location properties
    </List.Item>
  </>
);
const MemoryRouterProperties = () => (
  <>
    <List.Item>
      <Icon name="check" />
      It doesn't depend of any context, so you can use it on an Web Application
      or even in React Native!
    </List.Item>
    <List.Item>
      <Icon name="check" />
      Commonly used in testing , in particular for implementing storybooks
    </List.Item>
    <List.Item>
      <Icon name="close" />
      Non-persistent storage, which means we have to save the data otherwise
      reloading will delete all the routes we've visited
    </List.Item>
  </>
);
const BrowserWindow = ({ routerType, url }) => {
  const [revealState, setReveal] = useState(false);
  const [revealWhy, setRevealWhy] = useState(false);
  const getBrowserName = () => {
    switch (routerType) {
      case 1:
        return "BrowserRouter";
      case 2:
        return "HashRouter";
      case 3:
        return "MemoryRouter";
      default:
        return "";
    }
  };

  return (
    <Container>
      <UrlBar routerType={routerType} url={url} />
      <Header>{getBrowserName()}</Header>
      <List style={{ color: "black", marginTop: 0 }}>
        {routerType === 1 && <BrowserRouterProperties />}
        {routerType === 2 && <HashRouterProperties />}
        {routerType === 3 && <MemoryRouterProperties />}
      </List>
      {routerType === 1 && (
        <>
          <Button onClick={() => setReveal(true)} primary>
            Is this application working appropiately?
          </Button>
          {revealState && (
            <Transition>
              <>
                <Header>
                  No! Because the URL is not synchronized with our Search Bar!
                </Header>

                <Button onClick={() => setRevealWhy(true)} color="red">
                  Why?
                </Button>
              </>
            </Transition>
          )}
          {revealWhy && (
            <Header style={{ opacity: "" }}>
              Because we are using memory routing (Link) instead of state-based
              routing!
            </Header>
          )}
        </>
      )}
      {routerType === 1 && (
        <BrowserRouter>
          <Navbar />
          <Route path="/home" component={HomepageLayout}></Route>
          <Route path="/work" component={Company}></Route>
          <Route path="/case_studies" component={CaseStudies}></Route>
          <Route path="/footer" component={Footer}></Route>
        </BrowserRouter>
      )}
      {routerType === 2 && (
        <HashRouter>
          <Navbar />
          <Route path="/home" component={HomepageLayout}></Route>
          <Route path="/work" component={Company}></Route>
          <Route path="/case_studies" component={CaseStudies}></Route>
          <Route path="/footer" component={Footer}></Route>
        </HashRouter>
      )}
      {routerType === 3 && (
        <MemoryRouter>
          <Navbar />
          <Route path="/home" component={HomepageLayout}></Route>
          <Route path="/work" component={Company}></Route>
          <Route path="/case_studies" component={CaseStudies}></Route>
          <Route path="/footer" component={Footer}></Route>
        </MemoryRouter>
      )}
    </Container>
  );
};

export default BrowserWindow;
