import '../scss/app.scss';

import togglePopup from './modules/tooglePopup';
import countTimer from './modules/countTimer';
import slider from './modules/slider';
import popupInfoRandom from './modules/popupInfoRandom';

window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  document.addEventListener('mouseleave', () => {
    //Popup
    togglePopup();
  });

  //Timer
  countTimer();

  // Slider
  slider();

  //Popups Random
  if (screen.width > 767) {
    popupInfoRandom();
  }
});
