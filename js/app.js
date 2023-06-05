

console.log(1111);

console.log("js")

let num = 1;
console.log(num , "ここにあるよ");

console.log(2 + 3, "計算中");

console.log("2 + 3" ,"どうなる？");

console.log(num + 2);

num = 4;


$(".test").on("click", function () {

  $(this).html(num);

});

const scores = [10,20,30,40,50,60]

console.log(scores);

console.log(scores[2]);

console.log(scores.length);

scores[0]=12;

scores.push(70,80);

console.log(scores);

scores.pop();

console.log(scores);

scores.unshift(100);

console.log(scores);

scores.shift();

console.log(scores);

scores.splice(1,2,25);

console.log(scores);


$(".aaaa").click(function(){
  $(this).html(scores);
})
