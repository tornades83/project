const mainDiv = document.querySelector('#main');

const containerDiv = document.createElement('div');
containerDiv.id = 'container';

const gamesArea = document.createElement('div');
containerDiv.id = 'gameArea';

const newButton = document.createElement('button');
newButton.id = 'new';
newButton.textContent = 'Catch Me If You Can!';

const audioElement = document.createElement('audio');
audioElement.id = 'machiah';

const conteneurDiv = document.createElement('div');
conteneurDiv.id = 'conteneur';

const ecranSection = document.createElement('section');
ecranSection.className = 'gamepad';

const imageElement = document.createElement('img');
imageElement.src = './assets/img/800px-Chabad_Mashiach_Flag.svg.png';

const habadDiv = document.createElement('div');
habadDiv.id = 'habad';

const habadButton = document.createElement('button');
habadButton.className = 'bus';

const habadButtonImg = document.createElement('img');
habadButtonImg.src = './assets/img/bus habad.jpg';

habadButton.appendChild(habadButtonImg);

habadDiv.appendChild(habadButton);
ecranSection.appendChild(imageElement);
ecranSection.appendChild(habadDiv);

const tableauDiv = document.createElement('div');
tableauDiv.className = 'tableau';

const tableElement = document.createElement('table');
tableElement.id = 'afichage';

const tableHead = document.createElement('thead');

const tableHeadRow = document.createElement('tr');

const tableHeadRank = document.createElement('th');
tableHeadRank.textContent = 'Rang';

const tableHeadName = document.createElement('th');
tableHeadName.textContent = 'Nom';

const tableHeadScore = document.createElement('th');
tableHeadScore.textContent = 'Score';

const tableHeadDate = document.createElement('th');
tableHeadDate.textContent = 'Date';

tableHeadRow.appendChild(tableHeadRank);
tableHeadRow.appendChild(tableHeadName);
tableHeadRow.appendChild(tableHeadScore);
tableHeadRow.appendChild(tableHeadDate);
tableHead.appendChild(tableHeadRow);

const tableBody = document.createElement('tbody');

tableElement.appendChild(tableHead);
tableElement.appendChild(tableBody);

const asideScore = document.createElement('aside');
asideScore.id = 'score';
asideScore.textContent = 'Score';

const asidePoints = document.createElement('aside');
asidePoints.id = 'points';
asidePoints.textContent = 'Points to Next Level';

const asideLevel = document.createElement('aside');
asideLevel.id = 'level';
asideLevel.textContent = 'Level';

const asideMissedClicks = document.createElement('aside');
asideMissedClicks.id = 'missed clicks';
asideMissedClicks.textContent = 'Missed Clicks';

const asideTime = document.createElement('aside');
asideTime.id = 'time';
asideTime.textContent = 'Timer';

const asideHighScores = document.createElement('aside');
asideHighScores.id = 'high scores';
asideHighScores.textContent = 'High scores';

tableauDiv.appendChild(tableElement);
tableauDiv.appendChild(asideScore);
tableauDiv.appendChild(asidePoints);
tableauDiv.appendChild(asideLevel);
tableauDiv.appendChild(asideMissedClicks);
tableauDiv.appendChild(asideTime);
tableauDiv.appendChild(asideHighScores);

conteneurDiv.appendChild(ecranSection);
conteneurDiv.appendChild(tableauDiv);

mainDiv.appendChild(containerDiv);
mainDiv.appendChild(newButton);
mainDiv.appendChild(audioElement);
mainDiv.appendChild(conteneurDiv);

// Définition des variables globales
var score = 0;
var level = 1;
var timeLeft = 60;
var timer;
var scoreElement = document.getElementById("score");
var levelElement = document.getElementById("level");
var timeElement = document.getElementById("time");

// Définition des constantes
const maxLevel = 10;
const maxSpeed = 20;
const accelerationFactor = 1.2;
const pointsToNextLevel = 10;
const initialSpeed = 1;
const initialIntervalTime = 20;
const animationTimeline = 100;


// Récupération des éléments DOM
var playingArea = document.getElementById("playing-area");
var scoreElement = document.getElementById("score");
var levelElement = document.getElementById("level");
var timeElement = document.getElementById("time");
var gameOverText = document.getElementById("game-over-text");
var habad = document.getElementById("habad");

// Fonction pour faire une pause
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction pour faire échapper la barre
function escapeHabad() {
  habad.style.top = Math.random() * (window.innerHeight - habad.offsetHeight) + "px";
  habad.style.left = Math.random() * (window.innerWidth - habad.offsetWidth) + "px";
}

