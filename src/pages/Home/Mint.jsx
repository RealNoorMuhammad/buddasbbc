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
} from "../../hooks";
import Buddha_left from "../../assets/images/Buddha_left.png";
import Buddha_right from "../../assets/images/Buddha_right.png";
import BuddhaPresale from "../../assets/images/presaleBuddha.png";
import Buddha from "../../assets/images/Buddha.png";
import BuddhaPublic from "../../assets/images/publicBuddha.png";
import "./Mint.scss";
import Modal from "../../components/Popup/Modal";
import Loader from "../../components/Loader/Loader";

const Mint = () => {
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
    <>
      <div className="mint container">
        <h4 className="mint-title title">Mint your Busy Buddha</h4>
        <div className="mint-wrapper">
          <div className="mint-wrapper__image">
            {preSaleStatus ? (
              <img src={BuddhaPresale} alt="buddhat_right" />
            ) : (
              <img src={Buddha} alt="buddhat_right" />
            )}
          </div>
          <div className="mint-wrapper__reward">
            {account &&
              (preSaleStatus
                ? `${preSaleSupply}/${preSalelimit} Busy Buddha Left`
                : `${publicSupply}/${
                    publicLimit - preSalelimit
                  } Busy Buddha Left`)}
          </div>
          <div className="mint-wrapper__counter">
            <div className="counter-plus" onClick={inceraseHandler}>
              +
            </div>
            <div className="counter-value">{inputValue}</div>
            <div className="counter-minus" onClick={decreaseHandler}>
              -
            </div>
          </div>
          <div className="mint-btn">
            <button className="btn" onClick={mintHandler}>
              Mint now
            </button>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Mint;
