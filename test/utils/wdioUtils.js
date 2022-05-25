let timeOut = 40000;
class wdioUtils {
  /**
   * Waits for an element to be displayed before clicking on it
   * @param {element} - web element
   * @param {timeoutInMs} - timeout in miliseconds.Default is set to 5000 (Option parameter)
   * @param {errorMsg} - err message to be thrown in case if element is not displayed (Option parameter)
   */
  async waitForDisplayedAndClick(element, errorMsg = 'Element not displayed', timeoutInMs = timeOut) {
    if (element !== undefined) {
      await element.waitForDisplayed({
        timeout: timeoutInMs,
        timeoutMsg: errorMsg,
      });
      await element.click();
    }
  }

  /**
   * Waits for an element to be displayed
   * @param {element} - web element
   * @param {timeoutInMs} - timeout in miliseconds.Default is set to 10000 (Option parameter)
   * @param {errorMsg} - err message to be thrown in case if element is not displayed (Option parameter)
   */
  async waitForDisplayed(element, errorMsg = 'Element not displayed', timeoutInMs = timeOut) {
    if (element !== undefined) {
      await element.waitForDisplayed({
        timeout: timeoutInMs,
        timeoutMsg: errorMsg,
      });
    }
  }

  /**
   * Waits for an element to be displayed before returning its text
   * @param {element} - web element
   * @param {timeoutInMs} - timeout in miliseconds.Default is set to 5000 (Option parameter)
   * @param {errorMsg} - err message to be thrown in case if element is not displayed (Option parameter)
   */
  async waitForDisplayedAndGetText(element, errorMsg = 'Element not displayed', timeoutInMs = timeOut) {
    if (element !== undefined) {
      await element.waitForDisplayed({
        timeout: timeoutInMs,
        timeoutMsg: errorMsg,
      });
      return await element.getText();
    }
    return null;
  }

  /**
   * Waits for an element to be clikable before clicking on it.
   * @param {element} - web element
   * @param {timeoutInMs} - timeout in miliseconds.Default is set to 5000 (Option parameter)
   * @param {errorMsg} - err message to be thrown in case if element is not displayed (Option parameter)
   */
  async waitForClickableAndClick(element, errorMsg = 'Element not displayed', timeoutInMs = timeOut) {
    if (element !== undefined) {
      await element.waitForClickable({
        timeout: timeoutInMs,
        timeoutMsg: errorMsg,
      });
      await element.click();
    }
  }

  /**
   * Waits for an element to be clikable before clicking on it.
   * @param {element} - web element
   * @param {timeoutInMs} - timeout in miliseconds.Default is set to 5000 (Option parameter)
   * @param {errorMsg} - err message to be thrown in case if element is not displayed (Option parameter)
   */
  async waitForClickableAndSetValue(element, value, errorMsg = 'Element not displayed', timeoutInMs = timeOut) {
    if (element !== undefined) {
      await element.waitForDisplayed({
        timeout: timeoutInMs,
        timeoutMsg: errorMsg,
      });
      await element.waitForExist;
      await element.waitForClickable({
        timeout: timeoutInMs,
        timeoutMsg: errorMsg,
      });

      await element.setValue(value);
    }
  }

  /**
   * Clicks on a element using Javascript executor
   * @param {element} - element to be clicked
   */
  async jsClick(element) {
    await browser.execute('arguments[0].click();', element);
  }

  /**
   * Scrolls until an element is visible and clicks on it.
   * @param {element} - Element to be scrolled until visible.
   * @param {behavior}  - Defines the transition animation. One of auto or smooth. Defaults to auto.
   * @param {block} - Defines vertical alignment. One of start, center, end, or nearest. Defaults is center.
   */
  async scrollIntoViewAndClick(element, behavior = 'smooth', block = 'center') {
    if (element !== undefined) {
      await element.scrollIntoView({ behavior, block });
      await element.click();
    }
  }
}
module.exports = new wdioUtils();
