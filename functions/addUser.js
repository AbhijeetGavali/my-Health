const faker = require("faker");
const { getCollection } = require("./utils/astraClient");
const bcrypt = require("bcrypt");
const saltRounds = 10;

let id = faker.random.uuid();

exports.handler = async function (event) {
  var data = event.body;
  const users = await getCollection().collection(data.category);
  try {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(data.password, salt, function (err, hash) {
        data.password = hash;

        const user = await users.create(id, data);
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
