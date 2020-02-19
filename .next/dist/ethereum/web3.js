'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5
};

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

  web3 = new _web2.default(window.web3.currentProvider, null, OPTIONS);
} else {
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/8fe7f01174ef46a390867c25575b33f7');
  web3 = new _web2.default(provider, null, OPTIONS);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIk9QVElPTlMiLCJkZWZhdWx0QmxvY2siLCJ0cmFuc2FjdGlvbkNvbmZpcm1hdGlvbkJsb2NrcyIsInRyYW5zYWN0aW9uQmxvY2tUaW1lb3V0Iiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxJQUFNO2dCQUFVLEFBQ0EsQUFDZDtpQ0FGYyxBQUVpQixBQUMvQjsyQkFIRixBQUFnQixBQUdXO0FBSFgsQUFDZDs7QUFLQSxJQUFJLFlBQUo7O0FBRUUsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWxELEFBQTJELGFBQVksQUFHckU7O1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBaEIsQUFBcUIsaUJBQXJCLEFBQXFDLE1BQTVDLEFBQU8sQUFBMEMsQUFDbEQ7QUFKRCxPQUlLLEFBQ0Q7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBSixBQUFTLFVBQVQsQUFBa0IsTUFBekIsQUFBTyxBQUF1QixBQUMvQjtBQUlQOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZGVpdmlkL0RvY3VtZW50cy9ibG9ja2NoYWluL2tpY2tzdGFydCJ9