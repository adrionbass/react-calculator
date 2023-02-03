import Big from "big.js";
import operate from "./operate";
import isNumber from "./isNumber";

export default function operations(state, btnName) {
  if (btnName === "AC") {
    return {
      total: null,
      next: null,
      operator: null,
    };
  }
  if (isNumber(btnName)) {
    if (btnName === "0" && state.next === "0") return { data: "ninguna" };
    if (state.operator) {
      if (state.next) return { next: state.next + btnName };
      return { next: btnName };
    }
    if (state.next) {
      const next = state.next === "0" ? btnName : state.next + btnName;
      return {
        next,
        total: null,
      };
    }
    return {
      next: btnName,
      total: null,
    };
  }
  if (btnName === "%") {
    if (state.operator && state.next) {
      const result = operate(state.total, state.next, state.operator);
      return {
        total: Big(result).div(Big("100")).toString(),
        next: null,
        operator: null,
      };
    }
    if (state.next) {
      return {
        next: Big(state.next).div(Big("100")).toString(),
      };
    }
    return {};
  }
  if (btnName === ".") {
    if (state.next) {
      if (state.next.includes(".")) return {};
      return { next: state.next + "." };
    }
    return { next: "0." };
  }
  if (btnName === "=") {
    if (state.next && state.operator) {
      return {
        total: operate(state.total, state.next, state.operator),
        next: null,
        operator: null,
      };
    } else return {};
  }
  if (btnName === "+/-") {
    if (state.next) return { next: (-1 * parseFloat(state.next)).toString() };
    if (state.total)
      return { total: (-1 * parseFloat(state.total)).toString() };

    return {};
  }
  if (state.operator) {
    return {
      total: operate(state.total, state.next, state.operator),
      next: null,
      operator: btnName,
    };
  }
  if (!state.next) return { operator: btnName };
  return {
    total: state.next,
    next: null,
    operator: btnName,
  };
}
