// 1. 取得所有可選區域 (還有票的區域)
// 2. 從期望區域關鍵字中，依序找出有票的區域並點擊

// 設定想要的區域關鍵字 (越上面越優先)
// 建議找獨特的文字作為關鍵字，如果想要用完整的名稱作為關鍵字，要注意文字間或文末的空白，例："黃2C區2880 ", "紅2E區  2880"
const EXPECT_AREA_KEYWORDS = [
  "121",
  "105",
  "213",
  "214",
  "212",
  "215",
  "211",
  "217",
  "209",
  "220",
  "206",
  "221",
  "205",
  "314",
  "304",
  "315",
  "303",
  "316",
  "302",
  "409",
  "410",
  "408",
  "411",
  "407",
  "412",
  "406",
  "413",
  "405",
  "414",
  "404",
  "415",
  "403",
  "416",
  "402",
  "509",
  "510",
  "508",
  "511",
  "507",
  "512",
  "506",
  "513",
  "505",
  "514",
  "504",
];

const REMAIN = 30; // 設定剩餘數量的最低標準
// 取得所有可選區域 (還有票的區域)
const areaLinks = document.querySelectorAll(
  "ul.area-list li[class*=select_form_] a"
);

// // NOTE: 版本1 - 依序找出有票的區域並點擊，不管剩餘數量
const areaLinksArray = Array.from(areaLinks);
for (const keyword of EXPECT_AREA_KEYWORDS) {
  const target = areaLinksArray.find((a) => a.textContent.includes(keyword));
  if (target) {
    target.click();
    break;
  }
}

// // NOTE: 版本2 - 按照期望區域關鍵字順序，找出有票且剩餘數量大於定額的區域並點擊
// const areaLinksArray = Array.from(areaLinks);
// for (const keyword of EXPECT_AREA_KEYWORDS) {
//   const target = areaLinksArray.find(
//     (a) => a.textContent.includes(keyword) && isAbleToBuy(a)
//   );
//   if (target) {
//     target.click();
//     break;
//   }
// }

// // 檢查區域剩餘數量是否大於定額 (熱賣中也算可購買)
// function isAbleToBuy(a) {
//   const font = a.querySelector("font");
//   if (!font) return false;

//   const text = font.textContent;
//   if (text.includes("熱賣中")) return true;

//   const inventories = Number(text.split(" ")[1]);
//   if (inventories >= REMAIN) return true;

//   // 格式有變化在用 match
//   // const match = text.match(/剩餘\s*(\d+)/);
//   // if (match && Number(match[1]) >= REMAIN) return true;
//   return false;
// }
