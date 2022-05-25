
class BasePage {

  get snatchButton() {
    return $('#sntch_button');
  }

  get registerpopup() {
    return $("//div[contains(text(),'Register Here')]");
  }

  get registerpopupclose() {
    return $("div[title='Stop Walk-thru']");
  }

  get chatbotIframe() {
    'sntch_iframe';
  }
}


module.exports = BasePage;
