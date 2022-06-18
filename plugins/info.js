let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
  
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedRole = users.map(toNumber('role')).sort(sort('role'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersRole = sortedRole.map(enumGetKey)
  console.log(participants)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let { name, role, level, limit, exp, lastclaim, registered, regTime, age, socmed } = global.db.data.users[who]
    let user = global.db.data.users[m.sender]
    let owner = global.owner.includes(who.split`@`[0])
    let prems = global.prems.includes(who.split`@`[0])
    let caption = usersExp.indexOf(who) + 1
    let ico2 = ` *${caption}* `
         let texfortop1 = `
  ◪ *「 INFO 」*
  ├─ ❏ *Name* : ${name}
  ├─ ❏ *Tier* : ${role}   
${prems ? `  └─ ❏ *Premium* : 🛡️Yes` : `  ├─ ❏ *Limit* : ${limit}      • Lv ${level}
  └─ ❏ *Exp* : ${exp}    |「 𝐓𝐨𝐩 *1* 🏆 」`}
  



`.trim()

  let footer2 = `©idilBot`

if (usersExp.indexOf(who) + 1 ==1) return conn.reply({
    chat: await conn.sendBut(m.chat, texfortop1, footer2, 'Leaderboard', '.leaderboard 10', m, { contextInfo: { mentionedJid: conn.parseMention(texfortop1) } }), 
    })


      let text = `
  ◪ *「 INFO 」*
  ├─ ❏ *Name* : ${name}
${owner ? `  └─ ❏ *Status* : 🔰 Owner` : `  ├─ ❏ *Tier* : *${role}*   `}   \n${prems ? `  ├─ ❏ *Status* : 🛡️Premium    • Lv ${level} \n  └─ ❏ *Exp* : ${exp}    |「 𝐓𝐨𝐩 *${caption}* 」` : `${owner ? ` ` : `  ├─ ❏ *Limit* : ${limit}         • Lv ${level} \n  └─ ❏ *Exp* : ${exp}    |「 𝐓𝐨𝐩 *${caption}* 」`}`}

  


`.trim()

  let footer = `©idilBot`
 conn.reply({
    chat: await conn.sendBut(m.chat, text, footer, 'Leaderboard', '.leaderboard 10', m, { contextInfo: { mentionedJid: conn.parseMention(text) } }),

    contextInfo: { mentionedJid : [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersRole.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['xp']
handler.command = /^(info|exp|ceklimit)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


