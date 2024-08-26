const { kafka } = require("./client");

// console.log("object");

async function init() {
  const admin = kafka.admin();
  console.log("admin connecting");
  admin.connect();
  console.log("admin connection success...");

  console.log("creating topic");
  await admin.createTopics({
    topics: [
      {
        topics: "rider-update",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created success...");

  console.log("disconnecting admin");
  await admin.disconnect();
}

init();
