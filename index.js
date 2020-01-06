const request = require("request-promise");

class Match {
  constructor(data) {
    this.region = data[1];
    this.maxPlayers = data[3];
    this.activePlayers = data[2];
    this.customGame = data[4].cs;
    this.gameType = this._defineGameType(data[4].i);
    this.map = this._defineMap(data[4].i);
  }

  _defineMap(string) {
    return string.split("_")[1];
  }

  _defineGameType(string) {
    return string.split("_")[0];
  }
}

/**
 * Pass in a **matchID** and a promise will resolve with a new **Match**.
 *
 * @param {string} matchID - Example: **MIA:uqdik**
 */
async function getMatchInformation(matchID) {
  const params = {
    uri: `https://matchmaker.krunker.io/game-info?game=${matchID}`,
    json: true
  };

  try {
    // Send a request to the URI
    let data = await request(params);

    return new Match(data);
  } catch ({ name, statusCode, error }) {
    if (error.error === "InvalidGameId") {
      // Usually means the match does not exist
      throw new Error(`"${matchID}" is not a valid match.`);
    } else {
      // Otherwise krunker may have changed the URI or just stop responding
      throw new Error("Bad request. Gateway may be down.");
    }
  }
}

module.exports = {
  getMatchInformation,
  Match
};
