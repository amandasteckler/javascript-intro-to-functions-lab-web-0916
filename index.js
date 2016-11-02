function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var up = string.toUpperCase()
  console.log(up)
}

function logWhisper(string) {
  var lower = string.toLowerCase()
  console.log(lower)
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
  else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
}
