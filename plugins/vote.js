const { bot, newVote } = require('../lib/')

bot(
  {
    pattern: 'vote ?(.*)',
    fromMe: true,
    desc: 'vote in whatsapp',
    type: 'group',
  },
  async (message, match) => {
    const msg = await newVote(message, match)
    return await message.send(msg)
  }
)
