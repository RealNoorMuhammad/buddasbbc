import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../images/1Purple.png";


import { useEthers } from "@usedapp/core";
import { Link } from "react-router-dom";

const Nave = () => {

  const { activateBrowserWallet, account } = useEthers();


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      position="fixed"
      style={{
        backgroundColor: "#591dd8",
        zIndex: "10",
        fontFamily: "Gang of Three !important",
      }}
    >
      <Container
        style={{
          fontFamily: "Gang of Three",
        }}
      >
        <Navbar.Brand
          href="#home"
          s
          style={{
            fontFamily: "Gang of Three",
          }}
        >
          <Nav.Link
            href="/"
            style={{
              fontFamily: "Gang of Three",
            }}
          >
            {" "}
            <a
              href="/"
              class="btn-flip"
              data-back="Mint"
              data-front="Mint"
              style={{
                fontFamily: "Gang of Three",
              }}
            ></a>
          </Nav.Link>
        </Navbar.Brand>
        <Nav.Link href="/claim">
          {" "}
          <a
            href="/claim"
            class="btn-flip"
            data-back="Claim"
            data-front="Claim"
            style={{
              fontFamily: "Gang of Three",
            }}
          ></a>
        </Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#roadmap" style={{ justifyContent: "center" }}>
              {" "}

              {account ? (
                <button className="btn btn_meta">
                  {`${account.slice(0, 6)}...${account.slice(
                    account.length - 6,
                    account.length
                  )}`}
                </button>
              ) : (
                <a
                href="#"
                class="btn-flip"
                data-back="Metamask"
                onClick={activateBrowserWallet}
                data-front="Connect"
                style={{
                  fontFamily: "Gang of Three",
                }}
              ></a>
              )}
             
            </Nav.Link>
          </Nav>
          <br />
          <br />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nave;
