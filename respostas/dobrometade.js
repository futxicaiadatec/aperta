var delta = 0.1
var lastKey = ""
var lastValue = 0

document.onkeydown = e => {
  if (!e.repeat && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    if (e.key === lastKey) {
      delta = 2 * delta
    } else {
      delta = delta / 2
      lastKey = e.key
    }
    if (delta < 0.01 ) {
      delta = 0.01
    }

    if (e.key === 'ArrowLeft') {
      lastValue = lastValue - delta
    }
    if (e.key === 'ArrowRight') {
      lastValue = lastValue + delta
    }
    if (lastValue > 1) {
      lastValue = 1
    }
    if (lastValue < 0) {
      lastValue = 0
    }

    moveBar(lastValue)

    console.log(`delta: ${delta}`)
    console.log(`value: ${lastValue}`)
  }
}
