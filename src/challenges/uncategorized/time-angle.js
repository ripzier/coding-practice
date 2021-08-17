function angleBetween(hours, minutes) {
  const hourAngle = hours * 30 + minutes / 2
  const minuteAngle = minutes * 6

  const angle = Math.abs(minuteAngle - hourAngle)

  return angle <= 180 ? angle : 360 - angle
}

module.exports = angleBetween
