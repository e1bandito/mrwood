'use strict';

var slider = document.querySelector('.filter__price-slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 1230],
    tooltips: true,
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 3300
    },
    format: wNumb({
      decimals: 0,
      suffix: ' ₽'
  })
});

}
