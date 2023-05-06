let nouns = ["heart", "rabbit", "ocean"];
let verbs = ["look", "run", "make"];
let adjectives = ["good", "possible", "different"];

let noun = nouns[Math.floor(Math.random()*nouns.length)];
let verb = verbs[Math.floor(Math.random()*verbs.length)];
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`;
console.log(sentence);
document.querySelector('.sentence').textContent = sentence;

function rendersentence() {
  let elementFromNoun = nouns[Math.floor(Math.random()*nouns.length)];
  let elementFromVerb = verbs[Math.floor(Math.random()*verbs.length)];
  let elementFromAdjective = adjectives[Math.floor(Math.random()*adjectives.length)];
  let newSentence = `My ${elementFromNoun} leaps ${elementFromAdjective} when I ${elementFromVerb} a rainbow in the sky`;
  console.log(newSentence);
  document.querySelector('.sentence').textContent = newSentence;
}

let btn = document.querySelector("button");
btn.addEventListener("click", rendersentence);
