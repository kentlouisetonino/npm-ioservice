import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

export default class IOService {
  // This methid create an instance of the readline interface.
  static instance() {
    return readline.createInterface({ input: stdin, output: stdout });
  }

  // This method check if the binary input is a valid binary numbers.
  static invalidBinaryInput(input: string) {
    if (isNaN(Number(input))) {
      return true;
    }

    const regex = /[2-9]/;

    return regex.test(input);
  }

  // This method check if the decimal input is a valid numbers.
  static invalidDecimalInput(input: string) {
    if (isNaN(Number(input))) {
      return true;
    }

    return false;
  }
}
