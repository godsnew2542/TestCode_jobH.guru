// run =>>> node job.js

let number = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
let matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let matrixB = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

// 1
console.log(
    "1. แบบสำเร็จรูป => ",
    Math.max(...number),
    "\nเขียน Function เอง => ",
    FindMaxValue(number),
    "\n"
);

// 2
console.log(
    "2. แบบสำเร็จรูป => ",
    Math.min(...number),
    "\nเขียน Function เอง => ",
    FindMinValue(number),
    "\n"
);

// 3
console.log(
    "3. แบบสำเร็จรูป => ",
    number.sort((a, b) => a - b),
    "\nเขียน Function เอง => ",
    OrderByAsc(number),
    "\n"
);

// 4
let Desc = OrderByDesc(number);
console.log(
    "4. ",
    number.sort((a, b) => b - a),
    "\nเขียน Function เอง => ",
    Desc,
    "\n"
);

// 5
console.log("5. ", findPrime(500), "จำนวน", findPrime(500).length, "ตัว", "\n");

// 6
let num = 5;
answer = factorial(num);
console.log("6. รับค่า", num, "ผลลัพธ์คือ", answer, "\n");

// 7
let a = 3;
let b = 2;
let c = factorial(a) + factorial(b);
let _c = factorial(c);
console.log("7. ", _c, "\n");

// 8
let binaryNumeralSystem_2 = "0111";
console.log("8. ", parseInt(binaryNumeralSystem_2, 2), "\n");

// 9
let binaryNumeralSystem_10 = 30;
console.log("9. ", binaryNumeralSystem_10.toString(2), "\n");

// 10
console.log("10. ", matrix(matrixA) + matrix(matrixB), "\n");

// 11
let n = 5;
n = SetNewNumber(n);
let string = "";

// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < (n - i) * 2 - 1; k++) {
        if (k == 0) {
            string += "*";
        } else if (k + 1 == (n - i) * 2 - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";
}

// pyramid pattern
for (let i = 2; i <= n; i++) {
    // printing spaces
    for (let j = n; j > i; j--) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        if (k == 0) {
            string += "*";
        } else if (k + 1 == i * 2 - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(
    "11. ปล.ไม่สามารถแสดงเลขที่ <2 และไม่สามารถแสดงได้ถูกต้องเมื่อเป็นเลขคึ่"
);
console.log(string, "\n");

function FindMaxValue(array) {
    let data = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > data) {
            data = element;
        }
    }
    return data;
}

function FindMinValue(array) {
    let data = 1000000000;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < data) {
            data = element;
        }
    }
    return data;
}

function OrderByDesc(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        for (let i = 0; i < array.length; i++) {
            if (newArray.length < 1) {
                newArray.push(element);
                break;
            } else {
                let MaxValue = FindMaxValue(newArray);
                if (MaxValue > element) {
                    newArray = SetNewArrayDsec(newArray, element);
                }
                if (MaxValue < element) {
                    newArray.unshift(element);
                }
                break;
            }
        }
    }
    return newArray;
}

function SetNewArrayDsec(newArray, value) {
    let result = [];
    let data = [];
    let index = 0;

    for (let x = 0; x < newArray.length; x++) {
        let array = newArray[x];
        if (value > array) {
            data.push(array);
        }
    }

    index = newArray.length - data.length;

    for (let x = 0; x < newArray.length; x++) {
        let array = newArray[x];
        let indexOf = index;
        if (indexOf == x) {
            result.push(value);
            result.push(array);
        } else {
            result.push(array);
        }
    }
    return result;
}

function OrderByAsc(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        for (let i = 0; i < array.length; i++) {
            if (newArray.length < 1) {
                newArray.push(element);
                break;
            } else {
                let MaxValue = FindMaxValue(newArray);

                if (MaxValue > element) {
                    newArray = SetNewArrayAsc(newArray, element);
                }
                if (MaxValue < element) {
                    newArray.push(element);
                }
                break;
            }
        }
    }
    return newArray;
}

function SetNewArrayAsc(newArray, value) {
    let result = [];
    let data = [];
    let index = 2;
    for (let x = 0; x < newArray.length; x++) {
        let array = newArray[x];
        if (value < array) {
            data.push(array);
        }
    }

    index = index + (data.length - 1);

    for (let x = 0; x < newArray.length; x++) {
        let array = newArray[x];
        let indexOf = newArray.length - index;
        if (indexOf == x) {
            result.push(array);
            result.push(value);
        } else {
            result.push(array);
        }
    }
    return result;
}

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

function findPrime(n) {
    const primes = [];
    loop1: for (let j = 0; j < n; j++) {
        loop2: for (let i = 2; i < j; i++) {
            if (j % i === 0) {
                continue loop1;
            }
        }
        if (j > 1) primes.push(j);
    }
    return primes;
}

function matrix(matrix) {
    let result = 0;
    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];
        for (let i = 0; i < element.length; i++) {
            const ele = element[i];
            result = ele + result;
        }
    }
    return result;
}

function SetNewNumber(n) {
    let data = `${n / 2}`;
    let check = data.split(".");
    let center = 0;
    if (parseInt(check[0]) != 0) {
        center = parseInt(check[0]);
        if (check.length == 2) {
            ++center;
        }
    }
    return center;
}