var boomSound = new Audio('boom.wav');
var kickSound = new Audio('kick.wav');
var snareSound = new Audio('snare.wav');

// Boom sound
function Boom () {
  boomSound.play()
}
document.getElementById('boomButton').addEventListener('click', function () {
  Boom()
})

// Kick sound
function Kick () {
  kickSound.play()
}
document.getElementById('kickButton').addEventListener('click', function () {
  Kick()
})

// Snare sound
function Snare () {
  snareSound.play()
}
document.getElementById('snareButton').addEventListener('click', function () {
  Snare()
})
