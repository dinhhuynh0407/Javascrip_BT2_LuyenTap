// --- Sử dụng var ---
console.log(hoistingTestVar); // Kết quả: undefined
// Giải thích: var được hoisting, biến được "khai báo" ở đầu nhưng chưa gán giá trị.
var hoistingTestVar = 10;
console.log(hoistingTestVar); // Kết quả: 10

// --- Sử dụng let ---
try {
  console.log(loopCounterLet); // Lỗi: ReferenceError
  // Giải thích: let cũng được hoisting nhưng nằm trong "temporal dead zone" (TDZ),
  // không thể truy cập trước khi khai báo.
} catch (error) {
  console.log("Lỗi với let:", error.message);
}
let loopCounterLet = 20;
console.log(loopCounterLet); // Kết quả: 20

// --- Sử dụng const ---
try {
  console.log(loopCounterConst); // Lỗi: ReferenceError
  // Giải thích: const giống let, cũng bị TDZ, không thể dùng trước khi khai báo.
} catch (error) {
  console.log("Lỗi với const:", error.message);
}
const loopCounterConst = 30;
console.log(loopCounterConst); // Kết quả: 30
