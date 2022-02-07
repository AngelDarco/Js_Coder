document.addEventListener('DOMContentLoaded', () => {

    const texto = document.getElementById('codertxt');
    const btncode = document.getElementById('coderbtn');
    const btndecode = document.getElementById('decoderbtn');

    btncode.addEventListener('click', () => { coder(texto.value) });
    btndecode.addEventListener('click', () => { decoder(texto.value) });
    const result = document.getElementById('result');


    const abc = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function coder(code) {

        let decode = code.toUpperCase().split('');
        reset();

        for (let i = 0; i <= decode.length - 1; i++) {
            if (decode[i] == ' ') result.innerHTML += '*';
            for (let x = 0; x <= abc.length - 1; x++) {
                if (abc[x] == decode[i]) {
                    if (abc[x + 3] == undefined) result.innerHTML += abc[x - 34];
                    else result.innerHTML += abc[x + 3];
                }
            }

        }

    }

    function decoder(code) {
        reset();
        let decode = code.toUpperCase().split('');
        for (let i = 0; i <= decode.length - 1; i++) {
            if (decode[i] == '*') result.innerHTML += ' ';
            for (let x = 0; x <= abc.length - 1; x++) {
                if (abc[x] == decode[i]) {
                    if (abc[x - 3] == undefined) result.innerHTML += abc[x + 34];
                    else result.innerHTML += abc[x - 3];
                }
            }
        }
    }

    function reset() {
        result.innerHTML = '';
        texto.value = '';
        array = [];
        contador = 0;
    }
})

