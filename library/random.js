class Random {

  static randomRange(min, max) {
    return Math.random() * max + min;
  }

  static choose(x1, x2) {
    let argumentNumber = arguments.length;
    let index = Math.round(Random.randomRange(0, argumentNumber-1))
    return arguments[index];
  }
}
