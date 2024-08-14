const { bot, zushi, yami, ope, jidToNum } = require('../lib/')

bot(
  {
    pattern: 'zushi ?(.*)',
    fromMe: true,
    desc: 'allow set commands to be used by others in chat',
    type: 'logia',
  },
  async (message, match) => {
    if (!match) return await message.send(`> Example :\n- zushi ping, sticker\n\nwanna set all ? type list copy and paste the reply message\n- zushi copied_message`)
    const z = await zushi(match, message.jid)
    if (!z) return await message.send(`*${match}* already set`)

    await message.send(
      `*allowed commands for @${message.isGroup ? message.jid : jidToNum(message.jid)}*\n${z
        .map((a) => `- ${a}`)
        .join('\n')}`,
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)

bot(
  {
    pattern: 'yami ?(.*)',
    fromMe: true,
    desc: 'shows the commands',
    type: 'logia',
  },
  async (message, match) => {
    const z = await yami(message.jid)
    if (!z || !z.length) return await message.send(`not set any`)
    await message.send(
      `*allowed commands for @${message.isGroup ? message.jid : jidToNum(message.jid)}*\n${z
        .map((a) => `- ${a}`)
        .join('\n')}`,
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)

bot(
  {
    pattern: 'ope ?(.*)',
    fromMe: true,
    desc: 'delete or unset the command',
    type: 'logia',
  },
  async (message, match) => {
    if (!match) return await message.send('> Example :\n- ope ping, sticker')
    const z = await ope(message.jid, match)
    if (z === null) return await message.send(`not set *${match}*`)
    if (z === false || !z.length) return await message.send(`not set any`)
    await message.send(
      `*allowed commands for @${message.isGroup ? message.jid : jidToNum(message.jid)}*\n${z
        .map((a) => `- ${a}`)
        .join('\n')}`,
      { contextInfo: { mentionedJid: [message.jid] } }
    )
  }
)
