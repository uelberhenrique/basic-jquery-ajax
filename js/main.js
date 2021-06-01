
function escopoGlobal() {
    const listCep = []

    const form = document.querySelector(".form-consult")
    form.addEventListener("submit", notReload)

    function notReload(event) {
        event.preventDefault()
    }

    document.querySelector('.btn-consult').addEventListener("click", consultaCep)

    function consultaCep() {
        const cepUser = document.querySelector('#cep-consult')
        const texto = document.querySelector(".resposta")

        if(texto ==''){
            texto.innerHTML = `<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>`
        }

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

                texto.innerHTML = `<table class="h5 table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Cep</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Logradouro</th>
                    <th scope="col">Complemento</th>
                    <th scope="col">Localidade</th>
                    <th scope="col">UF</th>
                    <th scope="col">DDD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${response.cep}</td>
                    <td>${response.bairro}</td>
                    <td>${response.logradouro}</td>
                    <td>${response.complemento}</td>
                    <td>${response.localidade}</td>
                    <td>${response.uf}</td>
                    <td>${response.ddd}</td>
                  </tr>            
                </tbody>
              </table> `

                //exibirResultado() // Eu não entendi, pq no escopo da função consultaCep(), sempre
                // o resultado só vinha ao clicka na segunda vez.
            }
        });
    }

    // function exibirResultado(){
    //     const texto = document.querySelector(".resposta")
    //     const numeroExibicao = 0; // Usado somente para colocar no indice do listCep, mostrando somente o cep digitado. Não estava sendo utilizado.

    //     texto.innerHTML = ""

    //     for(i = 0; i < listCep.length; i++ ){    
    //         texto.innerHTML += `<br> <p> <strong> Bairro:</strong> ${listCep[i].bairro}</p>
    //         <p> <strong> Cep:</strong> ${listCep[i].cep}</p>
    //         <p> <strong> Logradouro:</strong> ${listCep[i].logradouro}</p>
    //         <p> <strong> Complemento:</strong> ${listCep[i].complemento}</p>
    //         <p> <strong> Localidade:</strong> ${listCep[i].localidade}</p>
    //         <p> <strong> Uf:</strong> ${listCep[i].uf}</p>
    //         <p> <strong> DDD:</strong> ${listCep[i].ddd}</p>`                      
    //     }     
    // }    
}

escopoGlobal()

// PQ O INDEX 0 não aparece, quando é adicionado ao array.



// $('#resultad').html(response.nome) = document.getElementById("#resultad").innerHTML = response.nome;