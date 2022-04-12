function registerPanel(){
    document.getElementById('separate').style.display = 'none'
    document.getElementById('painel2').style.display = 'none'
    document.getElementById('painel0').style.display = 'flex'
    document.getElementById('painel3').style.display = 'flex'
}
function loginPanel(){
    document.getElementById('painel0').style.display = 'none'
    document.getElementById('painel3').style.display = 'none'
    document.getElementById('separate').style.display = 'flex'
    document.getElementById('painel2').style.display = 'flex'
} 


function formataCPF(cpf){
    const elementoAlvo = cpf
    const cpfAtual = cpf.value   
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    elementoAlvo.value = cpfAtualizado
    }    

function formataCep(cep){
    const elementoAlvo = cep
    const cepAtual = cep.value 
    let cepAtualizado;
    
    cepAtualizado = cepAtual.replace(/(\d{5})/,function( argumento1){

        return argumento1 + '-';
    })
    elementoAlvo.value = cepAtualizado
    }
    
const toBase64 = file => new Promise((resolve, reject)=>{
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})



function registerNewuser(){
    let nickGross = document.getElementById('usernameregister').value
    let nickUser = nickGross.replaceAll(' ','.')

    let emailUser = document.getElementById('emailregister').value

    let cpfGross = document.getElementById('cpfregister').value
    let cpfUser = cpfGross.replace(/\D+/g, '')

    let cepGross = document.getElementById('cepregister').value 
    let cepUser = cepGross.replaceAll('-','')

    let addressGross = document.getElementById('enderegister').value 
    let addressUser = addressGross.replaceAll(' ','.')

    let passwordUser = document.getElementById('passwordregister').value 
    let passwordVerify = document.getElementById('passwordverify').value 

    if(nickGross.length == 0 || emailUser.length == 0 || cpfGross.length == 0 || cepGross.length == 0 || addressGross.length == 0 || passwordUser.length == 0 || passwordVerify == 0){
        /* vai ter mais verificacoes no front, so deu pra codar das 10:40 as 11:57, acordei tarde sem querer, e faltei colocar para guardas as imagens em base64 nas variavel, mas qnd chegar ja vou arrumar*/
    }
}