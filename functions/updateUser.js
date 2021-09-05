const { getCollection } = require("./utils/astraClient");

exports.handler = async function (event) {
  var data = event.body;
  const usersCollection = await getCollection().collection(data.category);
  try {
    // partially update user
    const user = await usersCollection.update(data.email, data);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
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
