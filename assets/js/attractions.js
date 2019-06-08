var attractions = document.querySelector(".attractionFilters");
mixitup(attractions, {
  selectors: {
    target: '[data-ref~="attractionsTarget"]'
  },
  controls: {
    scope: "local"
  }
});

var restaurants = document.querySelector(".resturantFilters");
mixitup(restaurants, {
  selectors: {
    target: '[data-ref~="restaurantsTarget"]'
  },
  controls: {
    scope: "local"
  }
});
