var input1 = $("<input/>");
input1.attr("id", "input1");
input1.attr("style", "number");

var input2 = $("<input/>");
input2.attr("id", "input2");
input2.attr("style", "number");

$("#container").append(input1);
$("#container").append(input2);

var buttonCaculate = $("<button>Tính tổng</button>");
buttonCaculate.addClass("btn btn-text-primary");


buttonCaculate.on("click",() =>{
    console.log("click");
    var a = Numberinput1.val();
    var b = Numberinput2.val();
    var c = a + b;
    answer.text("Kết quả " + c);
    
});
var answer = $(<span></span>).text("Answer:0");
answer.text("Kết quả " + c);

$("#container").append(buttonCaculate);


