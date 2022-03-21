import { PURCHASED_QUANTITY_MESSAGE } from "../utils/constants.js";
import { $, $$ } from "../utils/DOM.js";
export default class PurchasedLotto {
  constructor({ lottoTickets }) {
    this.$purchasedLottoSection = $(".purchased-lotto-section");
    this.$lottoTicketContainer = $(".lotto-ticket-container");
    this.$purchasedLottoLabel = $(".purchased-lotto-label");
    this.$lottoNumbersToggleButton = $(".lotto-numbers-toggle-button");
    this.$lastWonLottoNumbersForm = $("#input-lotto-numbers");
    this.lottoTickets = lottoTickets;

    this.initEventListener();
    this.render();
  }
  initEventListener() {
    $(".switch").addEventListener("click", (e) =>
      this.onToggleShowingNumbers(e)
    );
    this.$lottoNumbersToggleButton.checked = false;
  }

  onToggleShowingNumbers({ target }) {
    if (target.type === "checkbox") {
      target.checked ? this.showNumbers() : this.hideNumbers();
    }
  }
  showNumbers() {
    $$(".lotto-numbers").forEach(($lottoNumbers) =>
      $lottoNumbers.classList.remove("d-none")
    );
  }

  hideNumbers() {
    this.$lottoTicketContainer.classList.remove("flex-col");
    $$(".lotto-numbers").forEach(($lottoNumbers) =>
      $lottoNumbers.classList.add("d-none")
    );
  }

  createLottoTicketHTML(lottoTicket) {
    return `
    <li class="mx-1 text-4xl d-flex items-center">
   🎟️
      <span class="text-xl ml-5 d-none lotto-numbers">
        ${lottoTicket.numbers.join(", ")}
      </span>
    </li>`;
  }

  render() {
    const countOfLotto = this.lottoTickets.length;

    if (!countOfLotto) {
      return;
    }

    this.$purchasedLottoSection.classList.remove("d-none");
    this.$lastWonLottoNumbersForm.classList.remove("d-none");
    this.$purchasedLottoLabel.innerHTML =
      PURCHASED_QUANTITY_MESSAGE(countOfLotto);
    this.$lottoTicketContainer.innerHTML = this.lottoTickets
      .map(this.createLottoTicketHTML)
      .join("");

    if (this.$lottoNumbersToggleButton.checked) {
      this.showNumbers();
    }
  }

  setState({ lottoTickets }) {
    this.lottoTickets = lottoTickets;
    this.render();
  }
}
