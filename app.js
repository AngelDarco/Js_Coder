document.addEventListener('DOMContentLoaded', () => {

    const texto = document.getElementById('codertxt');
    const button = document.getElementById('coderbtn');
    let array = [];
    let contador = 0;

    texto.addEventListener('keyup', (key) => { keysi(key) });
    button.addEventListener('click', () => { coder(array) });
    const result = document.getElementById('result');


    function keysi(k){
        array[contador] = k.key;
        contador++;
    }


    function coder(codetxt) {
        const abc = ['0','1','2','3','4','5','6','7','8','9',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        reset();

        for (let i = 0; i <= codetxt.length ; i++){
            for(let x = 0; x <= abc.length-1 ; x++){
                if(abc[x]==codetxt[i])
                    if(abc[x+3]== undefined) result.value += abc[x-33]; 
                        else result.value += abc[x+3];
                }

        }
        



        

        
    }


    function reset(){
        result.value = '';
        texto.value = '';
        array = [];
        contador = 0;        
    }
})

