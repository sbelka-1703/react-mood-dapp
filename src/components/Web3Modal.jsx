import React from 'react';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
const Web3Modal = () => {
    const providerOptions = {
        /* See Provider Options Section */
    };

    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    const instance = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();


    return <div></div>;
};

export default Web3Modal;