// Fonction pour gérer les clics sur la barre
function clickHabad() {
  score += level * 10;
  updateScores();
  level++;
  if (level > maxLevel) {
    endGame();
  } else {
    updateLevel();
    escapeHabad();
    updateScore();
  }
}

// Fonction qui gère le clic en dehors de la barre
function clickOutsideHabad() {
  if (clicksLeft > 0) {
    clicksLeft--;
    score -= level;
    updateScores();
  }
}

// Fonction pour faire tourner la barre
function rotateHabad() {
  var myCanvas = document.querySelector("canvas");

  var btn = document.querySelector("new");
  btn.addEventListener("click", function(){
     var ctx = myCanvas.getContext("2d");
     ctx.rotate = 
  })
  habad.style.transform = "rotate(" + Math.random() * 360 + "deg)";
}
// Fonction pour gérer la fin du jeu
function endGame() {
  clearInterval(timer);
  isGameOver = true;
  habad.style.display = "none";
  gameOverText.style.display = "block";
  alert("Le temps est écoulé ! Votre score est de : " + score);
}

var myAudio = document.getElementById("new");
let audio = new Audio("./assets/audio");
var file = 1;

function playNextTrack() {
  file ++;
  myAudio.src = './assets/audio' + file + ".mp3";
  myAudio.pause();
  myAudio.play();
}

// Fonction pour jouer l'audio
function playAudio() {
  audio.play();
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Code à exécuter lorsque la page HTML est complètement chargée
  console.log("La page est chargée !");
  // Autres instructions...
  init();
});

// Fonction pour mettre en pause l'audio
function pauseAudio() {
  audio.pause();
}

// Fonction pour initialiser le jeu
function init() {
  // Récupère le bouton "new"
var newBtn = document.getElementById("new");

// Récupère l'élément "habad"
var habad = document.getElementById("habad");

// Ajoute un événement onclick au bouton "new"
newBtn.onclick = function() {
  // Ajoute la classe "level1" à "habad"
  habad.classList.add("level1");
};

  score = 0;
  level = 1;
  time = 60; // Définir le temps de départ à 60 secondes
  playNextTrack();
  showTime(); // Afficher le temps restant
  showScore(); // Afficher le score initial
  showLevel(); // Afficher le niveau initial
  createWords(); // Créer les mots pour le niveau initial
  input.addEventListener("input", startMatch); // Ajouter un événement pour commencer la correspondance des mots lorsque l'utilisateur entre du texte dans l'input
  setInterval(countdown, 1000); // Décompter le temps toutes les secondes
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  var highScoresLink = document.getElementById("high-scores-link");
  if (highScoresLink) {
    highScoresLink.onclick = function () {
      showHighScores(highScores);
    };
  }
  startGame();
}

// Fonction pour démarrer le jeu
function startGame() {
  // Code pour démarrer le jeu
  score = 0;
  time = 60;
  var timeInterval = setInterval(updateTime, 1000);
  isGameOver = false;
  playingArea.onclick = function () {
    console.log("area")
    rotateHabad();
    clickHabad();
    clickOutsideHabad();
    createTarget();
    hitTarget();
     timer = setInterval(updateTimer, 1000);// Démarrer le minuteur
  };
};

// Fonction pour afficher le score
function showScore() {
  scoreElement.innerHTML = "Score : " + score;
}

// Fonction pour afficher le niveau
function showLevel() {
  levelElement.innerHTML = "Niveau : " + level;
}

// Fonction pour afficher le temps restant
function showTime() {
  timeElement.innerHTML = "Temps restant : " + timeLeft + "s";
}

function createWords() {
  // Générer un tableau de mots aléatoires pour le niveau initial
  const words = ['tefilin', 'sidour', 'houmach', 'tania', 'talit'];
  // Mélanger le tableau aléatoirement
  words.sort(() => Math.random() - 0.5);
  // Retourner les premiers mots du tableau
  return words.slice(0, 3);
}

// Fonction pour mettre à jour le score
function updateScore() {
  score++;
showScore();
scoreElement.innerHTML = "Score : " + score;
}

// Fonction pour mettre à jour le niveau
function updateLevel() {
  level++;
  levelElement.innerHTML = "Niveau : " + level;
}

// Définir la variable containerWidth
// let containerWidth = document.getElementById("container")//.offsetWidth;
// var containerHeight = container.offsetHeight;
// let targetSize = 80; // définir la taille de la cible ici
// var top = Math.floor(Math.random() * (containerHeight - targetSize));

