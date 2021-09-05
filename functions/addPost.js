const { getCollection } = require("./utils/astraClient");

exports.handler = async function (event) {
  var data = event.body;
  const usersCollection = await getCollection().collection("post");
  try {
    const post = await usersCollection.create(data.autherEmail, data);

    return {
      statusCode: 200,
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
