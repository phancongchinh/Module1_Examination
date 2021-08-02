//giải phương trình bậc nhất: ax + b = 0;
// let a;
// let b;

function main() {
    // getInput();
    solve(5, 8);
}

// function getInput() {
//     a = parseInt(prompt("Nhập hệ số của x: a = ?"));
//     while (isNaN(a)) {
//         a = parseInt(prompt("Không hợp lệ. Nhập lại:"));
//     }
//
//     b = parseInt(prompt("Nhập hệ số tự do: b = ?"));
//     while (isNaN(b)) {
//         b = parseInt(prompt("Không hợp lệ. Nhập lại:"));
//     }
// }

function solve(a, b) {
    let result;
    if (a === 0) {
        if (b === 0) {
            result = `Phương trình ${a}x+${b}=0 có vô số nghiệm!`;
        } else {
            result = `Phương trình ${a}x+${b}=0 vô nghiệm!`;
        }
    } else {
        result = `Phương trình ${a}x+${b}=0 có nghiệm duy nhất: x=${(-b / a).toFixed(2)}`;
    }
    alert(result);
}
