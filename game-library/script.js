const container = document.getElementById("games-container");


games.forEach(game => {


    container.innerHTML += `

<div class="game-card">

<h2>${game.title}</h2>

<div class="rating">
★★★★★
</div>

<p>🎮 ${game.genre}</p>

<p>🖥️ ${game.platform}</p>

<h3>Favourite Feature</h3>

<p>${game.feature}</p>

<button>
View Details
</button>

</div>

`;


});