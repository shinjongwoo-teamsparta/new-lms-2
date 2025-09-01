/**
 * 덧셈 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a와 b의 합
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 뺄셈 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a에서 b를 뺀 값
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 곱셈 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a와 b의 곱
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 나눗셈 함수
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a를 b로 나눈 값
 * @throws Error 0으로 나누려 할 때
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('0으로 나눌 수 없습니다.');
  }
  return a / b;
}

export function pow(a: number, b: number): number {
  return Math.pow(a, b);
}

/**
 * 모든 사칙연산을 포함하는 객체
 */
export const MathUtils = {
  add,
  subtract,
  multiply,
  divide,
  pow,
};

// 기본 내보내기도 제공
export default MathUtils;