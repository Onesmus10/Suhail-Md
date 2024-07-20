const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254768142549";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_01_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQW01bkswNFdJbHJlbjR5bWJtQTVabEZsVWdJVFd1YU13OHg3bEFKcUpVYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NjgxNDI1NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZDRUE2ODZFNTM5MjhGN0JFRDc1RkQzQ0ZCODQ3QTczXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ2OTY2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc2ODE0MjU0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUNFRTdBMjFFMDhBODEwRUFCNEIwMUUzRkQ1RTk0ODFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNDY5NjY4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlaSEVnRXRKVDUyOFptWU9wVE9fS0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTJhYWEyYWUtM2Q1YS00NjVhLTgxYmItZTYwZDA3NjY2ZWQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjMxLFxuICAgICAgMjE1LFxuICAgICAgMjMxLFxuICAgICAgNDcsXG4gICAgICA4MixcbiAgICAgIDEyMCxcbiAgICAgIDIwOCxcbiAgICAgIDExOSxcbiAgICAgIDExNixcbiAgICAgIDEzMSxcbiAgICAgIDE1MixcbiAgICAgIDIyLFxuICAgICAgNDMsXG4gICAgICAxMzksXG4gICAgICAyMzAsXG4gICAgICA1NixcbiAgICAgIDEyNixcbiAgICAgIDIxOSxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxMjYsXG4gICAgICAxOTUsXG4gICAgICAyNTEsXG4gICAgICAyMjQsXG4gICAgICAxNjMsXG4gICAgICAxNzksXG4gICAgICAzNixcbiAgICAgIDEwLFxuICAgICAgOTMsXG4gICAgICAyMzIsXG4gICAgICAyMDEsXG4gICAgICA4NixcbiAgICAgIDEsXG4gICAgICAxNDAsXG4gICAgICAxMDIsXG4gICAgICAxNixcbiAgICAgIDEwNSxcbiAgICAgIDk4LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBNMlRQWjgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjgxNDI1NDk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIm9uZXNtdXN3YXdlcnU1NzdcIixcbiAgICBcImxpZFwiOiBcIjIxMjUxOTUxMTgxOTM0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0Q2K0JNUTI1WHV0QVlZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQV1J1OXVTL3hrbWc1cGEvc0tnT1BaZEpxSStzSy92UEFKVUs5UzNuWENnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJZaEVIaS9QZzJCaUttZGFaOGFDTi9ZaDdKWDcranQ3ekc2UVQxL1lVSXhHTU9lR3piTU5oZjR0U1dnLzdsZWpLS3R0UFZWKzN6cUU0UGtiRTloSUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkF5ZGprYWREY2NSWXBnaXh2azJUckpYeTZSK0tEQ3lrQnNyY1FOb1hqWHRPZE9haGRqRDM4b3YrUmR2dmZ2L1pxTTdMUEp1NmhqeFo5dEdicmNuQkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2ODE0MjU0OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDY5NjYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjhkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGOGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVdWpwVjQ3MFMzNVc3b1Ztd0VySzlETUF1d0JnOWZDcGtTanlmSjNyKzRNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxODI3NjgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "weche",
  packname: process.env.PACK_NAME || "weche",
  botname : process.env.BOT_NAME  || "weche",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
