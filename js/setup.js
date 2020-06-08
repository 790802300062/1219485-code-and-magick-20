'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

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

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
