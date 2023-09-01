import { visit } from "unist-util-visit";

export const symbols = {
  S: '<span class="suit spade">S</span>',
  H: '<span class="suit heart">H</span>',
  D: '<span class="suit diamond">D</span>',
  C: '<span class="suit club">C</span>',
};

export function changeSuits() {
  function transformer(tree) {
    visit(tree, "text", function (node) {
      let value = suitReplace(node.value);

      node.type = "html";
      node.children = undefined;
      node.value = value;
    });
  }
  return transformer;
}

export function suitReplace(input) {
  const suits = ["S", "H", "D", "C"];
  const convertBid = (match, p1, p2, p3, p4) => p1 + p2 + symbols[p3] + p4;
  const convertCard = (match, p1, p2, p3, p4) => p1 + symbols[p2] + p3 + p4;

  const bids = /(^|[ (])([1-7])([SHDC])([)!.,;:? ]|$)/gm;
  const cards = /(^|[ (])([SHDC])([AKQJT2-9])([)!.,;:? ]|$)/gm;

  let value = input;
  let parts = bids.exec(value);
  if (parts) {
    value = value.replace(bids, convertBid);
  }

  parts = cards.exec(value);
  if (parts) {
    value = value.replace(cards, convertCard);
  }

  return value;
}
