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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01BOEI2YlJkQmxlY3FDZUszZHNXL1BkeDk5VTZDSGlOelJRZHA2Q2xHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3dUdGV6SFd5d0tyVzYveVB1eEh6eW9HdWVyeFN6MnVzT1ZsYVFBTEhWND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRWFMS28rUEc5Mi9objh5TDBHKzUyNk5DQWNEMnEvL3E3dDhuT3FSelc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKYmhpUldzaFlqVi9jMERwcTJtWFRJb2NVYXZaUmg0NVlIOTQrTXI1WUQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDN2JVRFVmNUpqSmJ4OEJSbG5zaEJDM2xXUjlxMktvVjc4MEF0MksxM0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkllankxSjVXK1hvQVpicHZxNVJteEl6R0lCSis2N1haOTdWOXptVHozaHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5QM1ZJd3lwVzNkSmQ5Y3JJeFFadDNBVWpkeUR3YVcvNDRPdmh6VndGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWp2UlJ6Z3owR2ZpMHRpU0J1TThVcmtCVk9nY1BZRWJYUjB6Q0JWMGEyZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNORTlQdjVBRjdNbzVOKzRoMktVRC9sRXdTVVY3QStPb3RHQ0VpTUxoMFJKUjlPMWVNSWthLzVnNjZnVnBaNjI1VzJmVmt3c0xNMkNSL09TZUdYZWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJGaWR6R3duWEFnWFQrN2ZJV3JCNEw1SnBMaEFobDBYS0pkREZpQzIvLzZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyUHJvbUJJRVNWNlhHZ0R6U0VVdXZBIiwicGhvbmVJZCI6IjE2OWM2NzIwLWE0NWEtNDBlOS05ZTVmLTkxOTVmNzgxYjQ5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCa3dkaXRUdlo3YW9RbkllN0N0RTlqMmtmcXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05CdnBBSGxFYUlHRlJBeFZKczJTajd5QmZZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpTRjhENUxNIiwibWUiOnsiaWQiOiIyMzQ3MDQxMDM5MzY3OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+9g++9j++9gu+9ku+9gSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZEa3I0SEVJelV4TE1HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickJHdjFkcHBFb2Y1OTJocFN6UkRlZUhrd2lLSXJyRU5XTHhxNWgzWXpCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL3M4OVRaVzRaaWkrM3pOTlg4dXhBVGJVYWFSK3d3OE9aaEtJWjljMWs1V1QvZkpzY202WTQ4OUlsYUkrTjNqMGg2UTRGNHlqRlVkVGpvTnBrZnVxQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkQ2cnJwNVMwZ0VwSlU1SVdFRDVVOTBVcUN5dHMxelZYVHo0MFRkSWZpWHJ6K0ZPWVdzbUJINkhsM09MM2Y4QW1uSElLdDU5QVY2VDlxWmJCZlhvWmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MTAzOTM2NzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhd1JyOVhhYVJLSCtmZG9hVXMwUTNuaDVNSWlpSzZ4RFZpOGF1WWQyTXdUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NjkyMzc4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhUTSJ9"
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
