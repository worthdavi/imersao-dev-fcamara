const Agendar = () => {
    let data = document.getElementById("data").value
    let estacao = document.getElementById("estacao").value

    if(!data || data == "")
        return alert("A data deve estar preenchida.")

    let dateTime = new Date(data)
    let currentTime = new Date()
    if (dateTime < currentTime)
        return alert("A data deve ser à partir de hoje.")


    if(!estacao || estacao == "") 
        return alert("É necessário especificar a estação.")        
    else if (estacao <= 0)
        return alert("É necessário ser um número maior que zero.")    

    let fullDate = `${dateTime.getDate() + 1}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`
    alert(`Seu escritório foi agendado com sucesso para o dia ${fullDate}, na estação ${estacao}!`)
}