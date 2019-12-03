/**
 * @fileoverview Web3 Externs File
 * @externs
 */


/**
 * Main Entry-point
 * @constructor
 */
var Web3 = function(url){};
Web3.version = "";
Web3.modules = {};

/* 
 * Web3.core functions
 */
Web3.core = {};
Web3.core.packageInit = function(pkg, args) {};
Web3.core.addProviders = function(pkg) {};
Web3.setProvider = function(provider, net) {};


/* 
 * Web3.utils functions
 */
Web3.utils = {};
Web3.utils.isBN = function(o) {};
Web3.utils.isBigNumber = function(o) {};
Web3.utils.toBN = function(n) {};
Web3.utils.toTwosComplement = function(o) {};
Web3.utils.isAddress = function(o) {};
Web3.utils.checkAddressChecksum = function(o) {};
Web3.utils.leftPad = function(s, c, sig) {};
Web3.utils.rightPad = function(s, c, sig) {};
Web3.utils.utf8ToHex = function(s) {};
Web3.utils.hexToUtf8 = function(hex) {};
Web3.utils.hexToNumber = function(value) {};
Web3.utils.hexToNumberString = function(value) {};
Web3.utils.numberToHex = function(value) {};
Web3.utils.bytesToHex = function(bytes) {};
Web3.utils.hexToBytes = function(hex) {};
Web3.utils.toHex = function(value, returnType) {};
Web3.utils.isHexStrict = function(hex) {};
Web3.utils.isHex = function(hex) {};
Web3.utils.isBloom = function(bloom) {};
Web3.utils.isUserEthereumInBloom = function(bloom, address) {};
Web3.utils.isContractAddressInBloom = function(bloom, address) {};
Web3.utils.isTopic = function(topic) {};
Web3.utils.isTopicInBloom = function(bloom, topic) {};
Web3.utils.isInBloom = function(bloom, topic) {};
Web3.utils.sha3 = function(value) {};
Web3.utils.sha3Raw = function(value) {};


/* 
 * Web3.eth members and functions
 */
Web3.eth = function() {};
Web3.eth.setProvider = function() {};
Web3.eth.defaultCommon = {};
Web3.eth.defaultHardfork = "";
Web3.eth.defaultChain = "";
Web3.eth.transactionPollingTimeout = 0;
Web3.eth.transactionConfirmationBlocks = 0;
Web3.eth.transactionBlockTimeout = 0;
Web3.eth.defaultAccount = "";
Web3.eth.defaultBlock = 0;
Web3.eth.clearSubscriptions = function() {};
Web3.eth.currentProvider = "";
Web3.eth.getNodeInfo = function() {};
Web3.eth.getProtocolVersion = function() {};
Web3.eth.getCoinbase = function() {};
Web3.eth.isMining = function() {};
Web3.eth.getHashrate = function() {};
Web3.eth.isSyncing = function() {};
Web3.eth.getGasPrice = function() {};
Web3.eth.getAccounts = function() {};
Web3.eth.getBlockNumber = function() {};
Web3.eth.getBalance = function(arg1, arg2) {};
Web3.eth.getStorageAt = function(x, y, z) {};
Web3.eth.getCode = function(x, y) {};
Web3.eth.getBlock = function(x, y) {};
Web3.eth.getUncle = function(x, y) {};
Web3.eth.getBlockTransactionCount = function(arg) {};
Web3.eth.getBlockUncleCount = function(arg) {};
Web3.eth.getTransaction = function(arg) {};
Web3.eth.getTransactionFromBlock = function(arg1, arg2) {};
Web3.eth.getTransactionReceipt = function(arg) {};
Web3.eth.getTransactionCount = function(arg1, arg2) {};
Web3.eth.sendSignedTransaction = function(arg1) {};
Web3.eth.signTransaction = function(arg1) {};
Web3.eth.sendTransaction = function(arg1) {};
Web3.eth.sign = function(arg1, arg2) {};
Web3.eth.call = function(arg1, arg2) {};
Web3.eth.estimateGas = function(arg1) {};
Web3.eth.submitWork = function(arg1, arg2, arg3) {};
Web3.eth.getWork = function() {};
Web3.eth.getPastLogs = function(arg) {};
Web3.eth.getChainId = function(arg) {};
Web3.eth.requestAccounts = function() {};
Web3.eth.getProof = function(arg1, arg2, arg3) {};
Web3.eth.getPendingTransactions = function() {};


