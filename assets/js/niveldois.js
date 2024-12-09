function enviarFormularioConfidencialidade() {
    const nome = document.getElementById('nome').value;
    const assinatura = document.getElementById('assinatura').value;
    const data = document.getElementById('data').value;

    if (nome && assinatura && data) {
        const elementoModalConfidencialidade = document.getElementById('modalConfidencialidade');
        const modalConfidencialidade = bootstrap.Modal.getInstance(elementoModalConfidencialidade);
        modalConfidencialidade.hide();

        document.getElementById('mensagemAcesso').style.display = 'block';
        
        document.getElementById('relatoriosDetalhados').classList.remove('hidden');
        document.getElementById('discussoesEstrategicas').classList.remove('hidden');
        document.getElementById('analisesFinanceiras').classList.remove('hidden');
        document.getElementById('botaoCta').classList.remove('hidden');
    } else {
        alert('Por favor, preencha todos os campos antes de assinar.');
    }
}
