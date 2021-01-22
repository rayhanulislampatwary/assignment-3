
// 01 : kilometerToMeter

function kilometerToMeter(kilometer){
    var meters = kilometer * 1000;
    return meters;
}
// var result = kilometerToMeter(19);
// console.log(result);

// 02 : budgetCalculator

function budgetCalculator(watch, mobile, laptop){
    var totalWatchPrice = watch * 50;
    var totalMobilePrice = mobile * 100;
    var totalLaptopPrice = laptop * 500;

    var totalPrice = totalWatchPrice + totalMobilePrice + totalLaptopPrice;
    return totalPrice;
}

// var total = budgetCalculator(1, 1, 1);
// console.log(total);

// 03 : hotelCost

function hotelCost(days){
    var totalCost = 0;
    if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var first10days = 10 * 100;
        var remaining = days - 10;
        var second10days = remaining * 80;
        var totalCost = first10days + second10days;
    }
    else{
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remaining = days - 20;
        var after20days = remaining * 50;
        totalCost = first10days + second10days + after20days;
    }
    return totalCost;
}

// var result = hotelCost(214);
// console.log(result);

// 04 : megaFriend
function megaFriend(names){
    var largestName = "";
    for (i = 0; i <= names.length; i++){
        var element = names[i];
        if(largestName.length < element.length ){
            largestName = element;
        }
    }
    return largestName;
}
// var longname = megaFriend(["kajol", "rayhan", "mim"]);
// console.log(longname);