// Khai báo nhiều biến cùng lúc
let productName = "Laptop Dell", price = 1500, quantity = 2;
const DISCOUNT_RATE = 0.1; // hằng số giảm giá 10%

// Tính tổng giá với công thức: price * quantity * (1 - DISCOUNT_RATE)
let totalPrice = price * quantity * (1 - DISCOUNT_RATE);

// In ra console
console.log(
  "Sản phẩm: " + productName +
  ", Số lượng: " + quantity +
  ", Tổng giá: " + totalPrice
);