/*
 * Web3.eth.net members and functions
 */
Web3.eth.net = function(){};
Web3.eth.net.getId = function() {};
Web3.eth.net.isListening = function() {};
Web3.eth.net.getPeerCount = function() {};
Web3.eth.net.getNetworkType = function() {};

/*
 * Web3.eth.accounts members and functions
 */
Web3.eth.accounts = {};
Web3.eth.accounts.getNetworkId = function() {};
Web3.eth.accounts.getChainId = function() {};
Web3.eth.accounts.getGasPrice = function() {};
Web3.eth.accounts.getTransactionCount = function() {};

/*
 * Web3.eth.accounts.wallet members and functions
 */
Web3.eth.accounts.wallet = function() {};
Web3.eth.accounts.wallet.prototype.create = function(numAccounts, entropy) {};
Web3.eth.accounts.wallet.prototype.add = function(account) {};
Web3.eth.accounts.wallet.prototype.remove = function(addressOrIndex) {};
Web3.eth.accounts.wallet.prototype.clear = function() {};
Web3.eth.accounts.wallet.prototype.encrypt = function(password, options) {};
Web3.eth.accounts.wallet.prototype.decrypt = function(enc_wallet, password) {};
Web3.eth.accounts.wallet.prototype.save = function(password, keyname) {};
Web3.eth.accounts.wallet.prototype.load = function(password, keyname) {};


/*
 * Web3.eth.personal members and functions
 */
Web3.eth.personal = function() {};
Web3.eth.personal.net = Web3.eth.net;
Web3.eth.personal.defaultAccount = "";
Web3.eth.personal.defaultBlock = 0;
Web3.eth.personal.getAccounts = function() {};
Web3.eth.personal.newAccount = function(arg) {};
Web3.eth.personal.unlockAccount = function(arg1, arg2, arg3) {};
Web3.eth.personal.lockAccount = function(arg1) {};
Web3.eth.personal.importRawKey = function(arg1, arg2) {};
Web3.eth.personal.sendTransaction = function(arg1, arg2) {};
Web3.eth.personal.signTransaction = function(arg1, arg2) {};
Web3.eth.personal.sign = function(arg1, arg2) {};
Web3.eth.personal.ecRecover = function(arg1, arg2) {};


/*
 * Web3.eth.Contract members and functions
 */
Web3.eth.Contract = function(jsonInterface, address, options) {};
Web3.eth.Contract.setProvider = function() {};
Web3.eth.Contract.address = "";
Web3.eth.Contract.jsonInterface = {};
Web3.eth.Contract.jsonInterface = "";
Web3.eth.Contract.defaultAccount = "";
Web3.eth.Contract.defaultBlock = 0;
Web3.eth.Contract.transactionBlockTimeout = 0;
Web3.eth.Contract.transactionConfirmationBlocks = 0;
Web3.eth.Contract.transactionPollingTimeout = 0;
Web3.eth.Contract.defaultChain = 0;
Web3.eth.Contract.defaultHardfork = 0;
Web3.eth.Contract.defaultCommon = 0;
Web3.eth.Contract.deploy = function(options, callback) {};
Web3.eth.Contract.clone = function() {};
Web3.eth.Contract.once = function(event, options, callback) {};
Web3.eth.Contract.getPastEvents = function() {};


/*
 * Web3.eth.Iban members and functions
 */
