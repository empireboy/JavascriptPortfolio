class Math2 {

  static degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  static radiansToDegrees(radians) {
    return radians * 180 / Math.PI;
  }

  static roundTo(startValue, roundingValue) {
      return (startValue % roundingValue) >= roundingValue/2 ? parseInt(startValue / roundingValue) * roundingValue + roundingValue : parseInt(startValue / roundingValue) * roundingValue;
  }
}
