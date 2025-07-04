let config = {
  style: "mapbox://styles/mapbox/dark-v11",
  // leave commented to use Mapbox Standard Style
  accessToken:
    "pk.eyJ1IjoiZWRpc29uLXd1IiwiYSI6ImNtMmh6MHE1aDBpOW8ybXByOWQ4OXFqMjQifQ.CCubqrI6NiN0S6M54r-vIg", // your mapbox gl access token.
  showMarkers: true,
  markerColor: "#FF9B00",
  //   projection: "equirectangular",
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true, // setting this to true will display markers and the panel on a second map (main map can't have markers or a panel)
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "dark",
  use3dTerrain: true, //set true for enabling 3D maps.
  auto: false,
  //   title: "Walk the Line",
  //   subtitle: "The Map Scrollytelling for Thesis Part 2",
  //   byline: "By Edison",
  //   footer:
  //     'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "step-1",
      alignment: "left",
      hidden: false,
      showMarkers: false,
      //   title: "China",
      //   image: "./assets/san-fran.jpeg",
      description:
        "The trip often started with a one-way flight across the Pacific from <span style='color: orange; padding: 0'><strong>China</strong></span> to <span style='color: orange; padding: 0'><strong>Ecuador</strong></span> — one of the few countries that allowed Chinese passport holders to enter <strong>without a visa</strong>. (That policy was later rescinded in July 2024).",
      location: {
        center: [121.4737, 31.2304],
        zoom: 2,
        pitch: 0, // pitch in degrees
        bearing: 0, // bearing in degrees
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "flight-path",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "flight-path",
          opacity: 1,
          duration: 1000,
        },
      ],
    },
    {
      id: "step-2",
      alignment: "left",
      hidden: false,
      showMarkers: true,
      description:
        "After landing in <span style='color: orange; padding: 0'><strong>Quito</strong></span>, they connect with other migrants — some friends, some strangers, often organized through WeChat, Telegram or Whatsapp.",
      location: {
        center: [-78.507751, -0.208946],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "flight-path",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "flight-path",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-3",
      alignment: "left",
      hidden: false,
      showMarkers: true,
      description:
        "From there, they begin the journey north using intercity buses or smuggler-arranged vans, riding for 20 to 30 hours through <strong>Ecuador</strong> to <span style='color: orange; padding: 0'><strong>Necoclí</strong></span>, a coastal town on Colombia’s Caribbean shore.",
      location: {
        center: [-76.82428, 8.57533],
        zoom: 6,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "land-path-1",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "land-path-1",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-4",
      alignment: "left",
      hidden: false,
      showMarkers: true,
      image: "./assets/boat.jpg",
      description:
        "<p class='mapbox-caption'>Cai Zhigang, a Chinese immigrant, documented his journey crossing the Darién Gap.</p> <br>Then they purchase tickets for small boats or speed ferries that carry them to <span style='color: orange; padding: 0'><strong>Acandí</strong></span>, bordering <strong>Panama</strong>.",
      location: {
        center: [-77.303, 8.533],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "boat-path",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "boat-path",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-5",
      alignment: "left",
      hidden: false,
      showMarkers: false,
      image: "./assets/jungle1.jpg",
      description:
        "<p class='mapbox-caption'>Cai Zhigang, a Chinese immigrant, documented his journey crossing the Darién Gap.</p><br>To enter Panama, they must cross the <span style='background-color: #8B0000; color: white; padding: 0 4px'><strong>Darién Gap</strong></span>—a lawless, roadless expanse of dense rainforest stretching over <strong>100 kilometers</strong>, known as one of the most dangerous migration routes in the world.<br><br>There were no roads, no signs, no guarantees, only smuggler-guided trails that twist through thick foliage, mudslides, steep ridges, and fast-moving rivers.",
      location: {
        center: [-77.303, 8.533],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "darien-gap-fill",
          opacity: 0.2,
          duration: 300,
        },
        {
          layer: "darien-gap-border",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "darien-gap-fill",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "darien-gap-border",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-6",
      alignment: "left",
      video: "./assets/jungle.mp4",
      hidden: false,
      showMarkers: false,
      description:
        "<p class='mapbox-caption'>Cai Zhigang crosses the Darién Gap with other migrants.</p> <br>Migrants carried whatever they could fit in a backpack and spent days hiking through slick trails, steep cliffs, and flooded ravines. It typically takes <strong>4 to 10 days</strong> to cross, depending on weather, health, and luck. The region was notorious for bandits, smugglers, venomous animals, and deadly dehydration. Some people didn’t make it out.",
      location: {
        center: [-77.303, 8.533],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "darien-gap-fill",
          opacity: 0.2,
          duration: 300,
        },
        {
          layer: "darien-gap-border",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "darien-gap-fill",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "darien-gap-border",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-7",
      alignment: "left",
      video: "./assets/riding horse.mp4",
      hidden: false,
      showMarkers: false,
      description:
        "<p class='mapbox-caption'>Cai Gang and his family ride horses through the jungle.</p><br>There were alternative options, in which guides offered horseback transport for <span style='color: orange; padding: 0'><strong>US$1,600</strong></span> per person, but it was five times the cost of walking.",
      location: {
        center: [-77.303, 8.533],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "darien-gap-fill",
          opacity: 0.2,
          duration: 300,
        },
        {
          layer: "darien-gap-border",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "darien-gap-fill",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "darien-gap-border",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-8",
      alignment: "left",
      hidden: false,
      image: "./assets/tent.jpg",
      description:
        "<p class='mapbox-caption'>Cai Zhigang photographs a tent near the jungle.</p><br>Those who survived the jungle continued to spend weeks traveling through <strong>Panama, Costa Rica, Nicaragua, Honduras,</strong> and <strong>Guatemala</strong>, before finally entering Mexico.",
      location: {
        center: [-92.26432, 14.911071],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "central-america-path",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "central-america-path",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-9",
      alignment: "left",
      hidden: false,
      description:
        "In <span style='color: orange; padding: 0'><strong>Tapachula</strong></span>,  the southwest city of Mexico, many are detained by Mexican immigration officials and held in camps or shelters. They apply for temporary transit documents—or are forced to wait weeks or months in limbo.",
      location: {
        center: [-92.26432, 14.911071],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "step-10",
      alignment: "left",
      hidden: false,
      showMarkers: false,
      description:
        "Many migrants who spent weeks trekking toward the northern border were stopped by Mexican immigration officers and deported back south.",
      location: {
        center: [-102.552, 22.771],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "mexico-path",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "mexico-path",
          opacity: 0,
          duration: 300,
        },
      ],
    },

    {
      id: "step-11",
      alignment: "left",
      hidden: false,
      showMarkers: false,
      description: "Bribes were often required to avoid detention or to secure passage forward.",
      location: {
        center: [-117.046623, 32.522499],
        zoom: 6,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },

    {
      id: "step-12",
      alignment: "left",
      hidden: false,
      showMarkers: false,
      video: "./assets/wall.mp4",
      description:
        "<p class='mapbox-caption'>Mexico–United States border wall</p><br>Eventually, after 3 to 6 mounths, they reached <strong>Tijuana</strong>, just <span style='background: repeating-linear-gradient(45deg, #8B0000, #8B0000 5px, #8B3220 5px, #8B3220 10px); color: white; padding: 0 4px'><strong>a wall</strong></span> away from San Diego.",
      location: {
        center: [-117.046623, 32.522499],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tijuana-border-line",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "tijuana-border-line",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};

////////////////////////
var initLoad = true;
var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = {duration: layer.duration};
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

var story = document.getElementById("story");
var features = document.createElement("div");
features.setAttribute("id", "features");

var header = document.createElement("div");

if (config.title) {
  var titleText = document.createElement("h1");
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement("h2");
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement("p");
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");

  if (record.title) {
    var title = document.createElement("h3");
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  // Add this new block for video support
  if (record.video) {
    var video = document.createElement("video");
    video.src = record.video;
    video.controls = true;
    video.muted = true; // muted by default
    video.autoplay = true; // Autoplay enabled
    video.loop = true; // Optional: makes the video loop
    video.style.width = "100%";
    video.style.marginBottom = "0";
    video.play(); // Start playing immediately
    chapter.appendChild(video);
  }

  if (record.description) {
    var story = document.createElement("p");
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

story.appendChild(features);

//   var footer = document.createElement("div");

//   if (config.footer) {
//     var footerText = document.createElement("p");
//     footerText.innerHTML = config.footer;
//     footer.appendChild(footerText);
//   }

//   if (footer.innerText.length > 0) {
//     footer.classList.add(config.theme);
//     footer.setAttribute("id", "footer");
//     story.appendChild(footer);
//   }

mapboxgl.accessToken = config.accessToken;

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  projection: config.projection,
});

// First, declare markers at the global scope (outside any function)
var marker, planeMarker, busMarker, boatMarker;

// Create a inset map if enabled in config.js
if (config.inset) {
  map.addControl(new GlobeMinimap({...config.insetOptions}), config.insetPosition);
}

// Function to create plane marker
function createPlaneMarker() {
  const el = document.createElement("div");
  el.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="${config.markerColor}" style="transform: rotate(97deg)">
  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
</svg>`;
  return el;
}

function createBusMarker() {
  const el = document.createElement("div");
  el.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="${config.markerColor}">
  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
</svg>`;
  return el;
}

function createBoatMarker() {
  const el = document.createElement("div");
  el.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="${config.markerColor}">
  <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.64 2.63.97 4 .97h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19z"/>
</svg>`;
  return el;
}

// Initialize markers
if (config.showMarkers) {
  marker = new mapboxgl.Marker({color: config.markerColor});
  planeMarker = new mapboxgl.Marker({
    element: createPlaneMarker(),
    color: config.markerColor,
  });
  busMarker = new mapboxgl.Marker({
    element: createBusMarker(),
    color: config.markerColor,
  });

  boatMarker = new mapboxgl.Marker({
    element: createBoatMarker(),
    color: config.markerColor,
  });

  // Set initial marker
  if (!config.chapters[0].showMarkers === false) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
  }
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({source: "mapbox-dem", exaggeration: 1.5});

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      progress: true,
    })
    .onStepEnter(async (response) => {
      var current_chapter = config.chapters.findIndex((chap) => chap.id === response.element.id);
      let chapter = config.chapters[current_chapter];

      response.element.classList.add("active");
      map[chapter.mapAnimation || "flyTo"](chapter.location);

      // Clear existing markers
      if (marker) marker.remove();
      if (planeMarker) planeMarker.remove();
      if (busMarker) busMarker.remove();
      if (boatMarker) boatMarker.remove();

      // Add appropriate marker
      if (config.showMarkers && chapter.showMarkers !== false) {
        // Clear all existing markers first
        if (marker) marker.remove();
        if (planeMarker) planeMarker.remove();
        if (busMarker) busMarker.remove();

        console.log("Current chapter:", chapter.id); // Debug log
        if (chapter.id === "step-2") {
          console.log("Adding plane marker"); // Debug log
          planeMarker.setLngLat(chapter.location.center).addTo(map);
        } else if (chapter.id === "step-3") {
          console.log("Adding bus marker"); // Debug log
          busMarker.setLngLat(chapter.location.center).addTo(map);
        } else if (chapter.id === "step-4") {
          console.log("Adding boat marker");
          boatMarker.setLngLat(chapter.location.center).addTo(map);
        } else {
          console.log("Adding default marker"); // Debug log
          marker.setLngLat(chapter.location.center).addTo(map);
        }
      }

      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", () => {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 180, {
            duration: 30000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
      if (config.auto) {
        var next_chapter = (current_chapter + 1) % config.chapters.length;
        map.once("moveend", () => {
          document
            .querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0]
            .scrollIntoView();
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find((chap) => chap.id === response.element.id);
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });

  if (config.auto) {
    document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
  }

  // Add the flight path layer
  map.addSource("flight-path", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [121.4737, 31.2304], // Shanghai
              [179.9, 20], // Near Date Line
            ],
          },
          properties: {},
        },
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-179.9, 20], // Other side of Date Line
              [-78.507751, -0.208946], // Quito
            ],
          },
          properties: {},
        },
      ],
    },
  });

  map.addLayer({
    id: "flight-path",
    type: "line",
    source: "flight-path",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF9B00",
      "line-width": 2,
      "line-opacity": 0,
      "line-dasharray": [1, 2], // Creates a dashed line effect
    },
  });

  // Add a layer from Quito to Necolclí
  map.addSource("land-path-1", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-78.507751, -0.208946], // Quito
          [-76.5, 4], // Through Colombia
          [-76.82428, 8.57533],
        ],
      },
    },
  });

  map.addLayer({
    id: "land-path-1",
    type: "line",
    source: "land-path-1",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF9B00",
      "line-width": 3,
      "line-opacity": 0,
      "line-dasharray": [1, 2],
    },
  });

  // Add a layer from Necolclí to Acandí
  map.addSource("boat-path", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-76.82428, 8.57533],
          [-77.303, 8.533],
        ],
      },
    },
  });

  map.addLayer({
    id: "boat-path",
    type: "line",
    source: "boat-path",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF9B00",
      "line-width": 2,
      "line-opacity": 0,
      "line-dasharray": [1, 2],
    },
  });

  // Add the Central America path layer
  map.addSource("central-america-path", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-77.303, 8.533], // Acandí (Panama border)
          [-79.516, 8.983], // Panama City
          [-82.965, 8.929],
          [-84.091, 9.934],
          [-86.252, 12.114], // Managua, Nicaragua
          [-87.192, 14.072], // Tegucigalpa, Honduras
          [-90.527, 14.623], // Guatemala City
          [-92.267, 14.911], // Tapachula, Mexico
        ],
      },
    },
  });

  map.addLayer({
    id: "central-america-path",
    type: "line",
    source: "central-america-path",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF9B00",
      "line-width": 2,
      "line-opacity": 0,
      "line-dasharray": [1, 2],
    },
  });

  map.addSource("darien-gap", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            // Rough polygon of Darién Gap area
            [-77.8, 8.8], // Northwest corner
            [-77.8, 7.2], // Southwest corner
            [-76.8, 7.2], // Southeast corner
            [-76.8, 8.8], // Northeast corner
            [-77.8, 8.8], // Back to start to close polygon
          ],
        ],
      },
    },
  });

  map.addLayer({
    id: "darien-gap-fill",
    type: "fill",
    source: "darien-gap",
    paint: {
      "fill-color": "#ff0000",
      "fill-opacity": 0,
      "fill-outline-color": "#ff0000",
    },
  });

  map.addLayer({
    id: "darien-gap-border",
    type: "line",
    source: "darien-gap",
    paint: {
      "line-color": "#ff0000",
      "line-width": 2,
      "line-opacity": 0,
    },
  });

  map.addSource("mexico-path", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-92.267, 14.911], // 1. Tapachula
          [-92.633, 16.737], // 2. Tuxtla Gutiérrez
          [-96.726, 17.065], // 3. Oaxaca
          [-98.193, 19.043], // 4. Puebla
          [-99.133, 19.432], // 5. Mexico City
          [-100.316, 20.588], // 6. Querétaro
          [-101.674, 21.152], // 7. Guanajuato
          [-102.291, 21.879], // 8. Aguascalientes
          [-103.349, 20.659], // 9. Guadalajara
          [-104.672, 24.024], // 10. Durango
          [-106.069, 28.632], // 11. Chihuahua
          [-116.046, 32.422], // 15. Tijuana
        ],
      },
    },
  });
  map.addLayer({
    id: "mexico-path",
    type: "line",
    source: "mexico-path",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#FF9B00",
      "line-width": 2,
      "line-opacity": 0,
      "line-dasharray": [1, 2],
    },
  });

  map.addSource("tijuana-border", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-117.12827, 32.53384], // Western point near the Pacific Ocean

          [-116.93092, 32.55], // Eastern point
        ],
      },
    },
  });
  map.addLayer({
    id: "tijuana-border-line",
    type: "line",
    source: "tijuana-border",
    paint: {
      "line-color": "#8B0000", // Red color for the border
      "line-width": 10,
      "line-opacity": 0,
      "line-dasharray": [1.5, 1], // Optional: makes it a dashed line
    },
  });
});
