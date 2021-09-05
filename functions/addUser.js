const { getCollection } = require("./utils/astraClient");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.handler = async function (event) {
  var data = event.body;
  const usersCollection = await getCollection().collection(data.category);
  try {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(data.password, salt, function (err, hash) {
        data.password = hash;

        const user = await usersCollection.create(data.email, data);

        return {
          statusCode: 200,
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        };
      });
    });
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
