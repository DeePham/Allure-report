const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
// Corrected the export of OPENAI_API_KEY for CommonJS
exports.OPENAI_API_KEY = 'sk-RFo4sqAgJAnw1XV86C7AeOkWtlJ2f82dIsUpi8yLTbT3BlbkFJy-0FWcCE0CT6tEiGQwFeicJHQ0y3EZBdjf5DeUYt0A'
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
require('./heal')
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://getbootstrap.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs',
  plugins: {
    heal: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'AI_Testing',
  ai: {
    request: async (messages) => {
      const OpenAI = require('openai');
      // Use the exported OPENAI_API_KEY directly from this module
      const openai = new OpenAI({ apiKey: exports.OPENAI_API_KEY })

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
      });

      return completion?.choices[0]?.message?.content;
    }
  }
}
