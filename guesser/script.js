// Mini Akinator logic (HTML + JavaScript)
// Save as script.js and open index.html in your browser.

// --- Small dataset (change or expand) ---
const players = [
  { name: "Lionel Messi", club: "Inter Miami", position: "forward", nationality: "Argentina" },
  { name: "Cristiano Ronaldo", club: "Al Nassr", position: "forward", nationality: "Portugal" },
  { name: "Kylian Mbappé", club: "Paris Saint-Germain", position: "forward", nationality: "France" },
  { name: "Luka Modrić", club: "Real Madrid", position: "midfielder", nationality: "Croatia" },
  { name: "Virgil van Dijk", club: "Liverpool", position: "defender", nationality: "Netherlands" },
  { name: "Kevin De Bruyne", club: "Manchester City", position: "midfielder", nationality: "Belgium" },
  { name: "Erling Haaland", club: "Manchester City", position: "forward", nationality: "Norway" },
  { name: "Sergio Ramos", club: "Sevilla", position: "defender", nationality: "Spain" },
  { name: "Robert Lewandowski", club: "Barcelona", position: "forward", nationality: "Poland" },
  { name: "Neymar Jr", club: "Al Hilal", position: "forward", nationality: "Brazil" },
  { name: "Karim Benzema", club: "Al Ittihad", position: "forward", nationality: "France" },
  { name: "Gianluigi Donnarumma", club: "Paris Saint-Germain", position: "goalkeeper", nationality: "Italy" },
  { name: "Manuel Neuer", club: "Bayern Munich", position: "goalkeeper", nationality: "Germany" },
  { name: "Joshua Kimmich", club: "Bayern Munich", position: "midfielder", nationality: "Germany" },
  { name: "Jude Bellingham", club: "Real Madrid", position: "midfielder", nationality: "England" },
  { name: "Phil Foden", club: "Manchester City", position: "midfielder", nationality: "England" },
  { name: "Bukayo Saka", club: "Arsenal", position: "forward", nationality: "England" },
  { name: "Harry Kane", club: "Bayern Munich", position: "forward", nationality: "England" },
  { name: "Son Heung-min", club: "Tottenham Hotspur", position: "forward", nationality: "South Korea" },
  { name: "Paulo Dybala", club: "AS Roma", position: "forward", nationality: "Argentina" },
  { name: "Ángel Di María", club: "Benfica", position: "forward", nationality: "Argentina" },
  { name: "Raphaël Varane", club: "Manchester United", position: "defender", nationality: "France" },
  { name: "Lisandro Martínez", club: "Manchester United", position: "defender", nationality: "Argentina" },
  { name: "Casemiro", club: "Manchester United", position: "midfielder", nationality: "Brazil" },
  { name: "Bruno Fernandes", club: "Manchester United", position: "midfielder", nationality: "Portugal" },
  { name: "Marcus Rashford", club: "Manchester United", position: "forward", nationality: "England" },
  { name: "Frenkie de Jong", club: "Barcelona", position: "midfielder", nationality: "Netherlands" },
  { name: "Pedri", club: "Barcelona", position: "midfielder", nationality: "Spain" },
  { name: "Gavi", club: "Barcelona", position: "midfielder", nationality: "Spain" },
  { name: "Marc-André ter Stegen", club: "Barcelona", position: "goalkeeper", nationality: "Germany" },
  { name: "Gerard Piqué", club: "Retired", position: "defender", nationality: "Spain" },
  { name: "Andrés Iniesta", club: "Emirates Club", position: "midfielder", nationality: "Spain" },
  { name: "Xavi Hernandez", club: "Retired", position: "midfielder", nationality: "Spain" },
  { name: "Iker Casillas", club: "Retired", position: "goalkeeper", nationality: "Spain" },
  { name: "David de Gea", club: "Free Agent", position: "goalkeeper", nationality: "Spain" },
  { name: "Alisson Becker", club: "Liverpool", position: "goalkeeper", nationality: "Brazil" },
  { name: "Trent Alexander-Arnold", club: "Liverpool", position: "defender", nationality: "England" },
  { name: "Andrew Robertson", club: "Liverpool", position: "defender", nationality: "Scotland" },
  { name: "Mohamed Salah", club: "Liverpool", position: "forward", nationality: "Egypt" },
  { name: "Thiago Alcântara", club: "Liverpool", position: "midfielder", nationality: "Spain" },
  { name: "Ederson Moraes", club: "Manchester City", position: "goalkeeper", nationality: "Brazil" },
  { name: "Rúben Dias", club: "Manchester City", position: "defender", nationality: "Portugal" },
  { name: "Bernardo Silva", club: "Manchester City", position: "midfielder", nationality: "Portugal" },
  { name: "Rodri", club: "Manchester City", position: "midfielder", nationality: "Spain" },
  { name: "Jack Grealish", club: "Manchester City", position: "midfielder", nationality: "England" },
  { name: "Ilkay Gündogan", club: "Barcelona", position: "midfielder", nationality: "Germany" },
  { name: "João Cancelo", club: "Barcelona", position: "defender", nationality: "Portugal" },
  { name: "Achraf Hakimi", club: "Paris Saint-Germain", position: "defender", nationality: "Morocco" },
  { name: "Marquinhos", club: "Paris Saint-Germain", position: "defender", nationality: "Brazil" },
  { name: "Ousmane Dembélé", club: "Paris Saint-Germain", position: "forward", nationality: "France" },
  { name: "Gonçalo Ramos", club: "Paris Saint-Germain", position: "forward", nationality: "Portugal" },
  { name: "Presnel Kimpembe", club: "Paris Saint-Germain", position: "defender", nationality: "France" },
  { name: "Keylor Navas", club: "Paris Saint-Germain", position: "goalkeeper", nationality: "Costa Rica" },
  { name: "Sandro Tonali", club: "Newcastle United", position: "midfielder", nationality: "Italy" },
  { name: "Alexander Isak", club: "Newcastle United", position: "forward", nationality: "Sweden" },
  { name: "Allan Saint-Maximin", club: "Al Ahli", position: "forward", nationality: "France" },
  { name: "Callum Wilson", club: "Newcastle United", position: "forward", nationality: "England" },
  { name: "Miguel Almirón", club: "Newcastle United", position: "midfielder", nationality: "Paraguay" },
  { name: "Sven Botman", club: "Newcastle United", position: "defender", nationality: "Netherlands" },
  { name: "Nick Pope", club: "Newcastle United", position: "goalkeeper", nationality: "England" },
  { name: "Declan Rice", club: "Arsenal", position: "midfielder", nationality: "England" },
  { name: "Martin Ødegaard", club: "Arsenal", position: "midfielder", nationality: "Norway" },
  { name: "Gabriel Jesus", club: "Arsenal", position: "forward", nationality: "Brazil" },
  { name: "William Saliba", club: "Arsenal", position: "defender", nationality: "France" },
  { name: "Aaron Ramsdale", club: "Arsenal", position: "goalkeeper", nationality: "England" },
  { name: "Kai Havertz", club: "Arsenal", position: "midfielder", nationality: "Germany" },
  { name: "Mesut Özil", club: "Retired", position: "midfielder", nationality: "Germany" },
  { name: "Thierry Henry", club: "Retired", position: "forward", nationality: "France" },
  { name: "Zinedine Zidane", club: "Retired", position: "midfielder", nationality: "France" },
  { name: "Ronaldinho", club: "Retired", position: "forward", nationality: "Brazil" },
  { name: "Rivaldo", club: "Retired", position: "forward", nationality: "Brazil" },
  { name: "Ronaldo Nazário", club: "Retired", position: "forward", nationality: "Brazil" },
  { name: "Kaká", club: "Retired", position: "midfielder", nationality: "Brazil" },
  { name: "David Beckham", club: "Retired", position: "midfielder", nationality: "England" },
  { name: "Wayne Rooney", club: "Retired", position: "forward", nationality: "England" },
  { name: "Frank Lampard", club: "Retired", position: "midfielder", nationality: "England" },
  { name: "Steven Gerrard", club: "Retired", position: "midfielder", nationality: "England" },
  { name: "Paul Scholes", club: "Retired", position: "midfielder", nationality: "England" },
  { name: "Andrea Pirlo", club: "Retired", position: "midfielder", nationality: "Italy" },
  { name: "Francesco Totti", club: "Retired", position: "forward", nationality: "Italy" },
  { name: "Paolo Maldini", club: "Retired", position: "defender", nationality: "Italy" },
  { name: "Franco Baresi", club: "Retired", position: "defender", nationality: "Italy" },
  { name: "Petr Čech", club: "Retired", position: "goalkeeper", nationality: "Czech Republic" },
  { name: "Oliver Kahn", club: "Retired", position: "goalkeeper", nationality: "Germany" },
  { name: "Javier Zanetti", club: "Retired", position: "defender", nationality: "Argentina" },
  { name: "Carlos Tevez", club: "Retired", position: "forward", nationality: "Argentina" },
  { name: "Diego Maradona", club: "Retired", position: "forward", nationality: "Argentina" },
  { name: "Pelé", club: "Retired", position: "forward", nationality: "Brazil" },
  { name: "George Best", club: "Retired", position: "forward", nationality: "Northern Ireland" },
  { name: "Eusébio", club: "Retired", position: "forward", nationality: "Portugal" },
  { name: "Lev Yashin", club: "Retired", position: "goalkeeper", nationality: "Soviet Union" },
  { name: "Roberto Carlos", club: "Retired", position: "defender", nationality: "Brazil" },
  { name: "Cafu", club: "Retired", position: "defender", nationality: "Brazil" },
  { name: "Dani Alves", club: "Retired", position: "defender", nationality: "Brazil" },
  { name: "Philipp Lahm", club: "Retired", position: "defender", nationality: "Germany" },
  { name: "Bastian Schweinsteiger", club: "Retired", position: "midfielder", nationality: "Germany" },
  { name: "Claude Makélélé", club: "Retired", position: "midfielder", nationality: "France" }
];


