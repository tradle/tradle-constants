
var DATA_ARG_NAME = 'data'

module.exports = {
  IDENTITY_PUBLISH_ADDRESS: 'mhKnKtPFCbYpC61buDMgSBB57mqiWvXCUo',
  DATA_ARG_NAME: DATA_ARG_NAME,
  JSON_CONTENT_DISP: 'Content-Disposition: form-data; name="' + DATA_ARG_NAME + '"',
  DEFAULT_BOUNDARY: '--------------------------000000000000000000000000',
  OP_RETURN_PREFIX: 'tradle',
  TYPE: '_t',
  CUR_HASH: '_c',
  PREV_HASH: '_p',
  ROOT_HASH: '_r',
  OWNER: '_o',
  NEXT_OWNER: '_n',
  SIG: '_s',
  SIGNEE: '_i',
  TYPES: {
    MODEL: 'tradle.Model',
    IDENTITY: 'tradle.Identity',
    ORGANIZATION: 'tradle.Organization',
    VERIFICATION: 'tradle.Verification',
    FORGET_ME: 'tradle.ForgetMe',
    FORGET_YOU: 'tradle.ForgetYou',
    IDENTITY_PUBLISHING_REQUEST: 'tradle.IdentityPublishRequest',
    PRODUCT_LIST: 'tradle.ProductList',
    CUSTOMER_WAITING: 'tradle.CustomerWaiting',
    MESSAGE: 'tradle.Message',
    SIMPLE_MESSAGE: 'tradle.SimpleMessage',
    ADDITIONAL_INFO: 'tradle.AdditionalInfo',
    MONEY: 'tradle.Money',
    FINANCIAL_PRODUCT: 'tradle.FinancialProduct',
    FORM: 'tradle.Form'
  },
  NONCE: '_z',
  afterBlockTimestamp: 1447181514
}
