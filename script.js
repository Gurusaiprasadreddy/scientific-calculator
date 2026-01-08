let display = document.getElementById("display");

function append(value) {
    display.value += value;
}



function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expr = display.value.toLowerCase().trim();

    try {
        expr = expr.replace(/pi/g, Math.PI);

        expr = expr.replace(
            /(sin|cos|tan|ln|log|sqrt)\s*(\d+(\.\d+)?)/g,
            "$1($2)"
        );

        expr = expr.replace(/sin\(([^)]+)\)/g, "Math.sin(($1)*Math.PI/180)");
        expr = expr.replace(/cos\(([^)]+)\)/g, "Math.cos(($1)*Math.PI/180)");
        expr = expr.replace(/tan\(([^)]+)\)/g, "Math.tan(($1)*Math.PI/180)");
        expr = expr.replace(/ln\(([^)]+)\)/g, "Math.log($1)");
        expr = expr.replace(/log\(([^)]+)\)/g, "Math.log10($1)");
        expr = expr.replace(/sqrt\(([^)]+)\)/g, "Math.sqrt($1)");
        expr = expr.replace(
            /(\d+(\.\d+)?)\s*\^\s*(\d+(\.\d+)?)/g,
            "Math.pow($1,$3)"
        );

        display.value = eval(expr);

    } catch {
        display.value = "Error";
    }
}


function scientific() {
    let input = display.value.trim().toLowerCase();
    let parts = input.split(" ");

    if (parts.length !== 2) {
        display.value = "Invalid Format";
        return;
    }

    let op = parts[0];
    let value = parseFloat(parts[1]);

    if (isNaN(value)) {
        display.value = "Invalid Number";
        return;
    }

    let radians = value * (Math.PI / 180);

    if (op === "sin") display.value = Math.sin(radians);
    else if (op === "cos") display.value = Math.cos(radians);
    else if (op === "tan") display.value = Math.tan(radians);
    else if (op === "sqrt") display.value = Math.sqrt(value);
    else display.value = "Invalid Function";
}



/* STRING OPERATIONS */

function reverseString() {
    let str = stringInput.value;
    stringResult.innerText = "Reversed: " + str.split("").reverse().join("");
}

function toUpper() {
    stringResult.innerText = "Uppercase: " + stringInput.value.toUpperCase();
}

function toLower() {
    stringResult.innerText = "Lowercase: " + stringInput.value.toLowerCase();
}

function countChars() {
    stringResult.innerText = "Length: " + stringInput.value.length;
}

function wordCount() {
    let str = stringInput.value.trim();
    let count = str === "" ? 0 : str.split(/\s+/).length;
    stringResult.innerText = "Word Count: " + count;
}

function checkPalindrome() {
    let str = stringInput.value.replace(/\s+/g, "").toLowerCase();
    let rev = str.split("").reverse().join("");
    stringResult.innerText =
        str && str === rev ? "Palindrome ✅" : "Not a Palindrome ❌";
}

function firstChar() {
    stringResult.innerText =
        stringInput.value ? "First Char: " + stringInput.value[0] : "Empty String";
}

function lastChar() {
    let s = stringInput.value;
    stringResult.innerText =
        s ? "Last Char: " + s[s.length - 1] : "Empty String";
}

function removeSpaces() {
    stringResult.innerText =
        "Without Spaces: " + stringInput.value.replace(/\s+/g, "");
}

function capitalizeWords() {
    let result = stringInput.value
        .toLowerCase()
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    stringResult.innerText = "Capitalized: " + result;
}


function charFrequency() {
    let str = stringInput.value;
    let freq = {};
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    stringResult.innerText = "Frequency: " + JSON.stringify(freq);
}

function removeSpecialChars() {
    let result = stringInput.value.replace(/[^a-zA-Z0-9 ]/g, "");
    stringResult.innerText = "Cleaned: " + result;
}

function reverseWords() {
    let result = stringInput.value.split(" ").reverse().join(" ");
    stringResult.innerText = "Reversed Words: " + result;
}

function repeatString() {
    stringResult.innerText =
        "Repeated: " + stringInput.value.repeat(2);
}


function stringStatistics() {
    let str = stringInput.value;

    let chars = str.length;
    let words = str.trim() ? str.trim().split(/\s+/).length : 0;
    let vowels = (str.match(/[aeiouAEIOU]/g) || []).length;
    let consonants = (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    let spaces = (str.match(/\s/g) || []).length;

    stringResult.innerText =
        `Statistics →Characters: ${chars},Words: ${words},Vowels: ${vowels},Consonants: ${consonants},Spaces: ${spaces}`;
}
function concatenation() {
    let s1 = document.getElementById("stringInput").value;
    let s2 = document.getElementById("stringInput2").value;

    document.getElementById("stringResult").innerText =
        "Concatenated: " + s1 + " " + s2;

}