Web3.eth.Iban = function() {};
Web3.eth.Iban.toAddress = function(ib) {};
Web3.eth.Iban.toIban = function(address) {};
Web3.eth.Iban.fromAddress = function(address) {};
Web3.eth.Iban.fromBban = function(bban) {};
Web3.eth.Iban.createIndirect = function(options) {};
Web3.eth.Iban.isValid = function(iban) {};
Web3.eth.Iban.prototype.isValid = function(iban) {};
Web3.eth.Iban.prototype.isDirect = function() {};
Web3.eth.Iban.prototype.isIndirect = function() {};
Web3.eth.Iban.prototype.checksum = function() {};
Web3.eth.Iban.prototype.institution = function() {};
Web3.eth.Iban.prototype.client = function() {};
Web3.eth.Iban.prototype.toAddress = function() {};
Web3.eth.Iban.prototype.toString = function() {};


/*
 * Web3.eth.abi members and functions
 */
Web3.eth.abi = function() {};
Web3.eth.abi.prototype.encodeFunctionSignature = function(fname) {};
Web3.eth.abi.prototype.encodeEventSignature = function(fname) {};
Web3.eth.abi.prototype.encodeParameter = function(type, param) {};
Web3.eth.abi.prototype.encodeParameters = function(types, params) {};
Web3.eth.abi.prototype.mapTypes = function(types) {};
Web3.eth.abi.prototype.isSimplifiedStructFormat = function(type) {};
Web3.eth.abi.prototype.mapStructNameAndType = function(structName) {};
Web3.eth.abi.prototype.mapStructToCoderFormat = function(struct) {};
Web3.eth.abi.prototype.encodeFunctionCall = function(jsonInterface, params) {};
Web3.eth.abi.prototype.decodeParameter = function(type, bytes) {};
Web3.eth.abi.prototype.decodeParameters = function(outputs, bytes) {};
Web3.eth.abi.prototype.decodeLog = function(inputs, data, topics) {};


/*
 * Web3.eth.ens members and functions
 */
Web3.eth.ens = function(eth) {};
Web3.eth.ens.registry = function() {};
Web3.eth.resolverMethodHandler = function() {};
Web3.eth.ens.resolver = function(name) {};
Web3.eth.ens.getAddress = function(name, callback) {};
Web3.eth.ens.setAddress = function(name, address, sendOptions, callback) {};
Web3.eth.ens.getPubkey = function(name, callback) {};
Web3.eth.ens.setPubkey = function(name, x, y, sendOptions, callback) {};
Web3.eth.ens.getContent = function(name, callback) {};
Web3.eth.ens.setContent = function(name, hash, sendOptions, callback) {};
Web3.eth.ens.getMultiHash = function(name, callback) {};
Web3.eth.ens.setMultiHash = function(name, callback) {};
Web3.eth.ens.checkNetwork = function() {};


/*
 * Web3.shh members and functions
 */
Web3.shh = function() {};
Web3.shh.getVersion = function() {};
Web3.shh.getInfo = function() {};
Web3.shh.setMaxMessageSize = function(arg) {};
Web3.shh.setMinPoW = function(arg) {};
Web3.shh.markTrustedPeer = function(arg) {};
Web3.shh.newKeyPair = function() {};
Web3.shh.addPrivateKey = function(arg) {};
Web3.shh.deletePrivatekey = function(arg) {};
Web3.shh.hasKeyPair = function(arg) {};
Web3.shh.getPublicKey = function(arg) {};
Web3.shh.getPrivateKey = function(arg) {};
Web3.shh.newSymKey = function() {};
Web3.shh.addSymKey = function(arg) {};
Web3.shh.generateSymKeyFromPassword = function(arg) {};
Web3.shh.hasSymKey = function(arg) {};
Web3.shh.getSymKey = function(arg) {};
Web3.shh.deleteSymKey = function(arg) {};
Web3.shh.newMessageFilter = function(arg) {};
Web3.shh.getFilterMessages = function(arg) {};
Web3.shh.deleteMessageFilter = function(arg) {};
Web3.shh.post = function(arg) {};
Web3.shh.unsubscribe = function(arg) {};
Web3.shh.prototype.clearSubscriptions = function() {};


/*
 * Web3.bzz members and functions
 */
// Swarm JS
Web3.bzz = function() {};
Web3.bzz.givenProvider = {};
