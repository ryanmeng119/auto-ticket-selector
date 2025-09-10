Object.defineProperty(window, "confirm", {
  value: () => true,
  writable: false,
  configurable: false,
});
// 需要驗證的資訊
const VERIFY = "540805";
// 友善閱讀版
const form = document.getElementById("form-ticket-verify");
const checkInput = form.querySelector('input[name="checkCode"]');
checkInput.value = VERIFY;

const submitButton = form.querySelector('button[type="submit"]');
submitButton.click();

// 簡潔版
// const form = document.getElementById("form-ticket-verify");
// form.querySelector('input[name="checkCode"]')?.value = VERIFY;
// form.querySelector('button[type="submit"]')?.click();
