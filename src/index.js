// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
  let x;  
  let extange = {};
  let exchangeCurrency = {
    H : 50,
    Q : 25,
    D : 10,
    N : 5,
    P : 1
  };
  if (currency > 10000) {
    extange.error = "You are rich, my friend! We don't have so much coins for exchange";
    return extange;
  } else if (currency < 0) {
    return extange;
  } else {
    for (let key in exchangeCurrency) {
      x = Math.floor(currency/exchangeCurrency[key]);
      if (x > 0) {
        extange[key] = x;
        currency = currency - x*exchangeCurrency[key];
      }
    }
  }
  return extange;
}
