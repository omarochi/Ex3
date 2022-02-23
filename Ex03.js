function calcular() {
    var media = (parseFloat(document.getElementById("n1").value) + parseFloat(document.getElementById("n2").value) +
        parseFloat(document.getElementById("n3").value) +
        parseFloat(document.getElementById("n4").value)) / 4

    if (media <= 10 && media >= 9) {
        document.getElementById("resultado").innerHTML = `O aluno tirou A`
    }
    else if (media <= 8.9 && media >= 8) {
        document.getElementById("resultado").innerHTML = `O aluno tirou B`
    }
    else if (media <= 7.9 && media >= 7) {
        document.getElementById("resultado").innerHTML = `O aluno tirou C`
    }
    else if (media <= 6.9 && media >= 0) {
        document.getElementById("resultado").innerHTML = `O aluno tirou D`
    }
    else {
        document.getElementById("resultado").innerHTML = `ERROR`
    }
}