const { bot, bing, dall3 } = require('../lib/')
const config = require('../config')
bot(
  {
    pattern: 'bing ?(.*)',
    fromMe: true,
    desc: 'bing ai',
    type: 'ai',
  },
  async (message, match) => {
    if (!config.BING_COOKIE)
      return await message.send(
        `Please set a bing cookie, log in to bing.com/chat, use bing AI chat once, and then copy the cookie.`
      )
    match = match || message.reply_message.text
    if (!match) return await message.send('*Example : bing Hi*')
    await message.send(
      {
        text: '⏳',
        key: message.message.key,
      },
      {},
      'react'
    )
    const res = await bing(match)
    await message.send(
      {
        text: '✅',
        key: message.message.key,
      },
      {},
      'react'
    )
    return await message.send(res, { quoted: message.data })
  }
)

bot(
  {
    pattern: 'dali ?(.*)',
    fromMe: true,
    desc: 'bing image creator',
    type: 'ai',
  },
  async (message, match) => {
    if (!config.BING_COOKIE)
      return await message.send(
        `Please set a bing cookie, log in to https://bing.com/images/create, use bing Image Creator once, and then copy the cookie.`
      )
    const res = await dall3(match)
    return await message.sendFromUrl(res)
  }
)
