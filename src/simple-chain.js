const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
        Number.isNaN(+position) ||
        position < 1 ||
        position > this.links.length
    ) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links = this.links.filter((_, index) => index + 1 !== position);
    return this;
  },
  reverseChain() {
    this.links = this.links.reverse();
    return this;
  },
  finishChain() {
    const result = this.links.join("~~");
    this.links = [];
    return result;
  },
};

module.exports = {
  chainMaker
};
