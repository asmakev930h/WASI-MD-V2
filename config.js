//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9a37f7ae5dee268bd05dc.jpg";
global.devs = "2347041039367";
global.sudo = process.env.SUDO || "2347041039367";
global.owner = process.env.OWNER_NUMBER || "2347041039367";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9a37f7ae5dee268bd05dc.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FQR3cyZkw3OVB6a0xTVm1VeFVKZnlITkc2L3Z2MCtHUzUzTml5NEoxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNll5OFBONkxKSXJQVUVWSTVJeTBsaWtFeXlXWlBRNW9YMTMvVmdVTzN6TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRktjVnZlLzFvSm1vS1FoWWVzOGM0OW1GTjMxdnlRMHZ0N3NqallISTNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1bWNrR3VMaVBBajhQdElScDRQcVlpanRzWlJlV2IxOW9PQlEreEFYVUVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Mb0N1dVNFdDNTMmhvbEdQRFJ2QUJiN0cwdmh2VjZSZ3ZtOVgyMFAwRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRNMFhHZFJkQlRmR0dOM3phY2tHVE4yZWpndS9Ca2U1VXNNdWQ1TUtWM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9TK2hYS1JORXd4d3BpL013VDhGd2FGS3VsTFp6S0IycXV1RWdZemZVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGdzcWp1TnAyam5QR0l4c0FuYk5hREFsWjVFMit3ajhmdTRkc0NOR2duWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InU4S2N0RGFiWlN1cHhJNnNzNXNmMEVKaHlZUHNPdHpnK1dEMWhrbXJKbmVkb2pabG5XL1FmSU50THo3dUZ1VzEyeUxFRC9BNjdsNnhNakhlUUNiUkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiVHhJamRWeWk2NjI1YkhPRXE5RWdiY04rRGFaU1RkeDRXL3F2RlpmZklmND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWG5uaHNnakhUZzJUcXFLenFBXzB6ZyIsInBob25lSWQiOiI5YjE4NzhlNC03MTNjLTRiMzItYWVlZi0yOTdkOTY4YjUzZTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3A4TnFXSUxYdGxEK2tobmlQbmhpTG14ZnpjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijlza1p4cEU2Q2Q3di93YklIVFJzb1hVWnppMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWRDUxRUZDSyIsIm1lIjp7ImlkIjoiMjM0NzA0MTAzOTM2NzoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvYPvvY/vvYLvvZLvvYEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmRGtyNEhFTER5cHJNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJCR3YxZHBwRW9mNTkyaHBTelJEZWVIa3dpS0lyckVOV0x4cTVoM1l6Qk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRrRGlCYzZMZmZyK1JnWWhsZEZucWFmR3lxRkF4SFlIbXhnQkUySTd4Sy85UU0vbDRGOXExTis3UVB6L2VtSTZ0UHVXa1o4T0pTckRPbXphVGxUOEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrN3N3aUxiVjA0c0JLNmVNYlc2ZXNoeGIyK1dFbTYrT1JQUnN5VlAxVEZOWEdMZjBvUTVzN0lxTlVoZXRzdlFjQzc5T1ZEc3UvK3c5VVpHSDVZSlVBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDEwMzkzNjc6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXdScjlYYWFSS0grZmRvYVVzMFEzbmg1TUlpaUs2eERWaThhdVlkMk13VCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODIwNDczMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVE0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "created by King cobra",
  author: process.env.PACK_AUTHER || "COBRA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "KING COBRA💯💀",
  ownername: process.env.OWNER_NAME || "King Cobra",
  errorChat: process.env.ERROR_CHAT || "2347041039367",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
