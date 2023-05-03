const XTSInteractive = require("./index.js").Interactive;
const xtsInteractive = new XTSInteractive("https://trading.bigul.co", true);
xtsInteractive.isLoggedIn = true;
xtsInteractive.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJTWU1QM182Qzk0MjE2REVFMTY2MjBGOTA5NTg1IiwicHVibGljS2V5IjoiNmM5NDIxNmRlZTE2NjIwZjkwOTU4NSIsImlhdCI6MTY4MzEwNzc2OCwiZXhwIjoxNjgzMTk0MTY4fQ.yYySLbZ-RCeqJyH6uwdrVzkHbPeGIhDUqIgwzySLFSc";
xtsInteractive.getOrderBook().then((value) => console.log(value));
