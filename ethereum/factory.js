import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'
require('dotenv').config();

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf1009aF26B82bbE898772f0F41B645631594F5d2'
);


export default instance;