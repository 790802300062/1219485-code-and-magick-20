'use strict';

var WIZARD_QTY = 4;
var wizardProperties = {
  NAMES: ['Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'],
  LAST_NAMES: ['да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'],
  EYES_COLOR: ['black',
    'red',
    'blue',
    'yellow',
    'green']
};

document.querySelector('.setup').classList.remove('hidden');

function createWizard() {
  var wizard = {
    'name': getRandomElement(wizardProperties.NAMES) + ' ' +
      getRandomElement(wizardProperties.LAST_NAMES),

    'coatColor': getRandomElement(wizardProperties.COAT_COLORS),

    'eyesColor': getRandomElement(wizardProperties.EYES_COLOR),
  };

  return wizard;
}


function getRandomElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function createWizards() {
  var wizards = [];
  for (var i = 0; i < WIZARD_QTY; i++) {
    wizards.push(createWizard(i));
  }

  return wizards;
}
createWizards();

var wizardTemplate = document.querySelector('#similar-wizard-template')
          .content
          .querySelector('.setup-similar-item');

function cloneWizards(properties) {
  var newWizard = wizardTemplate.cloneNode(true);

  newWizard.querySelector('.setup-similar-label').textContent = properties.name;
  newWizard.querySelector('.wizard-coat').style.fill = properties.coatColor;
  newWizard.querySelector('.wizard-eyes').style.fill = properties.eyesColor;

  return newWizard;
}

function renderWizard() {
  var fragment = document.createDocumentFragment();
  var wizardsCollection = createWizards();
  for (var i = 0; i < WIZARD_QTY; i++) {
    fragment.appendChild(cloneWizards(wizardsCollection[i]));
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
}

renderWizard();

document.querySelector('.setup-similar').classList.remove('hidden');
