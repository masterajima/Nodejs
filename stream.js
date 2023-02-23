//open file and readfile
const fs = require("fs");
fs.readFile("./chat-log/george-ban-chat.log", "chat.log", (err, chatLog) => {
  console.log(`File Read ${chatLog.length}`);
});
let stream = fs.createReadStream("./chat-log/george-ban-chat.log", "chat.log");
let data;
stream.once("data", (chunk) => {
  console.log("read stream started");
  console.log("==============");
  console.log(chunk);
});
stream.on("data", (chunk) => {
  console.log(`chunk ${chunk.length}`);
  data += chunk;
});
stream.on("end", () => {
  console.log(`finished ${data.length}`);
});
