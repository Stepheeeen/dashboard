var cancelBtn = document.querySelector("#cancel");
var notice = document.querySelector("#notice");
var svg = document.querySelector("#svg");
var username = document.querySelector("#username");
var menu = document.querySelector("#dropdown");
var notification = document.querySelector('#alert');

cancelBtn.addEventListener('click', () => {
    notice.style.display = "none";
});

// Notification menu
svg.addEventListener('click', (event) => {
    event.stopPropagation();
    notification.classList.toggle('hidden');
});

document.body.addEventListener('click', function () {
    notification.classList.add('hidden');
});

notification.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Dropdown menu 
username.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('visible');
});

// document.body.addEventListener('click', function () {
//     menu.classList.remove('visible');
// });

// menu.addEventListener('click', function (event) {
//     event.stopPropagation();
// });

// Setup Guide Block

function updateProgressBar(percentage) {
  percentage = Math.max(0, Math.min(100, percentage));
  const progressMade = Math.floor((percentage / 100) * 5);
  const progressWidth = (percentage / 100) * 72;
  document.querySelector(".num_of_completed_tasks").textContent = progressMade;
  document.getElementById('progress').setAttribute('width', progressWidth);
}

updateProgressBar(0);

function toggleTasksVisibility() {
  var tasksContainer = document.querySelector('.tasks');
  var currentDisplay = getComputedStyle(tasksContainer).display;

  tasksContainer.style.display = currentDisplay === 'none' ? 'block' : 'none';
}


document.getElementById("dropdown_down-icon").addEventListener("click", toggleTasksVisibility)

function toggleTaskState(event) {
  // Reference to the div that called the function
  const taskDiv = event.currentTarget;

  // Toggle the classes "close" and "open"
  taskDiv.classList.toggle("close");
  taskDiv.classList.toggle("open");
}

// Add click event listener to all elements with the class "task"
const taskElements = document.querySelectorAll('.task');
taskElements.forEach(taskElement => {
  taskElement.addEventListener('click', toggleTaskState);
});


// Add click event listener to all "completed_status" divs
const completedStatusDivs = document.querySelectorAll('.completed_status');

completedStatusDivs.forEach(completedStatusDiv => {
  // Use a flag to determine the current state
  let isCompleted = false;

  completedStatusDiv.addEventListener('click', function () {
    // Toggle between the two states
    if (isCompleted) {
      // If completed, replace with the original SVG
      completedStatusDiv.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
        </svg>
      `;
    } else {
      // If not completed, replace with the new SVG
      completedStatusDiv.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z" fill="white"/>
        </svg>
      `;
    }

    // Toggle the flag
    isCompleted = !isCompleted;

    // Call the updateProgressBar function with the appropriate percentage
    const currentProgress = parseInt(document.querySelector(".num_of_completed_tasks").textContent) * 20;
    const newProgress = isCompleted ? currentProgress + 20 : currentProgress - 20;
    updateProgressBar(newProgress);
  });
});
