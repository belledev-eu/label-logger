import "colors";
import "node:process";

const identifiers = [];

/**
 * Make an identifier.
 * @param {number} _length Identifier length
 * @returns {string}
 */
function makeId(_length) {
  let finalId = "";

  for (let iterations = 0; iterations < _length; iterations++) {
    finalId += Math.floor(Math.random() * 10).toString();
  }

  if (identifiers.includes(finalId)) return makeId();

  return finalId;
}

export default class Logger {
  constructor(_name) {
    this.name = _name;
    this.id = makeId(5);
  }

  /**
   * @param {string} _label
   * @param {any} _data
   */
  info(_label, _data) {
    process.stdout.write(`[${_label.cyan}] ${_data}\n`);
    return;
  }

  /**
   * @param {string} _label
   * @param {any} _data
   */
  debug(_label, _data) {
    process.stdout.write(`[${_label.grey}] ${_data}\n`);
    return;
  }

  /**
   * @param {string} _label
   * @param {any} _data
   */
  warn(_label, _data) {
    process.stdout.write(`[${_label.yellow}] ${String(_data).yellow}\n`);
    return;
  }

  /**
   * @param {string} _label
   * @param {any} _data
   */
  error(_label, _data) {
    process.stdout.write(`[${_label.bgRed}] ${String(_data).red}\n`);
    return;
  }
}
