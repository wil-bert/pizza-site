function sizePrice(){
    var selectSize = document.getElementById("pizzaSize").value;
    return parseInt(selectSize);
}

function crustPrice(){
    var number = document.getElementById("number1").value;
    return parseInt(number);
}

function number(){
    var selectCrust = document.getElementById("pizzaCrust").value;
    return parseInt(selectCrust);
}

function calulateTotal(){
    event.preventDefault();

}


$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var tel = $("input#tel").val();
        var location = $("input#location").val();

        alert("Hi " + name + ". Your order will be delivered to " +  location + " within one hour.The delivery will cost ksh 200/= Thank you for ordering!");
    });

});
