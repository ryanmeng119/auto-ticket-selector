// 目標時間
// NOTE: 可以做一個設定的 UI 讓使用者輸入
// 如果一天中有不同時段，則建議從 documnet 上取得完整的時間字串來用 (因為有些空白會有兩格，不建議直接從畫面複製)
const TARGET_DATE = "2025/11/15";

// 目標 data-key
const dataKey = 20150;

// TODO: 設定中午 12 點自動重新整理頁面

// NOTE: 方案 1. 直接用 data-key 找到特定 row button 並點擊
// 取得特定 data-key row 的訂購 button
const rowButton = document.querySelector(
  `tr.gridc.fcTxt[data-key="${dataKey}"] button`
);
rowButton?.click();

// NOTE: 方案 2. 找到特定日期的 row 並點擊立即訂購按鈕
// const targetRow = document.querySelectorAll("tr.gridc.fcTxt");
// for (const row of targetRow) {
//   const dateContent = row.children[0].textContent;
//   if (dateContent.includes(TARGET_DATE)) {
//     const button = row.querySelector("button");
//     if (button && button.textContent.includes("立即訂購")) {
//       button.click();
//       break;
//     }
//   }
// }
