
const list = [{
  "card": {
    "suit": "D",
    "rank": "4"
  },
  "guess": "skip",
  "payoutMultiplier": 0.99
}]

function addItem(randomNum) {
  list.push({
    "card": {
      "suit": "S",
      "rank":randomNum
    },
    "guess": "skip",
    "payoutMultiplier": 0.99
  })
  return list
}

export const createMockData = function (randomNum) {
  return  {
    "id": new Date().getTime() + randomNum,
    "active": true,
    "payoutMultiplier": 0,
    "amountMultiplier": 1,
    "amount": 0,
    "payout": 0,
    "updatedAt": "Sat, 17 Jun 2023 09:44:06 GMT",
    "currency": "btc",
    "game": "hilo",
    "user": {
      "id": "99d5643f-00cb-4011-acdf-19a845cb3a3f",
      "name": "hu19940121"
    },
    "state": {
      "startCard": {
        "suit": "S",
        "rank": "9"
      },
      "rounds": addItem(randomNum)
    }
  }
}