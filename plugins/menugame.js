let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": " \nSelamat Datang\nPilih Menu Di Bawah untuk melihat daftar perintah yang dapat digunakan",
                        "description": "*©idilBot*",
                        "buttonText": "MENU",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `All Menu`,
                                        "description": "\nCommand : #allmenu \nPerintah ini untuk menampilkan semua daftar perintah",
                                        "rowId": ".menu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nI Want To Use Database Menu",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nI Want To Use Button Menu",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nI Want To Use All Menu",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nI Want To Use Jadibot Menu",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nI Want To Use Owner Menu",
                                        "rowId": ".owner"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nI Want To Use Hentai Menu",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nI Want To Use Absen Menu",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nI Want To User Group Setting",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu2x']
handler.register = false
module.exports = handler
