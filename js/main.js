const listCep = []

function escopoGlobal() {
   
    const form = document.querySelector(".form-consult")
    form.addEventListener("submit", notReload)

    function notReload(event) {
        event.preventDefault()
    }

    document.querySelector('.btn-consult').addEventListener("click", consultaCep)

    function consultaCep() {
        const cepUser = document.querySelector('#cep-consult')    

        $.ajax({
            url: `https://viacep.com.br/ws/${cepUser.value}/json/`,
            type: "GET",
            success: function (response) {
                    listCep.push({ /* personalidando o objeto*/
                    bairro: response.bairro,
                    cep: response.cep,
                    logradouro: response.logradouro,
                    localidade: response.localidade,
                    complemento: response.complemento,
                    uf: response.uf,
                    ddd: response.ddd
                })
                exibirResultado() // Eu não entendi, pq no escopo da função consultaCep(), sempre
                // o resultado só vinha ao clicka na segunda vez.
            }
        });
        
       
    }
    
    function exibirResultado(){
        const texto = document.querySelector(".resposta")

        texto.innerHTML = ""
       
        for(i = 0; i < listCep.length; i++ ){
               
            texto.innerHTML += `<br> <p> <strong> Bairro:</strong> ${listCep[i].bairro}</p>
            <p> <strong> Cep:</strong> ${listCep[i].cep}</p>
            <p> <strong> Logradouro:</strong> ${listCep[i].logradouro}</p>
            <p> <strong> Complemento:</strong> ${listCep[i].complemento}</p>
            <p> <strong> Localidade:</strong> ${listCep[i].localidade}</p>
            <p> <strong> Uf:</strong> ${listCep[i].uf}</p>
            <p> <strong> DDD:</strong> ${listCep[i].ddd}</p>`                      
        }     
    }    
}         

escopoGlobal()

// PQ O INDEX 0 não aparece, quando é adicionado ao array.