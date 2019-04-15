'use strict';

var slider = document.querySelector('.filter__price-slider');

noUiSlider.create(slider, {
    start: [0, 1230],
    tooltips: true,
    connect: true,
    range: {
        'min': 0,
        'max': 3300
    }
});
