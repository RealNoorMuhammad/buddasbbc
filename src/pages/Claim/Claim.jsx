import { useEthers } from "@usedapp/core";
import React from "react";
import { useClaim, useTokenRewards } from "../../hooks";
import Buddha_left from "../../assets/images/Buddha_left.png";
import Buddha_right from "../../assets/images/Buddha_right.png";
import "./Claim.scss";

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
  return (
    <div className="claim container">
      <h4 className="claim-title title">Claim your $CHAKRA tokens</h4>
      <div className="claim-wrapper">
        <div className="claim-wrapper__image">
          <img src={Buddha_right} alt="buddhat_right" />
        </div>
        {account && (
          <div className="claim-wrapper__reward">
            {account && `You can claim ${reward} Chakra tokens`}
          </div>
        )}
        <div className="claim-btn">
          <button className="btn" onClick={claimHandler}>
            Claim Token
          </button>
        </div>
      </div>
    </div>
  );
};

export default Claim;
