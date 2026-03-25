setTimeout(() => {
  const os = require('os');

  console.log(process.uptime());
  console.log(os.uptime());
  console.log(os.totalmem());
  console.log(process.memoryUsage().heapTotal);
}, 1000);
