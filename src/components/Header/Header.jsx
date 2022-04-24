import React, { useState } from "react";
import "./Header.scss";
// import logo from "../../assets/icons/logo.png";

import { useEthers } from "@usedapp/core";
import { Link } from "react-router-dom";

const Header = () => {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <header className="container header">
      <div className="header__topbar">
        <a href="/" className="header__logo">
          {/* <img src={logo} alt="logo" /> */}
        </a>
      </div>

      <nav className="header__navbar">
        <ul className="header__list">
          <li>
            <Link to="/">Mint</Link>
          </li>
          <li>
            <Link to="/claim">Claim</Link>
          </li>
        </ul>
        {account ? (
          <button className="btn btn_meta">
            {`${account.slice(0, 6)}...${account.slice(
              account.length - 6,
              account.length
            )}`}
          </button>
        ) : (
          <button className="btn" onClick={activateBrowserWallet}>
            Connect Metamask
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
