function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  let count = 1;
  let base = 1;

  //find how many bits are needed to make n
  do {
    base = base << 1;

    if (base < n) {
      count ++;
    }
  } while (base < n);
  
  let random = 0;
  //generate the random number using left shifting
  for (let i = 1; i <= count; i ++) {
    if (random << 1 < n) {
      random = random << 1;
    }
    
    if (flip()) {
      if (random ^ 1 < n) {
        random = random ^ 1;
      }
    }
  }

  return random;
}

module.exports = randomNumber;