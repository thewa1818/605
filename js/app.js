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
for (let i = 1; i <= city.length; i++) {
    oo += `<option id="bb">住所: 東京都${city[i]}</option>`
};

$("#bb").html(oo)

