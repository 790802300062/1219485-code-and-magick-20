'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupInput = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    closePopup();
  }
});

setupInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

var createWizard = function () {
  var wizard = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
  return wizard;
};

var getRandomElement = function (array) {
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

var wizards = [];
for (var i = 0; i < WIZARDS_COUNT; i++) {
  var newWizard = createWizard();
  wizards.push(newWizard);
}

var WizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizardSample = WizardTemplate.cloneNode(true);

  wizardSample.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardSample.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardSample.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardSample;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < WIZARDS_COUNT; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

document.querySelector('.setup-similar-list').appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoatColor = setupWizard.querySelector('.wizard-coat');
var wizardEyesColor = setupWizard.querySelector('.wizard-eyes');
var fireballColor = document.querySelector('.setup-fireball-wrap');

wizardCoatColor.addEventListener('click', function () {
  var randomCoatColor = getRandomElement(COAT_COLORS);
  wizardCoatColor.style.fill = randomCoatColor;
  document.querySelector('input[name="coat-color"]').value = randomCoatColor;
});

wizardEyesColor.addEventListener('click', function () {
  var randomEyesColor = getRandomElement(EYES_COLORS);
  wizardEyesColor.style.fill = randomEyesColor;
  document.querySelector('input[name="eyes-color"]').value = randomEyesColor;
});

fireballColor.addEventListener('click', function () {
  var randomFireballColor = getRandomElement(FIREBALL_COLORS);
  fireballColor.style.background = randomFireballColor;
  fireballColor.querySelector('input[name="fireball-color"]').value = randomFireballColor;
});
