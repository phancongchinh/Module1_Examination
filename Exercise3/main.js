function countVowel(str) {
    let vowels = ['a', 'o', 'e', 'u', 'i', 'A', 'O', 'E', 'U', 'I']
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}

function main() {
    let inputString = prompt("Nhập vào một chuỗi không dấu:");
    let result = countVowel(inputString);
    alert("Có " + result + " nguyên âm trong chuỗi vừa nhập!");
}