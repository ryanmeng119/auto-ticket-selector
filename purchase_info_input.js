// 購票數量 (0 ~ 4)
const WANT_TO_BUY = 4

const form = document.getElementById('form-ticket-ticket')
const amountSelection = form.querySelector("select.form-select.mobile-select");
const agreeCheckbox = document.getElementById('TicketForm_agree')
const verifyCodeInput = document.getElementById('TicketForm_verifyCode')

// 防止選到超過上限的數量
// const maxOption = Math.max(...Array.from(amountSelection.options).map(option=> Number(option.value)));
// amountSelection.value = Math.min(WANT_TO_BUY, maxOption);

amountSelection.value = WANT_TO_BUY
agreeCheckbox.checked = true

setTimeout(() => {
  verifyCodeInput.focus()
}, 100)

verifyCodeInput.addEventListener('input', function () {
  if (verifyCodeInput.value.length === 4) {
    form.submit()
  }
})
