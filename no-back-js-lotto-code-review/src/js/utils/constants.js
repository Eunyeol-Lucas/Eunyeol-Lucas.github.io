export const LOTTO_PRICE = 1000;
export const MONETARY_UNIT = 1;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_NUMBERS_LENGTH = 6;
export const PURCHASED_QUANTITY_MESSAGE = (countOfLotto) =>
  `총 ${countOfLotto}개를 구매하였습니다.`;

export const ALERT_MESSAGE = {
  PURCHASE_AMOUNT_IS_INVALID_AMOUNT: `화폐단위 미만의 자릿수가 포함된 금액입니다.\n${MONETARY_UNIT}원 단위로 입력해주세요`,
  PURCHASE_AMOUNT_IS_LOW: `로또를 구매하기 위해 ${LOTTO_PRICE}원 이상의 금액을 입력해주세요`,
  PURCHASE_AMOUNT_HAS_CHANGE: (change) =>
    `입력된 금액에서 ${change}를 제외한 금액으로 로또를 구매하였습니다.\n거스름돈 ${change}원을 챙겨가세요.`,
};
