import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts/";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { nftABI, nftAddress } from "../contract/nftContract";
import { tokenABI, tokenAddress } from "../contract/chackraContract";

const nftContractInterface = new ethers.utils.Interface(nftABI);
const nftContract = new Contract(nftAddress, nftContractInterface);

const tokenContractInterface = new ethers.utils.Interface(tokenABI);
const tokenContract = new Contract(tokenAddress, tokenContractInterface);

export function usePreSaleSupply() {
  const [preSaleSupply] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "genesisMinted",
      args: [],
    }) ?? [];
  return preSaleSupply ? parseInt(preSaleSupply._hex, 16) : 0;
}

export function usePublicSupply() {
  const [publicSupply] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "regularMinted",
      args: [],
    }) ?? [];
  return publicSupply ? parseInt(publicSupply._hex, 16) : 0;
}

export function useTotalLimit() {
  const [totalLimit] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "maxGenesisSupply",
      args: [],
    }) ?? [];
  return totalLimit ? parseInt(totalLimit._hex, 16) : 0;
}

export function usePublicLimit() {
  const [totalLimit] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "maxSupply",
      args: [],
    }) ?? [];
  return totalLimit ? parseInt(totalLimit._hex, 16) : 0;
}

export function useTokenPrice() {
  const [tokenPrice] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "price",
      args: [],
    }) ?? [];
  return tokenPrice ? parseInt(tokenPrice._hex, 16) : 0;
}

export function usePreSaleMax() {
  const [preSaleMax] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "presaleMaxMint",
      args: [],
    }) ?? [];
  return preSaleMax ? parseInt(preSaleMax._hex, 16) : 0;
}

export function usePublicMintMax() {
  const [publicMintMax] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "publicMaxMint",
      args: [],
    }) ?? [];
  return publicMintMax ? parseInt(publicMintMax._hex, 16) : 0;
}

export function usePreSale() {
  const [isPreSale] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "presaleMintActive",
      args: [],
    }) ?? [];
  return isPreSale;
}
export function usePublicSale() {
  const [publicSale] =
    useContractCall({
      abi: nftContractInterface,
      address: nftAddress,
      method: "publicMintActive",
      args: [],
    }) ?? [];
  return publicSale;
}

export function useTokenRewards() {
  const [tokenRewards] =
    useContractCall({
      abi: tokenContractInterface,
      address: tokenAddress,
      method: "totalClaimable",
      args: [],
    }) ?? [];
  return tokenRewards ? parseInt(tokenRewards._hex, 16) : 0;
}

export function useClaim() {
  const { state, send } = useContractFunction(tokenContract, "claimReward");
  return { state, send };
}

export function usePreSaleMint() {
  const { state, send } = useContractFunction(nftContract, "presaleMint");
  return { state, send };
}
export function usePublicSaleMint() {
  const { state, send } = useContractFunction(nftContract, "publicMint");
  return { state, send };
}
