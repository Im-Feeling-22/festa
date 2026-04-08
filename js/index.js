function abrirGmail() {
    var destinatario = 'lesilva.andrade0804@gmail.com';
    var mensagem = document.getElementById('mensagem').value;
    var assunto = document.getElementById('assunto').value;

    const url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(destinatario) + 
                "&su=" + encodeURIComponent(assunto) + 
                "&body=" + encodeURIComponent(mensagem);

    window.open(url, "_blank");
    $.toast({
        heading: 'Guia aberta!',
        text: 'Uma guia foi aberta para o envio do email',
        showHideTransition: 'fade',
        icon: 'success',
        bgColor: "#8A2BE2",
        hideAfter: 15000,
        loaderBg: '#87ceeb',
    });
}
document.querySelectorAll('.codigo-colapsado').forEach(bloco => {
  bloco.addEventListener('click', function() {
    this.classList.toggle('expandido');
  });
});