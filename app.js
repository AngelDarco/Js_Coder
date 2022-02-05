document.addEventListener('DOMContentLoaded',()=>{
    const texto =  document.getElementById('codertxt');
    const button = document.getElementById('coderbtn');
    const result = document.getElementById('result');

    texto.addEventListener('keyup', ev =>{ coder(ev)});
    
})

function coder(ev){
console.log(ev.key);

}