function find(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function main() {
    // Giả sử mảng đã cho là mảng các số nguyên từ 0 đến 99
    let theArray = [];
    for (let i = 0; i < 100; i++) {
        theArray[i] = i;
    }

    let inputValue = parseInt(prompt("Nhập giá trị cần tìm: "));

    let result = find(inputValue, theArray);

    if (result === -1) {
        alert("Không tìm thấy giá trị vừa nhập trong mảng đã cho!");
    } else {
        alert("Tìm thấy giá trị vừa nhập trong mảng đã cho tại vị trí có index=" + result);
    }
}