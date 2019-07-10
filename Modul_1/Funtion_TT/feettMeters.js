let num;
let fromcurrency;
let tocurrency;
let result;

function change() {
    num = document.getElementById("num").value;
    fromcurrency = document.getElementById("from_currency").value;
    tocurrency = document.getElementById("to_currency").value;
    if (num == "") {
        alert("vui lòng nhập số cần chuyển đổi")
    }
    else {
        if (fromcurrency == "feet" && tocurrency == "meter") {
            result = 0.305 * num;
            document.getElementById("ketqua").innerHTML = result;
        }
        else if (fromcurrency == "meter" && tocurrency == "feet") {
            result = 3.279 * num;
            document.getElementById("ketqua").innerHTML = result;
        }
        else {
            alert("vui lòng kiểm tra lại");
        }
    }
}