function createTarget() {
  var target = document.createElement("div");
  target.classList.add("target");
  container.appendChild(target);

  var containerWidth = container.clientWidth;
  var targetSize = target.offsetWidth;
  var left = Math.floor(Math.random() * (containerWidth - targetSize));
  var top = Math.floor(Math.random() * (containerHeight - targetSize));

  target.style.left = left + "px";
  target.style.top = top + "px";

  target.addEventListener("click", function() {
    target.remove();
    score++;
    scoreDisplay.textContent = score;
  });

  setTimeout(function() {
    if (target.parentNode === container) {
      target.remove();
    }
  }, 1000);
}

// Fonction pour gérer le clic sur la cible
function hitTarget() {
  // Augmenter le score
  score += 10;
  updateScore();

  // Supprimer la cible
  container.removeChild(target);

  // Passer au niveau suivant si le score atteint un multiple de 50
  if (score % 50 == 0) {
    level++;
    updateLevel();
  }
}

// Fonction pour mettre à jour le minuteur
function updateTimer() {
  timeElement.innerHTML = "Temps : " + time;
  var timerElement = document.getElementById("timer");
  time--;
  timeLeft--;
  showTime();
  // timerElement.innerHTML = time;
  if (timeLeft === 0) {
    endGame();
    if (time <= 0) {
    clearInterval(timerInterval);
    gameOver();
  }
  // Diminuer le temps restant
  time--;

  // Afficher le temps restant
  // timerElement.innerHTML = time;

  // Terminer le jeu si le temps est écoulé
  if (time == 0) {
    clearInterval(timer);
    alert("Temps écoulé ! Votre score est de " + score);
  }
} 
};
  // Sélectionner la zone de jeu et la balle
  const gameArea = document.querySelector('#game-area');
  var ball = document.querySelector('#ball');

  // Attendre que la page soit chargée
window.addEventListener('load', () => {
  // Obtenir l'élément gameArea
  const gameArea = document.getElementById('gameArea');

  // Vérifier si l'élément existe
  if (!gameArea) {
    console.error('L\'élément "gameArea" n\'existe pas.');
    return;
  }

  // Obtenir les dimensions de la zone de jeu
  const gameAreaRect = gameArea.getBoundingClientRect();

  // Utiliser gameAreaRect pour continuer avec les opérations suivantes
  // ...
});

  // Ajouter un gestionnaire d'événement pour déplacer le paddle avec

  // // Ajouter un nouvel élément div (la balle) au jeu
  // var ball = document.createElement("div");
  // ball.setAttribute("class", "ball");
  // gameArea.appendChild(ball);

  // Ajouter un événement click sur la balle
  // ball.addEventListener("click", function() {
  //   ball.style.display = "none";
  //   score += 1;
  //   scoreDisplay.innerHTML = "Score: " + score;

    // Si le joueur a cliqué sur un certain nombre de balles, passer au niveau suivant
  //   if (score % 10 === 0) {
  //     level += 1;
  //     levelDisplay.innerHTML = "Level: " + level;
  //     clearInterval(timer);
  //     timer = setInterval(update, 1000 / (level * 2));
  //   }
  // });

// Fonction pour réinitialiser le jeu
function resetGame() {
  score = 0;
  time = 60;
  level = 1;
  habadSpeed = 1000;
  escapeTime = 300;
  document.getElementById('score').innerText = score;
  document.getElementById('time').innerText = time;
  document.getElementById('level').innerText = level
  let score = 0;
  let level = 1;
  let clicksLeft = 10;
  let timeLeft = 60;
  console.log("reset")
}
// Fonction pour arrêter le jeu
function stopGame() {
    // Réactiver le bouton Start Game
    document.getElementById("new").disabled = false;
    
    // Vérifier si le score est dans le top cinq
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length < 5 || score > highScores[4].score) {
      let name = prompt("You made it to the top five! Enter your name:");
      let date = new Date().toLocaleDateString();
      let newScore = { name: name, date: date, score: score };
      let finalScore = score - (10 * (10 - clicksLeft));
  alert('Game over! Your score is ' + finalScore);
  checkHighScore(finalScore);
  console.log("endGame")
      highScores.push(newScore);
      highScores.sort(function(a, b) {
        return b.score - a.score;
      });
      highScores = highScores.slice(0, 5);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      updateHighScores();
    }
  function showHighScores(highScores) {
    // Vérifiez que highScores est un tableau avant de l'utiliser
    if (Array.isArray(highScores)) {
      // Triez le tableau en fonction des scores décroissants
      highScores.sort(function (a, b) {
        console.log("is array")
        return b.score - a.score;
        
      });

      // Affichez les scores triés
      var scoresList = document.getElementById("high-scores-list");
      scoresList.innerHTML = "";
      for (var i = 0; i < highScores.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.innerText = highScores[i].name + " - " + highScores[i].score;
        scoresList.appendChild(scoreItem);
        showHighScores(highScores);
      }
    }
  }
  
  // Arrêt du chronomètre
  clearInterval(timer);

  // Affichage du message de fin de jeu
  var container = document.getElementById("ecran");
  container.innerHTML = "<h1>Game Over</h1>";
  container.innerHTML += "<p>Your score: " + score + "</p>";
  container.innerHTML += "<p>Missed clicks: " + missedClicks + "</p>";
  container.innerHTML += "<button onclick='startGame()'>Play Again</button>";

  // Réinitialisation des variables globales
  resetGame();
  score = 0;
  pointsToNextLevel = 10;
  level = 1;
  missedClicks = 0;
  seconds = 60;
}

