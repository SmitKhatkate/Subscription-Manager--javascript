let addSubscriptionButton = document.querySelector('.download-button');
let subscriptionList = document.getElementById('subscriptionList');
let newSubscriptionNameInput = document.getElementById('newSubscriptionName');
let newSubscriptionCostInput = document.getElementById('newSubscriptionCost');
let newRenewalDateInput = document.getElementById('newRenewalDate');
let subscriptions = [];
let tutorialSteps = Array.from(document.querySelectorAll('.tutorialStep'));
let tutorialButton = document.getElementById('nextTutorialStep');
let currentTutorialStep = 0;

function appInit() {
  tutorialSteps[currentTutorialStep].classList.add('active');

  if (localStorage.getItem('appData')) {
    subscriptions = JSON.parse(localStorage.getItem('appData'));
    subscriptions.forEach(subscription => addSubscriptionToUI(subscription));
  }
}

// Update tutorial
tutorialButton.onclick = function() {
  tutorialSteps[currentTutorialStep].classList.remove('active');
  currentTutorialStep++;

  if (currentTutorialStep >= tutorialSteps.length) {
    tutorialButton.parentElement.style.display = 'none';
  } else {
    tutorialSteps[currentTutorialStep].classList.add('active');
  }
};

// Add a subscription
addSubscriptionButton.onclick = function() {
  let newSubscription = {
    name: newSubscriptionNameInput.value,
    cost: newSubscriptionCostInput.value,
    renewalDate: newRenewalDateInput.value,
  };

  if (newSubscription.name && newSubscription.cost && newSubscription.renewalDate) {
    subscriptions.push(newSubscription);
    addSubscriptionToUI(newSubscription);
    localStorage.setItem('appData', JSON.stringify(subscriptions));

    newSubscriptionNameInput.value = '';
    newSubscriptionCostInput.value = '';
    newRenewalDateInput.value = '';
  }
};

// Add subscription to UI
// Add subscription to UI
function addSubscriptionToUI(subscription) {
    let newDiv = document.createElement('div');
    newDiv.style.textAlign="center";
    newDiv.style.width="50%";
    newDiv.style.border="1px solid white";
    newDiv.style.backgroundColor="#0A2463"
    newDiv.style.color="white"
    newDiv.style.borderWidth="5px";
  
    let head = document.createElement('h3');
    head.textContent=`My subscription`;
    head.style.textDecorationLine="underline";
    let nameElement = document.createElement('p');
    nameElement.textContent = `Name: ${subscription.name}`;
  
    let costElement = document.createElement('p');
    costElement.textContent = `Cost: ${subscription.cost}`;
  
    let dateElement = document.createElement('p');
    dateElement.textContent = `Renewal date: ${subscription.renewalDate}`;
    dateElement.style.color="red";
    
    let hr = document.createElement('hr');
    newDiv.appendChild(head);
    newDiv.appendChild(nameElement);
    newDiv.appendChild(costElement);
    newDiv.appendChild(dateElement);
    newDiv.appendChild(hr);
    
    subscriptionList.appendChild(newDiv);
  }
  