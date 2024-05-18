document.addEventListener('DOMContentLoaded', function() {
    const selectAllButton = document.getElementById('selectAll');
    const bombButton = document.getElementById('bombButton');
    const messageInput = document.getElementById('messageInput');
    const intervalInput = document.getElementById('intervalInput');

    selectAllButton.addEventListener('click', function() {
        // Selecionar todas as integrações do servidor e enviar mensagem nelas
        alert('Funcionalidade de selecionar todos ainda não implementada.');
    });

    bombButton.addEventListener('click', function() {
        const message = messageInput.value;
        const interval = parseInt(intervalInput.value);

        if (!message || !interval || interval < 1) {
            alert('Por favor, preencha a mensagem e o intervalo corretamente.');
            return;
        }

        // Função para enviar mensagem repetidamente com intervalo
        const sendMessages = setInterval(function() {
            // Enviar a mensagem
            alert('Mensagem enviada: ' + message);
        }, interval);

        // Parar de enviar mensagens após 30 segundos (30000 milissegundos)
        setTimeout(function() {
            clearInterval(sendMessages);
            alert('Bomba de mensagens parada.');
        }, 30000); // Ajuste o tempo conforme necessário
    });
});
