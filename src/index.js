require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider());
var version = web3.version.api;

bot.start((ctx) =>
  bot.telegram.sendMessage(ctx.chat.id, "Welcome to Smart Contract Bot!", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Deploy contract", callback_data: "Deploy contract" }],
        [{ text: "Change Liquidity", callback_data: "Change Liquidity" }],
        [{ text: "Verify contract", callback_data: "Verify contract" }],
        [
          {
            text: "Download contract code",
            callback_data: "Download contract code",
          },
        ],
        [{ text: "Get contract ABI", callback_data: "Get contract ABI" }],
        [
          {
            text: "Auto De-compile contract",
            callback_data: "Auto De-compile contract",
          },
        ],
        [
          {
            text: "Explain contract using AI",
            callback_data: "Explain contract using AI",
          },
        ],
      ],
    },
  })
);

bot.on("callback_query", (ctx) => {
  const task = ctx.update.callback_query.data;
});

bot.launch();

("https://api.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=FTMID66TF8UJ4U3N9TUEVFT4C685WZAH3V");
