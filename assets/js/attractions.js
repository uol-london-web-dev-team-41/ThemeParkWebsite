var attractionsContainer = document.querySelector('[data-ref~="attractionsContainer"]');

mixitup(attractionsContainer, {
  selectors: {
    target: '[data-ref~="attractionsTarget"]'
  }
});

var restaurantsContainer = document.querySelector('[data-ref~="restaurantsContainer"]');

mixitup(restaurantsContainer, {
  selectors: {
    target: '[data-ref~="restaurantsTarget"]'
  }
});