// Fonction pour mettre à jour le tableau des cinq meilleurs marqueurs et enregistrer les données dans le local storage
function updateScores() {
  // Récupération des scores existants dans le local storage
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Ajout du score actuel au tableau des scores
  highScores.push({
    score: score,
    level: level,
    time: seconds
  });

  // Tri des scores en ordre décroissant
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Suppression des scores excédant cinq éléments
  highScores.splice(5);

  // Mise à jour de l'affichage des scores
  var table = document.getElementById("high-scores");
  var html = "<tr><th>Rank</th><th>Score</th><th>Level</th><th>Time</th></tr>";
  for (var i = 0; i < highScores.length; i++) {
    html += "<tr><td>" + (i + 1) + "</td><td>" + highScores[i].score + "</td><td>" + highScores[i].level + "</td><td>" + highScores[i].time + "s</td></tr>";
  }
  console.log("updateScore")

// Tri des scores en ordre décroissant
 highScores.sort(function (a, b) {
  return b.score - a.score;
});

// Suppression des scores excédant cinq éléments
highScores.splice(5);

// Enregistrement des scores dans le local storage
localStorage.setItem("highScores", JSON.stringify(highScores));

// Vérification si le score actuel est parmi les cinq meilleurs marqueurs
var isHighScore = false;
for (var i = 0; i < highScores.length; i++) {
  if (score === highScores[i].score && level === highScores[i].level && seconds === highScores[i].time) {
    isHighScore = true;
    break;
  }
}

// Affichage du message si le score est parmi les cinq meilleurs marqueurs
if (isHighScore) {
  alert("Congratulations! You made it to the high scores list!");
}
console.log("checkHighScore")
}

// Fonction pour ajouter un nouveau score dans le tableau des cinq meilleurs marqueurs
function addScoreToTable(scores, score) {
  var length = scores.length;
  var index = -1;
  for (var i = length - 1; i >= 0; i--) {
    if (score > scores[i]) {
      index = i;
    }
  }
  if (index > -1) {
    scores.splice(index, 0, score);
    if (length >= 5) {
      scores.pop();
    }
    localStorage.setItem("highScores", JSON.stringify(scores));
  }
}

// Fonction pour afficher le tableau des cinq meilleurs marqueurs
function showHighScores(scores) {
  var table = "<table><tr><th>Rank</th><th>Score</th></tr>";
  for (var i = 0; i < scores.length; i++) {
    table += "<tr><td>" + (i + 1) + "</td><td>" + scores[i] + "</td></tr>";
  }
  table += "</table>";
  var container = document.getElementById("scores");
  container.innerHTML = "<h1>High Scores</h1>";
  container.innerHTML += table;
  container.innerHTML += "<button onclick='startGame()'>Play Again</button>";
}

// Fonction pour vérifier si le score est suffisant pour être ajouté au tableau des cinq meilleurs marqueurs
function checkHighScore(score) {
  var scores = JSON.parse(localStorage.getItem("highScores")) || [];
  if (scores.length < 5 || score > scores[scores.length - 1]) {
    addScoreToTable(scores, score);
    showHighScores(scores);
  } else {
    alert("Sorry, your score is not high enough to make the high scores list.");
    startGame();
  }
}

// Fonction pour mettre à jour le chronomètre
function updateTime() {
  setTimeout(function () {
    seconds++;
    document.getElementById("time").innerHTML = "Time: " + seconds;
    if (seconds < 1) {
      
    } else {
      stopGame();
    }
  }, 1000);
  console.log("updateTime")
}