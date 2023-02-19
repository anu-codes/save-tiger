import React from "react";
import Web3Modal from "web3modal";
import { useState, useEffect, useRef } from "react";
import {
  abi,
  NFT_CONTRACT_ADDRESS,
  DAO_ABI,
  STDAO_CONTRACT_ADDRESS,
} from "./constants";
import { Contract, providers, utils } from "ethers";


export default function Minting() {
    const [walletConnected, setWalletConnected] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
    const web3ModalRef = useRef();
    const [selectedTab, setSelectedTab] = useState("");
  
    const publicMint = async () => {
      try {
        console.log("Public mint");
        const signer = await getProviderOrSigner(true);
        const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
        const tx = await nftContract.mint({
          value: utils.parseEther("0.07"),
        });
        setLoading(true);
        await tx.wait();
        setLoading(false);
        window.alert("You successfully minted a Save Tiger NFT! Visit OpenSea testnet to view your token.");
      } catch (err) {
        console.error(err);
      }
    };
    const connectWallet = async () => {
      try {
        await getProviderOrSigner();
        setWalletConnected(true);
      } catch (err) {
        console.error(err);
      }
    };
    const getTokenIdsMinted = async () => {
      try {
        const provider = await getProviderOrSigner();
        const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
        const _tokenIds = await nftContract.tokenIds();
        console.log("tokenIds", _tokenIds);
        setTokenIdsMinted(_tokenIds.toString());
      } catch (err) {
        console.error(err);
      }
    };
    const getProviderOrSigner = async (needSigner = false) => {
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 80001) {
          window.alert("Change the network to Mumbai");
          throw new Error("Change network to Mumbai");
        }
    
        if (needSigner) {
          const signer = web3Provider.getSigner();
          return signer;
        }
        return web3Provider;
      };
      useEffect(() => {
        if (!walletConnected) {
          web3ModalRef.current = new Web3Modal({
            network: "mumbai",
            providerOptions: {},
            disableInjectedProvider: false,
          });
          connectWallet();
          getTokenIdsMinted();
    
          setInterval(async function () {
            await getTokenIdsMinted();
          }, 5 * 1000);
        }
      }, [walletConnected]);
      const renderButton = () => {
        if (!walletConnected) {
          return (
            <button className="bg-black hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded" onClick={connectWallet}>
              <u>Connect your wallet</u>
            </button>
          );
        }
        if (loading) {
          return <button><u>Loading...</u></button>;
        }
        
    return (
        <button onClick={publicMint}>
          <u> Public Mint 🚀</u>
        </button>
      );
    }
    return (
        <>
            <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-screen p-10 pl-20 pr-20">

                <div className="mt-8">
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">MINTING</h1>
                </div>

                <div className="ml-20 mr-20 px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200">
                
                    <div className="text-black text-base font-normal text-xl">
                        <p>Cost of NFT: 0.07 MATIC</p>
                        <p>(exclusive of gas fees)</p>
                        <p className="pt-6">Connect to the Polygon Mumbai network to proceed.</p>
                    </div>

                    <div className="pt-10 text-black py-2 px-4 font-extrabold text-2xl">
                        <div>{renderButton()}</div>
                    </div>
                   </div>
            </div>
        
        </>
    );
};
