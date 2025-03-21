function mostrarRotina(rotina) {
    const rotinas = document.querySelectorAll('.rotina');
    rotinas.forEach(function(rotinaElemento) {
        rotinaElemento.style.display = 'none';
    });

    const rotinaSelecionada = document.getElementById(rotina);
    if (rotinaSelecionada) {
        rotinaSelecionada.style.display = 'block';
    }
}
function playAudio() {
    var audio = document.getElementById('perfil-audio');
    audio.play();
}