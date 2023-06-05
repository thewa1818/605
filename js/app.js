

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

//配列

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

//連想配列

let m={ name:"相澤",age:23};

console.log(m.name);
console.log(m.age);

const inoki = ["いち","に","さん","だーー！！"];

console.log(inoki);

console.log(inoki[2]);

inoki.push("元気があればなんでもできる");

console.log(inoki);

console.log(`元気ですか！${inoki[4]}`);

let aizawa = [
  "かほ",
  "えみこ",
  "ゆり",
  "ロン",
]

console.log(aizawa.length);

for (let i = 0; i < aizawa.length; i++){
  console.log(`ランキング${i+1}位${aizawa[i]}さん`);
}