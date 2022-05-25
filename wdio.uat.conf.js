
//merge parent conf object + add new changes in uat conf(baseurl, connectiontimeour)
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')
const testData = require('./test/testData/conversationTestData.js').testData;
exports.config = merge(wdioConf.config, {
  baseUrl: testData.url,
  waitforTimeout: 5000,

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep: 'sanity',
  },
});
