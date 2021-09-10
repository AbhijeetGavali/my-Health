exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello world"),
    headers: {
      "Content-type": "application/json",
    },
  };
};
