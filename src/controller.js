const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  sumValue = req.query.input
  fetch(`https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`)
  .then((resp) => {
    resp.json().then((data) => {
      results = validateSum(sumValue, data.values)
    })
  });
  //Implementar logica aquí
  return results;
};

const validateSum = (sum, values) => {
  matches = []; i = 1; 
  values.forEach((value1) => {
    values.forEach((value2) => {
      if ((value1 != value2 & value1.h_in+value2.h_in)==sum){
        i += 1; 
        matches.push({'id' : i, 'first_player' : value1.first_name + ' ' + value1.last_name, 
        'second_player' : value2.first_name + ' ' + value2.last_name});
      }
    })
  })
  return matches;
}

module.exports = { getPairsOfPlayers };
