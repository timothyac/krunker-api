const { getMatchInformation } = require("./index");

// Should expect success
getMatchInformation("MIA:uqdik")
  .then(match => console.log(match))
  .catch(err => console.log(err));

// Should expect error
getMatchInformation("asdfghjkl")
  .then(match => console.log(match))
  .catch(err => console.log(err));
