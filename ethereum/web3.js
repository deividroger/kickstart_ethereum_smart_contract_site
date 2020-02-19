import Web3 from 'web3'

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};

  let web3;

    if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
     
      
      web3 = new Web3(window.web3.currentProvider,null,OPTIONS);
    }else{
        const provider = new Web3.providers.HttpProvider(
          'https://rinkeby.infura.io/v3/8fe7f01174ef46a390867c25575b33f7'
        );
        web3 = new Web3(provider,null,OPTIONS);
      }



export default web3;