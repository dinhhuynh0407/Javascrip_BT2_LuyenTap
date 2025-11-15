let studentName = "Nguyen Van A";   // tên học sinh (string)
let birthYear = 2005;               // năm sinh (number)
let gender = "Nam";                 // giới tính (string)
const CURRENT_YEAR = 2025;          // hằng số cho năm hiện tại

// Tính tuổi
let age = CURRENT_YEAR - birthYear;

// In ra console
console.log(
  "Tên: " + studentName +
  ", Năm sinh: " + birthYear +
  ", Giới tính: " + gender +
  ", Tuổi: " + age
);