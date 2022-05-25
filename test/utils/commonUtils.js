
const wdioUtils = require('./wdioUtils');
const testData = require('../testData/conversationTestData').testData;
const conversationScreen = require('../pageobjects/conversationScreen');
const assert = require('chai').assert;
class commonUtils {
  async setup() {
    await browser.url(testData.url);
    await browser.deleteCookies();
    await browser.maximizeWindow();
    await wdioUtils.waitForDisplayedAndClick(conversationScreen.registerpopupclose);
    await wdioUtils.waitForDisplayedAndClick(conversationScreen.snatchButton, 'Snatch button is not displayed');
    await browser.switchToFrame(1);

    // Provide name and verify name message
    await wdioUtils.waitForDisplayed(conversationScreen.askNameMessage, 'Name message not displayed');
    await wdioUtils.waitForClickableAndSetValue(conversationScreen.textBox, 'shrey', 'Textbox not found');
    await conversationScreen.sendButton.click();
    await wdioUtils.waitForDisplayed(conversationScreen.verifyNameMessage, 'Verify name message not displayed');
    await wdioUtils.waitForDisplayedAndClick(conversationScreen.yesButton, 'Yes button not found');
  }
}
module.exports = new commonUtils();
