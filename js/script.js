function sizePrice(){
    var selectSize = document.getElementById("pizzaSize").value;
    return parseInt(selectSize);
}

function crustPrice(){
    var selectCrust = document.getElementById("pizzaCrust").value;
    return parseInt(selectCrust);
}

function toppingsPrice(){
    var selectToppings = document.getElementById("pizzaToppings").value;
    return selectToppings;
}

function number(){
    var number = document.getElementById("number1").value;
    return parseInt(number);
}

function calculateTotal(){
    event.preventDefault();
    var total = ((sizePrice() + crustPrice()) * number());
    alert(total);
}


$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var tel = $("input#tel").val();
        var location = $("input#location").val();

        alert("Hi " + name + ". Your order will be delivered to " +  location + " within one hour.The delivery will cost ksh 200/= Thank you for ordering!");
    });

});

$(document).ready(function(){
    $("#checkout").checkout(function(){

        var checkout = (calculateTotal() + 200);
        alert("Your total pay is " + checkout);

    });
});
