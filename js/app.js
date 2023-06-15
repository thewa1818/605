

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

inoki[5]=("パワー");

delete inoki[5];

console.log(inoki);


console.log(`元気ですか！${inoki[4]}`);

let aizawa = [
  "かほ",
  "えみこ",
  "ゆり",
  "ロン",
]

console.log(aizawa.length);

aizawa.splice(3,0,"しょうた");

for (let i = 0; i < aizawa.length; i++){
  console.log(`ランキング${i+1}位${aizawa[i]}さん`);
}

//多次元配列

const A = [
  ["a","b","c"],
  ["1","2","3"],
  ["d","e","f"],
  ["4","5","6"],
]

console.table(A);

A[1][0] = "first";

console.table(A);

console.log(A[1][2]);

console.log(A[0][1]+A[2][0]);

let mmm = inoki.concat(aizawa);

console.log(mmm);



const omi = ["大吉","中吉","吉","末吉","凶"];

console.log(omi[1]);

console.log(omi.length);

omi.push ("大凶");

omi.unshift("超大吉");

console.log(omi);

for (let i = 0; i < omi.length; i ++){
  console.log(`結果は${omi[i]}です`);
}

const city = ["渋谷","練馬","六本木","表参道","曙橋","新宿"];

let oo = ''
for (let i = 1; i < city.length; i++) {
    oo += `<option id="tokyo">住所: 東京都${city[i]}</option>`
};

$("#tokyo").html(oo)


const test1=["メロン","いちご","スイカ","みかん","ぶどう"];

$("#btn").on("click",function(){
  for(let i = 0 ; i < test1.length; i++){
    console.log(`好きな食べ物は${test1[i]}です`);
  }
});

// const test1=["メロン","いちご","スイカ","みかん","ぶどう"];

// $("#btn").on("click",function(){
//   test1.forEach(function(){
//     console.log(test1[1]);
//   })
// });


