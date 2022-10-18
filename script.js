function getaddress() {
  web3 = new Web3(window.ethereum)
  window.ethereum.enable().catch(error => {
    // User denied account access 
    console.log(error)
  })
  web3.eth.getBalance("0x73794915b1137D856de1a46Fd2C3913E2b3B7B77")
.then(console.log);
  console.log(web3.eth.accounts);
  document.getElementById("address").innerHTML = web3.eth.accounts[0];
};