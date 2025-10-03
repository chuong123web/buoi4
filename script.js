// Bài 1: Kiểm tra số dương/âm
function bai1(num) {
    if (num > 0) {
        console.log("Số dương");
    } else if (num < 0) {
        console.log("Số âm");
    } else {
        console.log("Số zero");
    }
}
bai1(5);
bai1(-3);
bai1(0);
// Bài 2: Phân loại tuổi
function bai2(age) {
    if (age < 18) {
        console.log("Trẻ em");
    } else if (age <= 30) {
        console.log("Thanh niên");
    } else if (age <= 50) {
        console.log("Trung niên");
    } else {
        console.log("Cao niên");
    }
}
bai2(25);
// Bài 3: Kiểm tra năm nhuận
function bai3(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Năm nhuận");
    } else {
        console.log("Không nhuận");
    }
}
bai3(2024);
bai3(1900);
// Bài 4: Máy tính đơn giản
function bai4(a, b, op) {
    let result;
    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Không thể chia cho 0";
            }
            break;
        default:
            result = "Toán tử không hợp lệ";
    }
    console.log(result);
}
bai4(5, 3, "+");
bai4(10, 0, "/");
// Bài 5: Xếp hạng điểm
function bai5(score) {
    if (score >= 90 && score <= 100) {
        console.log("Giỏi");
    } else if (score >= 70) {
        console.log("Khá");
    } else if (score >= 50) {
        console.log("Trung bình");
    } else {
        console.log("Yếu");
    }
}
bai5(85);
// Bài 6: Kiểm tra chẵn/lẻ
function bai6(num) {
    let result = (num % 2 === 0) ? "Chẵn" : "Lẻ";
    console.log(result);
}
bai6(4);

// Bài 7: Quyết định thời tiết
function bai7(temp, rain) {
    if (rain) {
        console.log("Ở nhà");
    } else {
        if (temp > 25) {
            console.log("Đi chơi");
        } else {
            console.log("Đi dạo nhẹ");
        }
    }
}
bai7(28, false);
bai7(20, true);
// Bài 8: Menu lựa chọn ngày
function bai8(day) {
    switch (day) {
        case 1: console.log("Thứ 2"); break;
        case 2: console.log("Thứ 3"); break;
        case 3: console.log("Thứ 4"); break;
        case 4: console.log("Thứ 5"); break;
        case 5: console.log("Thứ 6"); break;
        case 6:
        case 7:
            console.log("Nghỉ ngơi"); break;
        default:
            console.log("Không hợp lệ");
    }
}
bai8(6);
// Bài 9: Kiểm tra quyền truy cập
function bai9(age, role) {
    if (role === "admin") {
        console.log("Được truy cập");
    } else if (role === "user" && age >= 18) {
        console.log("Được truy cập");
    } else {
        console.log("Không được truy cập");
    }
}
bai9(20, "user");
bai9(15, "guest");
// Bài 10: Chuyển đổi đơn vị
function bai10(value, unit) {
    switch (unit) {
        case "celsius":
            if (value > -273) {
                console.log(`${(value * 9 / 5) + 32} Fahrenheit`);
            } else {
                console.log("Nhiệt độ không hợp lệ");
            }
            break;
        case "fahrenheit":
            if (value > -459) {
                console.log(`${((value - 32) * 5 / 9).toFixed(2)} Celsius`);
            } else {
                console.log("Nhiệt độ không hợp lệ");
            }
            break;
        default:
            console.log("Đơn vị không hợp lệ");
    }
}
bai10(100, "celsius");
bai10(32, "fahrenheit");
