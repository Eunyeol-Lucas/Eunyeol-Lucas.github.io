import { getRandomNumber } from "../utils/utils.js";
import {
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from "../utils/constants.js";

export default class LottoTicket {
  constructor() {
    this.numbers = this.createLottoNumbers().sort((a, b) => a - b);
  }

  createLottoNumbers(array = []) {
    const number = getRandomNumber(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER);
    if (array.length >= LOTTO_NUMBERS_LENGTH) return array;

    if (!array.includes(number)) {
      array.push(number);
    }

    return this.createLottoNumbers(array);
  }
}
