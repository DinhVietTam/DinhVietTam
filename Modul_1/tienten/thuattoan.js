let amount;
let fromcurrency;
let tocurrency;
let result;

function changeMoney()
{
    amount = document.getElementById("amount").value;
    fromcurrency = document.getElementById("from_currency").value;
    tocurrency = document.getElementById("to_currency").value;
    if(amount == "" ){
        alert("vui lòng nhập số tiền cần chuyển đổi")
    }
    else {
        if(fromcurrency == "vietnam" && tocurrency == "usd") {
            result = amount/23000;
            document.getElementById("ketqua").innerHTML = result;
        }
        else if(fromcurrency == "usd" && tocurrency == "vietnam"){
            result = amount*23000   ;
            document.getElementById("ketqua").innerHTML = result;
        }
        else{
            alert("vui lòng kiểm tra lại");
        }
    }
}