// --- UI elements ---
const startBtn = document.getElementById('start-btn');
const showDataBtn = document.getElementById('show-data-btn');
const questionArea = document.getElementById('question-area');
const questionText = document.getElementById('question-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const status = document.getElementById('status');
const guessArea = document.getElementById('guess-area');
const guessText = document.getElementById('guess-text');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');
const restartBtn = document.getElementById('restart-btn');
const candidatesArea = document.getElementById('candidates-area');
const candidatesList = document.getElementById('candidates-list');

let remaining = [];
let askedQuestions = []; // list of {attr, val, questionText}
let currentQuestion = null;

// Build all possible attribute-value pairs from dataset
function buildAttributePairs(data){
  const pairs = [];
  if(!data.length) return pairs;
  const attrs = Object.keys(data[0]).filter(k => k !== 'name');
  attrs.forEach(attr => {
    const vals = new Set();
    data.forEach(d => vals.add(d[attr]));
    vals.forEach(v => pairs.push({attr, val: v, text: `Is the player's ${attr} ${v}?`}));
  });
  return pairs;
}

// Pick a question that best splits the remaining candidates (closest to half)
function pickBestQuestion(pairs, remaining, asked){
  const remLen = remaining.length;
  if(remLen <= 1) return null;

  let best = null;
  let bestScore = Infinity;

  pairs.forEach(p => {
    // skip if already asked same pair
    if (asked.some(a => a.attr===p.attr && a.val===p.val)) return;
    const yesCount = remaining.filter(r => r[p.attr] === p.val).length;
    const noCount = remLen - yesCount;
    // we want both sides to be >0 and balanced
    if(yesCount === 0 || noCount === 0) return;
    const score = Math.abs(yesCount - noCount); // smaller is better
    if(score < bestScore){
      bestScore = score;
      best = p;
    }
  });

  return best;
}

function renderCandidates(){
  candidatesList.innerHTML = ''; // Clear old content

  if (remaining.length > 0) {
    // Create a dropdown
    const select = document.createElement('select');
    select.size = 1; // behaves like a dropdown, not a full list

    remaining.forEach(r => {
      const option = document.createElement('option');
      option.textContent = `${r.name} — ${r.position}, ${r.club}, ${r.nationality}`;
      select.appendChild(option);
    });

    candidatesList.appendChild(select);
    candidatesArea.classList.remove('hidden');
  } else {
    candidatesArea.classList.add('hidden');
  }
}


function askQuestion(q){
  currentQuestion = q;
  questionText.textContent = q.text;
  questionArea.classList.remove('hidden');
  guessArea.classList.add('hidden');
  status.textContent = `Remaining candidates: ${remaining.length}`;
  renderCandidates();
}

function makeGuess(){
  if(remaining.length === 1){
    const p = remaining[0];
    guessText.textContent = `I guess: ${p.name} (${p.position}, ${p.club})`;
    guessArea.classList.remove('hidden');
    questionArea.classList.add('hidden');
    status.textContent = 'I have a guess!';
  } else if (remaining.length === 0){
    guessText.textContent = `I couldn't find anyone. You win!`;
    guessArea.classList.remove('hidden');
    questionArea.classList.add('hidden');
    status.textContent = 'No candidates left';
  } else {
    // still ambiguous — pick another question or say a top guess
    const top = remaining.slice(0, 3).map(p => p.name).join(', ');
    guessText.textContent = `Can't narrow down to single player yet. Top candidates: ${top}`;
    guessArea.classList.remove('hidden');
    questionArea.classList.add('hidden');
    status.textContent = 'Multiple candidates remain';
    renderCandidates();
  }
}

function nextStep(){
  const pairs = buildAttributePairs(players);
  const q = pickBestQuestion(pairs, remaining, askedQuestions);
  if(q) {
    askQuestion(q);
  } else {
    // no good question left
    makeGuess();
  }
}

// Event handlers
startBtn.onclick = () => {
  remaining = players.slice(); // copy
  askedQuestions = [];
  status.textContent = 'Game started — I will ask questions!';
  candidatesArea.classList.remove('hidden');
  renderCandidates();
  nextStep();
};

yesBtn.onclick = () => {
  if(!currentQuestion) return;
  askedQuestions.push(currentQuestion);
  remaining = remaining.filter(r => r[currentQuestion.attr] === currentQuestion.val);
  if(remaining.length <= 1) { makeGuess(); return; }
  nextStep();
};

noBtn.onclick = () => {
  if(!currentQuestion) return;
  askedQuestions.push(currentQuestion);
  remaining = remaining.filter(r => r[currentQuestion.attr] !== currentQuestion.val);
  if(remaining.length <= 1) { makeGuess(); return; }
  nextStep();
};

correctBtn.onclick = () => {
  alert("Yay! I guessed it 🎉");
  // restart lightly
  questionArea.classList.add('hidden');
  guessArea.classList.add('hidden');
  status.textContent = 'Think of someone else or restart the game.';
};

wrongBtn.onclick = () => {
  // If wrong, remove the top guess and continue
  if(remaining.length > 0){
    // remove the current top candidate (first one)
    remaining.shift();
  }
  if(remaining.length === 1) return makeGuess();
  status.textContent = 'Ok — I will try again.';
  nextStep();
};

restartBtn.onclick = () => {
  remaining = [];
  askedQuestions = [];
  currentQuestion = null;
  questionArea.classList.add('hidden');
  guessArea.classList.add('hidden');
  candidatesArea.classList.add('hidden');
  status.textContent = 'Think of a football player from the list (1–100 players).';
};

showDataBtn.onclick = () => {
  console.log("Dataset:", players);
  alert("Dataset logged to console. Open devtools (F12) and check the Console.");
};

// initialize UI state
(function init(){
  questionArea.classList.add('hidden');
  guessArea.classList.add('hidden');
  candidatesArea.classList.add('hidden');
})();
