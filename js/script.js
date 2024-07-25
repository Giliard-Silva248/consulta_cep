async function consultaCep(){
    let recebeCep = document.querySelector('#num').value
    let loc = document.querySelector('#localidade')
    let bairro = document.querySelector('#bairro')
    let cep = document.querySelector('#cep')
    let uf = document.querySelector('#uf')
    let ddd = document.querySelector('#ddd')
    let res = document.querySelector('#res')

    try{
        const consulta = await fetch(`http://viacep.com.br/ws/${recebeCep}/json/`);
        const data = await consulta.json()
        console.log(data);
        
            loc.innerHTML = data.localidade
            bairro.innerHTML = data.bairro
            cep.innerHTML = data.cep
            uf.innerHTML = data.uf
            ddd.innerHTML = data.ddd
            res.innerText = 'Consulta realizada com sucesso'
        
        
    } catch(err){
        
            loc.innerHTML =""
            bairro.innerHTML = ""
            cep.innerHTML = ""
            uf.innerHTML = ""
            ddd.innerHTML = ""
            res.innerText ='Campo vazio ou CEP inválido'
            console.log(err);
    }
    
    

}
