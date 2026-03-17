let saldo = 200;

const $inputSaque = document.getElementById('valordosaque')
const $displaySaldo = document.getElementById( 'saldo')
const $displayMensagem = document.getElementById ('mensagem')

$displaySaldo .innerText = saldo;

function realizarSaque() {

     const valorasacar = Math.abs (Number($inputSaque.value))

     if (isNaN (valorasacar) = valorasacar < 0) (
         $displayMensagem. innertext = 'valor digitado é invalido'

     if (valorasacar > saldo) 
        $displayMensagem. innerText = 'Não tem saldo'
        return

)

    saldo = saldo - Number(valorasacar) .toFixed(2)
    $displaySaldo .innerText = saldo;

     $displayMensagem. innerText = 'Saque realizado'
     
}