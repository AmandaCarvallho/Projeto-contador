function contar() {
    let ini = document.querySelector("input#txt1")
    let fim = document.querySelector("input#txtf")
    let passo = document.querySelector("input#txtp")
    let res = document.querySelector("div#res")

    if (ini.value == 0 || fim.value == 0 || passo.value == 0){
        res.innerHTML = "Impossivel contar!"
        window.alert("[ERRO] Faltam dados")
    } else {
        res.innerHTML = "contando: <br>" 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert("Passo inválido!")
            p = 1
        }
        if (i < f){
            for(let c = i; c <=f; c+=p){
                res.innerHTML += `${c} \u{21e8}`
        }
            
    } else {
        for(let c = i; c>= f; c -=p){
            res.innerHTML += `${c} \u{21e8}`
        }
    }
        res.innerHTML += `\u{1f3c1}`
    }
}