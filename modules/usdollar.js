
function usDollar (number) {
  return '$' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = usDollar;
