const basePage = require('./basePage');

class ConversationScreen extends basePage {
  get askNameMessage() {
    return $("//p[contains(.,'There’s lots I can show you but first please let me know your name.')]");
  }

  get verifyNameMessage() {
    return $("//p[contains(.,'Hi shrey! Good to chat to you. Did I get your name right?')]");
  }

  get textBox() {
    return $('//input[@id="chat_input" or @placeholder="type something..." or @data-test="input-chat"]');
  }

  get ExplainBotText() {
    return $("//p[contains(.,'Basically, we chatbots are just software applications')]");
  }

  get makeChatBotReply() {
    return $("//p[contains(.,'First things first. Have you ever built a chatbot before?')]");
  }

  get yesButton() {
    return $("//span[contains(.,'Yes')]");
  }

  get sendButton() {
    return $("//i[normalize-space()='send']");
  }

  get explainChatBotButton() {
    return $("//span[contains(.,'Explain chatbots')]");
  }

  get makeChatBotButton() {
    return $("//span[contains(.,'Make a chatbot')]");
  }
}

module.exports = new ConversationScreen();
