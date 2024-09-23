document.getElementById('joinBtn').addEventListener('click', function() {
    alert('L\'IP du serveur est play.ConflitCraft.fr');
});

// Simulating server statistics update
document.addEventListener('DOMContentLoaded', function() {
    const onlinePlayersElement = document.getElementById('onlinePlayers');
    const totalPlayersElement = document.getElementById('totalPlayers');
    
    if (onlinePlayersElement && totalPlayersElement) {
        onlinePlayersElement.textContent = '32';
        totalPlayersElement.textContent = '1500';
    }
});
