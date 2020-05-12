import React, { useEffect, useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import history from "../history";
const fixed = false;
const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    switch (history.location.pathname) {
      case "/home":
        setActiveIndex(0);
        return;
      case "/work":
        setActiveIndex(1);
        return;
      case "/case_studies":
        setActiveIndex(2);
        return;
      case "/footer":
        setActiveIndex(3);
        return;
      default:
        return;
    }
  }, []);
  return (
    <Menu
      fixed={fixed ? "top" : null}
      style={{ color: "#000" }}
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <Container>
        <Menu.Item
          as={NavLink}
          to="/home"
          active={activeIndex === 0}
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/work"
          style={{ color: "#000" }}
          active={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        >
          Careers
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/case_studies"
          style={{ color: "#000" }}
          active={activeIndex === 2}
          onClick={() => setActiveIndex(2)}
        >
          Case Studies
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/footer"
          active={activeIndex === 3}
          onClick={() => setActiveIndex(3)}
        >
          Contact us
        </Menu.Item>
        <Menu.Item as={Link} to="/footer" position="right"></Menu.Item>
      </Container>
    </Menu>
  );
};
export default Navbar;
