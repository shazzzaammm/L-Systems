let treeTemplate = new Tree(1);
let axiom = treeTemplate.axiom;
let angle = treeTemplate.angle;
let rules = treeTemplate.rules;
let length = treeTemplate.length;

let sentence = axiom;
let upButton, downButton, newButton;
let treeIndex = 1,
  treeIndexText;
function setup() {
  createCanvas(700, 700);
  background(51);

  // createP(axiom);
  translate(treeTemplate.x, treeTemplate.y);
  upButton = select(".up-button");
  downButton = select(".down-button");
  newButton = select(".new-button");
  treeIndexText = select(".tree-index");
  upButton.mousePressed(() => {
    treeIndex++;
    treeIndex %= 46;
    if (treeIndex < 0) {
      treeIndex = 1;
    }
    updateText();
  });
  downButton.mousePressed(() => {
    treeIndex--;
    if (treeIndex < 1) {
      treeIndex = 45;
    }
    updateText();
  });
  newButton.mousePressed(() => {
    getNewTree();
  });
  turtle();
}
function turtle() {
  background(51);
  resetMatrix();
  translate(treeTemplate.x, treeTemplate.y);
  stroke(255, 100);
  for (let i = 0; i < sentence.length; i++) {
    var currentChar = sentence.charAt(i);
    if (currentChar == "F") {
      line(0, 0, 0, -length);
      translate(0, -length);
    } else if (currentChar == "+") {
      rotate(-angle);
    } else if (currentChar == "-") {
      rotate(angle);
    } else if (currentChar == "[") {
      push();
    } else if (currentChar == "]") {
      pop();
    } else if (currentChar == "b") {
      line(0, 0, 0, -length);
    }
  }
}
function generate() {
  length *= 0.5;
  var nextSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    const currentChar = sentence.charAt(i);
    let found = false;
    for (let j = 0; j < rules.length; j++) {
      if (currentChar == rules[j].input) {
        nextSentence += rules[j].output;
        found = true;
        break;
      }
    }
    if (!found) {
      nextSentence += currentChar;
    }
  }
  sentence = nextSentence;
  // createP(sentence);
  turtle();
}
function mousePressed() {
  if (mouseX < width && mouseX > 0) generate();
}

function getNewTree() {
  background(51);
  resetMatrix();
  treeTemplate = new Tree(treeIndex);
  axiom = treeTemplate.axiom;
  angle = treeTemplate.angle;
  rules = treeTemplate.rules;
  length = treeTemplate.length;
  sentence = axiom;
  translate(treeTemplate.x, treeTemplate.y);
}
function updateText() {
  treeIndexText.html(`${treeIndex}`);
}
