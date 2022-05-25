const { assert } = require('chai');
const conversationScreen = require('../pageobjects/conversationScreen');
const wdioUtils = require('../utils/wdioUtils');
const testData = require('../testData/conversationTestData').testData;
const commonUtils = require('../utils/commonUtils');

describe('Snatchbot Assessment Tests', async () => {
  before(async () => {
    await commonUtils.setup();
  });

  it('Test ExplainBots reply', async () => {
    await wdioUtils.waitForDisplayedAndClick(conversationScreen.explainChatBotButton, 'Explain button not found');
    const explainBotText = await wdioUtils.waitForDisplayedAndGetText(conversationScreen.ExplainBotText, 'Explain text not found');
    assert.equal(explainBotText, testData.conversations.explainBotText, 'Explain text not matched');
  });

  it('Test make a chatbot reply', async () => {
    await wdioUtils.waitForDisplayedAndClick(conversationScreen.makeChatBotButton, 'make bot button not found');
    await wdioUtils.waitForDisplayed(conversationScreen.makeChatBotReply, 'make bot reply not found');
  });

  after(async () => {
    await browser.closeWindow();
  });
});
