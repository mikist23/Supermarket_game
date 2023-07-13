
 // Shopping list items
 const shoppingListItems = [
  'Milk',
  'Oranges',
  'Beans',
  'Toothpaste'
];

// Trolley items
let trolleyItems = JSON.parse(localStorage.getItem('trolleyItems')) || [];

// Navigate to aisle
function navigateToAisle(aisleName) {
  // Hide all aisle sections
  const aisleSections = document.querySelectorAll('.aisle-section');
  aisleSections.forEach(section => {
    section.style.display = 'none';
  });

  // Show selected aisle section
  const selectedAisleSection = document.querySelector(`#${aisleName.toLowerCase()}`);
  selectedAisleSection.style.display = 'block';
}

// Add item to trolley
function addItemToTrolley(itemName) {
  // Check if item already exists in trolley
  if (trolleyItems.includes(itemName)) {
    alert(`${itemName} is already in your trolley!`);
    return;
  }

  // Add item to trolley array
  trolleyItems.push(itemName);

  // Store trolley items in local storage
  localStorage.setItem('trolleyItems', JSON.stringify(trolleyItems));

  // Display trolley items
  displayTrolleyItems();
}




















//background music


var audio = new Audio('./images/music/backgroundmusic.mp3'); // replace with your music file path
var isPlaying = false;
var playBtn = document.getElementById('play-music-btn');
var audioState = localStorage.getItem('audioState');

if (audioState === 'playing') {
  audio.play();
  isPlaying = true;
  playBtn.src = 'images/icons/music.png'; // replace with your pause icon image path
} else {
  audio.pause();
  isPlaying = false;
  playBtn.src = 'images/icons/music.png'; // replace with your play icon image path
}

playBtn.addEventListener('click', function() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playBtn.src = 'images/icons/music.png'; // replace with your play icon image path
    localStorage.setItem('audioState', 'paused');
  } else {
    audio.play();
    isPlaying = true;
    playBtn.src = 'images/icons/music.png'; // replace with your pause icon image path
    localStorage.setItem('audioState', 'playing');
  }
});

window.addEventListener('beforeunload', function() {
  localStorage.setItem('audioState', isPlaying ? 'playing' : 'paused');
});





//DAiry music






































function checkItems() {
  // Convert all items in trolley to lowercase for case-insensitive comparison
  const trolleyItemsLowercase = trolleyItems.map(item => item.toLowerCase());

  // Check if trolley contains all and only the items in shopping list
  const itemsMatch = shoppingListItems.length === trolleyItemsLowercase.length &&
    shoppingListItems.every(item => trolleyItemsLowercase.includes(item.toLowerCase()));

  // Navigate to appropriate page
  if (itemsMatch) {
    window.location.href = 'pass.html';
  } else {
    window.location.href = 'repeat.html';
  }

  // Clear trolley items and local storage
  trolleyItems = [];
  localStorage.removeItem('trolleyItems');

  // Display empty trolley
  displayTrolleyItems();
}





// Display trolley items
function displayTrolleyItems() {
  // Clear trolley list
  const trolleyList = document.getElementById('trolley-items');
  trolleyList.innerHTML = '';

  // Add trolley items to list
  trolleyItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.onclick = () => {
      removeItemFromTrolley(item);
    };

    li.appendChild(removeBtn);
    trolleyList.appendChild(li);
  });
}

// Remove item from trolley
function removeItemFromTrolley(itemName) {
  // Remove item from trolley array
  trolleyItems = trolleyItems.filter(item => item !== itemName);

  // Store trolley items in local storage
  localStorage.setItem('trolleyItems', JSON.stringify(trolleyItems));

  // Display trolley items
  displayTrolleyItems();
}

// Load trolley items on page load
displayTrolleyItems();




//adding music to
const audioButton1 = document.getElementById("audio-button1");
const backgroundMusic1 = document.getElementById("background-music1");

audioButton1.addEventListener("click", function() {
  if (backgroundMusic1.paused) {
    backgroundMusic1.play();
    audioButton1.classList.add("zoom-out");
  } else {
    backgroundMusic1.pause();
    audioButton1.classList.remove("zoom-out");
  }
});






















