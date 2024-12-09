var ctx1 = document.getElementById('growthChart').getContext('2d');
var growthChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Mercado Geral', 'Sparky'],
        datasets: [{
            label: 'Projeção de Crescimento Anual (%)',
            data: [15, 25],
            backgroundColor: ['#007bff', '#28a745'],
            borderColor: ['#007bff', '#28a745'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) { return value + '%'; }
                }
            }
        }
    }
});

var ctx2 = document.getElementById('marketShareChart').getContext('2d');
var marketShareChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Mercado Geral', 'Sparky'],
        datasets: [{
            label: 'Participação de Mercado (%)',
            data: [5, 8],
            backgroundColor: ['#ff6384', '#36a2eb'],
            borderColor: ['#ff6384', '#36a2eb'],
            borderWidth: 1
        }]
    }
});

var ctx3 = document.getElementById('supportChart').getContext('2d');
var supportChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Taxa de Satisfação'],
        datasets: [{
            label: 'Satisfação com Suporte (%)',
            data: [90],
            backgroundColor: '#ffc107',
            borderColor: '#ffc107',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) { return value + '%'; }
                }
            }
        }
    }
});

function enviaContratoInvestimento() {
    const name = document.getElementById('investidor').value;
    const amount = document.getElementById('qntdInvestimento').value;
    const date = document.getElementById('dataInvestimento').value;

    if (name && amount && date) {
        const modalContrato = bootstrap.Modal.getInstance(document.getElementById('modalContrato'));
        modalContrato.hide();

        document.querySelector('.cta').classList.remove('hidden');
    } else {
        alert('Por favor, preencha todos os campos antes de assinar.');
    }
}