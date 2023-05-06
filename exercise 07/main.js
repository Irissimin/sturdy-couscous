let nouns = ["heart", "rabbit", "ocean"];
let verbs = ["look", "run", "make"];
let adjectives = ["good", "possible", "different"];

let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

console.log(noun)
console.log(verb)
console.log(adjective)

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`

console.log(sentence)
document.write(sentence)

console.log(nouns[Math.floor(Math.random()*nouns.length)])
