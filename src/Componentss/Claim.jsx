import React from "react";

import moto from "../images/2.png";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import "./button.scss";
import { useEthers } from "@usedapp/core";
import { useClaim, useTokenRewards } from "../hooks";

const Claim = () => {
  const { activateBrowserWallet, account } = useEthers();
  const { state: claimState, send: claimReward } = useClaim();
  const reward = useTokenRewards();

  const claimHandler = () => {
    if (!account) activateBrowserWallet();
    claimReward();
  };

  console.log("claimState", claimState);
  console.log("Reward", reward);

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <Grid style={{ backgroundColor: " #591dd8", height: "1000px" }}>
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
        Claim your $CHAKRA tokens
      </Typography>

      <br />
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div class="container">
            <div class="row" style={{ justifyContent: "center" }}>
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
                      borderColor: "#f4be52",
                      border: "5px solid #f4be52",
                    }}
                  >
                    <div class="frame"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {account && (
            <div className="claim-wrapper__reward">
              {account && `You can claim ${reward} Chakra tokens`}
            </div>
          )}

          <Typography
            style={{
              fontFamily: "Gang of Three",
              color: "#fff",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <a
              href="/claim"
              class="btn-flip"
              data-back="Token"
              data-front="Claim"
              onClick={claimHandler}
              style={{
                fontFamily: "Gang of Three",
              }}
            ></a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Claim;
