var count = 0;
// var counter = document.createElement(div);
// counter.setAttribute('id','counter')
// counter.setAttribute('class','counter')
// let decBtn = document.createElement('button');
// decBtn.innerText = '-';
// decBtn.setAttribute('id','dec');
// decBtn.setAttribute('class','btn');
// let addBtn = document.createElement('button');
// addBtn.innerText = '+';
// addBtn.setAttribute('id','inc');
// addBtn.setAttribute('class','btn');
// let countText = document.createElement('span');
// countText.innerText = count;
// countText.setAttribute('id','count');
// countText.setAttribute('class','count');


// counter.append

var counterbody = document.createElement('div');
let decBtn = document.createElement('button')
decBtn.setAttribute('id','dec')
decBtn.innerText = '-';
let incBtn = document.createElement('button')
incBtn.setAttribute('id','inc')
incBtn.innerText = '+';
let counter_1 = document.createElement('span')
counter_1.setAttribute('id','count')
counter_1.innerText = count;
counterbody.append(decBtn,counter_1,incBtn);
// document.getElementById('inc').addEventListener('click',()=>{
//     count ++;
//     document.getElementById('count').innerText=count;
// });
// document.getElementById('dec').addEventListener('click',()=>{
//     count --;
//     document.getElementById('count').innerText=count;
// });