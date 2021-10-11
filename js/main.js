const Agendar = () => {
    let errors = [];
    let data = document.getElementById("data").value
    let estacao = document.getElementById("estacao").value
    let errorsList = document.getElementById("errors")
    errorsList.innerText = "";

    if(!data || data == "")
        errors.push("A data deve estar preenchida.")

    let dateTime = new Date(data)
    let currentTime = new Date()
    if (dateTime < currentTime)
        errors.push("A data deve ser à partir de hoje.")


    if(!estacao || estacao == "") 
        errors.push("É necessário especificar a estação.")        
    else if (estacao <= 0)
        errors.push("É necessário ser um número maior que zero.")    

    let fullDate = `${dateTime.getDate() + 1}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`
    if(errors.length < 1){
        let li = document.createElement('li')
        errorsList.innerHTML = `<li style='color: rgba(239, 101, 60, 1); font-weight: bold;'>Agendamento realizado para: ${fullDate}!</li>`
        errorsList.appendChild(li)
    }else{
        for(let i = 0; i < errors.length; i++){
            let li = document.createElement('li')
            li.innerText = errors[i]
            errorsList.appendChild(li)
        }
    }        
}