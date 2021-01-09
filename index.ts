const parse = require("./parse");
const evaluate = require("./evaluate");

const s = `
define x: int = 32
define y: int = 16

define add: function(a: int, b: int): int
  a + b
end

add(x, y)
`;

const script = `
define x: 32
define function add: (a, b) -> {
  return a + b
}

print add(2, 3)
`;

const tokens = parse(script);
evaluate(tokens);
