const Agendar = () => {
    let data = document.getElementById("data").value
    let estacao = document.getElementById("estacao").value

    if(!data || data == "")
        return alert("A data deve estar preenchida.")

    if(!estacao || estacao == "") 
        return alert("É necessário especificar a estação.")        
    else if (estacao <= 0)
        return alert("É necessário ser um número maior que zero.")    

    alert(`Seu escritório foi agendado com sucesso para o dia ${data}, na estação ${estacao}!`)
}