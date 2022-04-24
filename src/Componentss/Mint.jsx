import { useEtherBalance, useEthers } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import {
  useClaim,
  usePreSale,
  usePreSaleMax,
  usePreSaleMint,
  usePreSaleSupply,
  usePublicLimit,
  usePublicMintMax,
  usePublicSale,
  usePublicSaleMint,
  usePublicSupply,
  useTokenPrice,
  useTokenRewards,
  useTotalLimit,
  useTotalSupply,
} from "../hooks";

import moto from "../images/1.png";
import motoss from "../images/3.png";
import motos from "../images/1Purple.png";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./button.scss";

import Modal from "../components/Popup/Modal";
import Loader from "../components/Loader/Loader";

const Mint = () => {
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked


  const { activateBrowserWallet, account, error } = useEthers();

  const [inputValue, setInputValue] = useState(1);
  const [isAmountPopup, setAmountPopup] = useState(false);
  const [isWhitlistPopup, setWhitlistPopup] = useState(false);
  const [isBalancePopup, setIsBalancePopup] = useState(false);

  const [preSaleStatus, setPresale] = useState(false);
  const [publicSaleStatus, setPublicSaleStatus] = useState(true);

  const { state: preSaleMintState, send: preSaleBuy } = usePreSaleMint();
  const { state: publicSaleMintState, send: publicSaleBuy } =
    usePublicSaleMint();

  const preSalelimit = useTotalLimit();
  const publicLimit = usePublicLimit();

  const preSaleSupply = usePreSaleSupply();
  const publicSupply = usePublicSupply();

  // const preSaleStatus = usePreSale();
  // const publicSaleStatus = usePublicSale();

  const preSaleMax = usePreSaleMax();
  const publicMax = usePublicMintMax();

  const userBalance = useEtherBalance(account);
  const tokenPrice = useTokenPrice();

  const inceraseHandler = (e) => {
    if (preSaleStatus) {
      if (inputValue !== preSaleMax) {
        setInputValue((prev) => prev + 1);
      } else {
        setAmountPopup(true);
      }
    }
    if (publicSaleStatus) {
      if (inputValue !== publicMax) {
        setInputValue((prev) => prev + 1);
      }
    }
  };

  const decreaseHandler = (e) => {
    if (inputValue > 1) {
      setInputValue((prev) => prev - 1);
    }
  };

  const mintHandler = async (e) => {
    const priceValue = tokenPrice * inputValue;
    if (!account) activateBrowserWallet();
    if (priceValue > userBalance) {
      setIsBalancePopup(true);
    }
    if (preSaleStatus) {
      preSaleBuy(inputValue, { value: priceValue.toString() });
    }
    if (publicSaleStatus) {
      publicSaleBuy(inputValue, { value: priceValue.toString() });
    }
  };

  useEffect(() => {
    if (
      preSaleMintState.errorMessage ===
      "execution reverted: BBC: address not whitelisted!"
    ) {
      setWhitlistPopup(true);
    }
  }, [preSaleMintState]);

  if (preSaleStatus === undefined) {
    return <Loader />;
  }
  return (
    <Grid style={{ backgroundColor: " #591dd8", height: "1100px" }}>
      <br />

      <Typography
        variant="h3"
        style={{
          fontFamily: "Gang of Three",
          color: "#fff",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Mint your Busy Buddha
      </Typography>
      <br />
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div class="container">
            <div class="row" style={{ justifyContent: "center" }}>
              {preSaleStatus ? (
                <div class="col-md-4" style={{ justifyContent: "center" }}>
                  <div class="dcard">
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>

                    <div
                      class="card"
                      style={{
                        backgroundImage: "url(" + motoss + ")",
                        paddingTop: "130%",
                        borderRadius: "50%",
                        backgroundSize: "cover",

                        border: "5px solid #f4be52",
                        borderColor: "#f4be52",
                      }}
                    >
                      <div class="frame"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div class="col-md-4" style={{ justifyContent: "center" }}>
                  <div class="dcard">
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>
                    <div class="trigger"></div>

                    <div
                      class="card"
                      style={{
                        backgroundImage: "url(" + moto + ")",
                        paddingTop: "130%",
                        borderRadius: "50%",
                        backgroundSize: "cover",

                        border: "5px solid #f4be52",
                        borderColor: "#f4be52",
                      }}
                    >
                      <div class="frame"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mint-wrapper__reward">
            {account &&
              (preSaleStatus
                ? `${preSaleSupply}/${preSalelimit} Busy Buddha Left`
                : `${publicSupply}/${
                    publicLimit - preSalelimit
                  } Busy Buddha Left`)}
          </div>

          <Typography
            style={{
              fontFamily: "Gang of Three",
              color: "#fff",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="container">
              <div
                className="row"
                style={{
                  fontFamily: "Gang of Three",
                  color: "#fff",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="col-md-2">
                  {" "}
                  <button style={{}} onClick={inceraseHandler}>
                    <a class="btn-flip" data-front="+" data-back="+"></a>
                  </button>
                </div>
                <div className="col-md-2">
                  {" "}
                  <div
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      position: "relative",
                      fontFamily: "Gang of Three",
                    }}
                  >
                    {inputValue}
                  </div>
                </div>
                <div className="col-md-2">
                  {" "}
                  <button style={{}} onClick={decreaseHandler}>
                    <a class="btn-flip" data-front="-" data-back="-"></a>
                  </button>
                </div>
              </div>{" "}
            </div>
          </Typography>

          <br />

          <Typography
            style={{
              fontFamily: "Gang of Three",
              color: "#fff",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {" "}
            <a
              href=""
              class="btn-flip"
              data-front="Mint"
              data-back="Now"
              onClick={mintHandler}
              style={{
                fontFamily: "Gang of Three",
              }}
            ></a>
            <br />
            <br />
          </Typography>
        </Grid>
      </Grid>
      {isAmountPopup && (
        <Modal
          text={`${
            preSaleStatus
              ? "You may only mint max 2 NFTs."
              : "You may only mint max 4 NFTs."
          }`}
          onClose={() => setAmountPopup(false)}
        />
      )}
      {isWhitlistPopup && (
        <Modal
          text="You are not in whitelist"
          onClose={() => setWhitlistPopup(false)}
        />
      )}
      {isBalancePopup && (
        <Modal
          text="You have no enough ethers"
          onClose={() => setIsBalancePopup(false)}
        />
      )}
    </Grid>
  );
};

export default Mint;
