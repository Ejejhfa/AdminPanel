/* script.js */
document.getElementById('adminForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('playerId').value;
    const type = document.getElementById('actionType').value;
    const reason = document.getElementById('reason').value;
    alert(`Executing ${type.toUpperCase()} on Player ID ${id} for reason: ${reason}`);
    // TODO: Add API integration here
});

// Example dummy data population
window.onload = () => {
    document.getElementById('totalPlayers').innerText = 152;
    document.getElementById('onlinePlayers').innerText = 24;
    document.getElementById('vehiclesCount').innerText = 87;

    const players = [
        {steam: 'CodeMaster', money: 5000, bank: 15000},
        {steam: 'FlowwLegend', money: 300, bank: 1200}
    ];

    players.forEach(player => {
        document.getElementById('playersTable').innerHTML += `<tr><td>${player.steam}</td><td>$${player.money}</td><td>$${player.bank}</td><td><button>View</button></td></tr>`;
    });

    const online = ['CodeMaster', 'FlowwLegend'];
    online.forEach(name => {
        document.getElementById('onlineList').innerHTML += `<li>${name}</li>`;
    });

    const vehicles = ['Lamborghini Aventador', 'BMW M5', 'Tesla Model S'];
    vehicles.forEach(vehicle => {
        document.getElementById('vehiclesList').innerHTML += `<li>${vehicle}</li>`;
    });
};
