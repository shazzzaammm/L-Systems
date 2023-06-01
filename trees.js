const height = 700;
const width = 700;
function Tree(i) {
  this.rules = [];
  switch (i) {
    case 1:
      this.length = 325;
      this.x = width / 2;
      this.y = height;
      this.axiom = "Y";
      this.angle = 3.14 / 7;
      this.rules.push(new rule("X", "X[-FFF][+FFF]FX"));
      this.rules.push(new rule("Y", "YFX[+Y][-Y]"));
      break;
    case 2:
      this.length = 175;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.angle = 3.14 / 8;
      this.rules.push(new rule("F", "FF+[+F-F-F]-[-F+F+F]"));
      break;
    case 3:
      this.length = 120;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.angle = 3.14 / 5;
      this.rules.push(new rule("F", "F[+FF][-FF]F[-F][+F]F"));
      break;
    case 4:
      this.length = 250;
      this.x = width / 2;
      this.y = height;
      this.axiom = "X";
      this.angle = 3.14 / 9;
      this.rules.push(new rule("F", "FF"));
      this.rules.push(new rule("X", "F[+X]F[-X]+X"));
      break;
    case 5:
      this.length = 100;
      this.x = 0;
      this.y = height;
      this.axiom = "F-F-F-F";
      this.rules.push(new rule("F", "F-F+F+F-F"));
      this.angle = 3.14 / 2;
      break;
    case 6:
      this.length = 175;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.rules.push(new rule("F", "F[+F]F[-F]F"));
      this.angle = 3.14 / 7;
      break;
    case 7:
      this.length = 175;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("F", "FXF"));
      this.rules.push(new rule("X", "[-F+F+F]+F-F-F+"));
      break;
    case 8:
      this.length = 300;
      this.x = width / 4;
      this.y = height;
      this.axiom = "FXF--FF--FF";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("F", "FF"));
      this.rules.push(new rule("X", "--FXF++FXF++FXF--"));
      break;
    case 9:
      this.length = 15;
      this.x = width / 8;
      this.y = height / 1.25;
      this.axiom = "F-F-F-F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F-b+FF-F-FF-Fb-FF+b-FF+F+FF+Fb+FFF"));
      this.rules.push(new rule("b", "bbbbbb"));
      break;
    case 10:
      this.length = 10000;
      this.x = width / 2;
      this.y = height / 2;
      this.axiom = "F++F++F++F";
      this.angle = 3.14 / 4;
      this.rules.push(new rule("F", "-F++F-"));
      break;
    case 11:
      this.length = 100;
      this.x = width / 1.25;
      this.y = height / 1.25;
      this.axiom = "F++F++F++F++F";
      this.angle = 0.628319;
      this.rules.push(new rule("F", "F++F++F+++++F-F++F"));
      break;
    case 12:
      this.length = 1500;
      this.x = width / 2;
      this.y = height / 2;
      this.axiom = "F";
      this.angle = 2.0944;
      this.rules.push(new rule("F", "F+F-F"));
      break;
    case 13:
      this.length = 10;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F+F-F-F-b+F+F+F-F"));
      this.rules.push(new rule("b", "bbb"));
      break;
    case 14:
      this.length = 100;
      this.x = width / 1.25;
      this.y = height / 3;
      this.axiom = "F-F-F-F-F";
      this.angle = 1.25664;
      this.rules.push(new rule("F", "F-F++F+F-F-F"));
      break;
    case 15:
      this.length = 50;
      this.x = 0;
      this.y = height / 3;
      this.axiom = "X";
      this.angle = 3.14 / 6;
      this.rules.push(
        new rule(
          "X",
          "-F++F-X-F--F+Y---F--F+Y+F++F-X+++F++F-X-F++F-X+++F--F+Y--"
        )
      );
      this.rules.push(
        new rule(
          "Y",
          "+F++F-X-F--F+Y+F--F+Y---F--F+Y---F++F-X+++F++F-X+++F--F+Y"
        )
      );
      break;
    case 16:
      this.length = 40;
      this.x = width / 2;
      this.y = height;
      this.axiom = "FX";
      this.angle = 3.14 / 4;
      this.rules.push(
        new rule("X", "FX-FY-FX+FY+FX+FY+FX+FY+FX-FY-FX-FY-FX-FY-FX+FY+FX")
      );
      this.rules.push(new rule("Y", "FY"));
      break;
    case 17:
      this.length = 50;
      this.x = width / 1.15;
      this.y = height / 3;
      this.axiom = "XYXYXYX+?XYXYXYX+?XYXYXYX+?XYXYXYX";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("X", "FX+FX+FXFY-FY-"));
      this.rules.push(new rule("Y", "+FX+FXFY-FY-FY"));
      break;
    case 18:
      this.length = 75;
      this.x = width / 10;
      this.y = height / 3;
      this.axiom = "F--F--F--F--F--F";
      this.angle = 3.14 / 6;
      this.rules.push(new rule("F", "-F[--F--F]++F--F+"));
      break;
    case 19:
      this.length = 300;
      this.x = width / 2;
      this.y = height / 1.25;
      this.axiom = "F+F+F";
      this.angle = 2.0944;
      this.rules.push(new rule("F", "F+FF-F"));
      break;
    case 20:
      this.length = 300;
      this.x = width / 1.25;
      this.y = height;
      this.axiom = "X";
      this.angle = 2.0944;
      this.rules.push(new rule("X", "FY+FYFY-FY"));
      this.rules.push(new rule("Y", "FX-FXFX+FX"));
      break;
    case 21:
      this.length = 75;
      this.x = width / 2;
      this.y = height / 2;
      this.axiom = "X";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("X", "FX+FX+FXFYFX+FXFY-FY-FY-"));
      this.rules.push(new rule("Y", "+FX+FX+FXFY-FYFXFY-FY-FY"));
      break;
    case 22:
      this.length = 20;
      this.x = width / 2;
      this.y = height / 4;
      this.axiom = "X-X-X-X-X";
      this.angle = 1.25664;
      this.rules.push(new rule("X", "FX-FX-FX+FY+FY+FX-FX"));
      this.rules.push(new rule("Y", "FY+FY-FX-FX-FY+FY+FY"));
      break;
    case 23:
      this.length = 50;
      this.x = width / 5;
      this.y = height / 3;
      this.axiom = "F-F-F-F-F";
      this.angle = 1.25664;
      this.rules.push(new rule("F", "F-F-F++F+F-F"));
      break;
    case 24:
      this.length = 50;
      this.x = width / 2;
      this.y = height / 3;
      this.axiom = "L--F--L--F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("L", "+R-F-R+"));
      this.rules.push(new rule("R", "-L+F+L-"));
      break;
    case 25:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "X";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("X", "F-F-F+F+FX++F-F-F+F+FX--F-F-F+F+FX"));
      break;
    case 26:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F++++F";
      this.angle = 3.14 / 4;
      this.rules.push(new rule("F", "F+F+F++++F+F+F"));
      break;
    case 27:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F++F-F-F-F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F+F++F+FF"));
      break;
    case 28:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F++F++F+++F--F--F";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("F", "FF++F++F++FFF"));
      break;
    case 29:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("F", "F-F++F-F"));
      break;
    case 30:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F++F++F";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("F", "F-F++F-F"));
      break;
    case 32:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F";
      this.angle = 1.25644;
      this.rules.push(new rule("F", "F-F+F"));
      break;
    case 33:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "FF+F++F+F"));
      break;
    case 34:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "FX";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("X", "X+YF+"));
      this.rules.push(new rule("Y", "-FX-Y"));
      break;
    case 35:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "XF";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("X", "X+YF++YF-FX--FXFX-YF+"));
      this.rules.push(new rule("Y", "-FX+YFYF++YF+FX--FX-Y"));
      break;
    case 36:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+XF+F+XF";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("X", "XF-F+F-XF+F+XF-F+F-X"));
      break;
    case 37:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "X";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("X", "-YF+XFX+FY-"));
      this.rules.push(new rule("Y", "+XF-YFY-FX+"));
      break;
    case 38:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "FF+F+F+F+FF"));
      break;
    case 39:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F+F-F-FF+F+F-F"));
      break;
    case 40:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F+F-F-FFF+F+F-F"));
      break;
    case 41:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F-FF+FF+F+F-F-FF+F+F-F-FF-FF+F"));
      break;
    case 42:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F-F+F+F-F"));
      break;
    case 43:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "YF";
      this.angle = 3.14 / 3;
      this.rules.push(new rule("X", "YF+XF+Y"));
      this.rules.push(new rule("Y", "XF-YF-X"));
      break;
    case 44:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "F+F-F+F+F"));
      break;
    case 45:
      this.length = 100;
      this.x = width / 2;
      this.y = height;
      this.axiom = "F+F+F+F";
      this.angle = 3.14 / 2;
      this.rules.push(new rule("F", "FF+F+F+F+F+F-F"));
      break;
  }
}
function rule(i, o) {
  this.input = i;
  this.output = o;
}
