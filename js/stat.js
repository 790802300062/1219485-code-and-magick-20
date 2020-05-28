'use strict'

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_GAP = 10;
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var CURRENT_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

// Облако
var renderCloudBottom = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, (y + height) / 2);
  ctx.fillRect(x, (y + height) / 2, x + width, (y + height) / 2);
  ctx.closePath();
  ctx.fill();
};

var renderCloudTop = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + 75, (y + height) / 2);
  ctx.arc(x + 75, (y + height) / 2, 75, 0, Math.PI*2, true);
  ctx.moveTo(x + 125, (y + height) / 2 - 50);
  ctx.arc(x + 125, (y + height) / 2 - 50, 75, 0, Math.PI*2, true);
  ctx.moveTo(x + 170, (y + height) / 2 - 60);
  ctx.arc(x + 170, (y + height) / 2 - 60, 75, 0, Math.PI*2, true);
  ctx.moveTo(x + 220, (y + height) / 2 - 60);
  ctx.arc(x + 220, (y + height) / 2 - 60, 75, 0, Math.PI*2, true);
  ctx.moveTo(x + 300, (y + height) / 2 - 60);
  ctx.arc(x + 300, (y + height) / 2 - 60, 75, 0, Math.PI*2, true);
  ctx.moveTo(x + 400, (y + height) / 2 - 60);
  ctx.arc(x + 400, (y + height) / 2 - 60, 75, 0, Math.PI*2, true);
  ctx.moveTo(x + 445, (y + height) / 2);
  ctx.arc(x + 445, (y + height) / 2, 75, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}



// Наибольший элемент массива
var getMaxScore = function (array) {
  var maxScore = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxScore) {
      maxScore = array[i];
    }
  }
  return maxScore;
};

/**
 * Отрисовываем статистику на экран
 * @param  {Object} ctx
 * @param  {Array} names
 * @param  {Array} times
 */
window.renderStatistics = function (ctx, names, times) {
  renderCloudTop(ctx, CLOUD_X + CLOUD_SHADOW_GAP , CLOUD_Y + CLOUD_SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_SHADOW_COLOR);
  renderCloudBottom(ctx, CLOUD_X + CLOUD_SHADOW_GAP / 2, CLOUD_Y + CLOUD_SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_SHADOW_COLOR);
  renderCloudTop(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');
  renderCloudBottom(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = 'PT Mono 16px';
  ctx.textBaseline = 'top';
  ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, CLOUD_Y + CLOUD_SHADOW_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, CLOUD_Y + CLOUD_SHADOW_GAP + CLOUD_SHADOW_GAP);

  var maxTime = getMaxScore(times);

  for (var i = 0; i < names.length; i++) {
    var currentbarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    times[i] = Math.round(times[i]);

    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], CLOUD_X + CLOUD_SHADOW_GAP * 5 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - CLOUD_SHADOW_GAP * 2.5);
    ctx.fillText(times[i], CLOUD_X + CLOUD_SHADOW_GAP * 5 + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - BAR_GAP * 3.5 - CLOUD_SHADOW_GAP + BAR_HEIGHT - currentbarHeight);
    var saturation = (Math.floor(Math.random() * 101)).toString() + '%';
    var rivalColor = 'hsl(240,' + saturation + ', 50%)';
    ctx.fillStyle = rivalColor;
    if (names[i] === 'Вы') {
      ctx.fillStyle = CURRENT_PLAYER_COLOR;
    }
    ctx.fillRect(CLOUD_X + CLOUD_SHADOW_GAP * 5 + BAR_WIDTH *i + BAR_GAP * i, CLOUD_HEIGHT - BAR_GAP * 3.5 + BAR_HEIGHT - currentbarHeight, BAR_WIDTH, currentbarHeight);
  }
};

