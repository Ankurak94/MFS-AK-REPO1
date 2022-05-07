var count = 0;

let workarea    = getElem('div','counter','counter');
let decBtn      = getElem('button','btn','dec','-');
let counter_1   = getElem('span','counter','count',count);
let incBtn      = getElem('button','btn','inc','+');

workarea.append(decBtn,counter_1,incBtn);

document.getElementById('counterbody').append(workarea);

document.getElementById('inc').addEventListener('click',()=>{
    count ++;
    document.getElementById('count').innerText=count;
});
document.getElementById('dec').addEventListener('click',()=>{
    count --;
    document.getElementById('count').innerText=count;
});

function getElem(html_tag,class_tag,id_tag,text_value=''){
    let elem = document.createElement(html_tag);
    elem.setAttribute('class',class_tag);
    elem.setAttribute('id',id_tag);
    elem.innerText = text_value;
    return elem;
}