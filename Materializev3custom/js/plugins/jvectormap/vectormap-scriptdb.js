/*--------------------------------
         Vector maps
     --------------------------------*/

$('#world-map-markers').vectorMap({
    map: 'asia_mill',
    scaleColors: ['#1fb5ac', '#1fb5ac'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    regionsSelectable: true,
    markersSelectable: true,
    markersSelectableOne: true,
    updateSize: true,
    onRegionOver: function(event, code) {
        //console.log('region-over', code);
    },
    onRegionOut: function(event, code) {
        //console.log('region-out', code);
    },
    onRegionClick: function(event, code) {
        //console.log('region-click', code);
    },
    onRegionSelected: function(event, code, isSelected, selectedRegions) {
        //console.log('region-select', code, isSelected, selectedRegions);
        if (window.localStorage) {
            window.localStorage.setItem(
                'jvectormap-selected-regions',
                JSON.stringify(selectedRegions)
            );
        }
    },

    panOnDrag: true,

    focusOn: {
        x: 0.65,
        y: 0.6,
        scale: 4.2,
        animate: true
    },


    regionStyle: {
        initial: {
            fill: '#ffffff',
            'fill-opacity': 1,
            stroke: 'false',
            'stroke-width': 0,
            'stroke-opacity': 1
        },
        hover: {
            fill: '#FBFBFB',
            'fill-opacity': 1,
            cursor: 'pointer'
        },
        selected: {
            fill: '#eceff1'
        },
        selectedHover: {}
    },

    markerStyle: {
        initial: {
            fill: '#ff4081',
            stroke: '#f8bbd0',
            r: 6
        },
        hover: {
            stroke: '#f8bbd0',
            "stroke-width": 3,
            cursor: 'pointer'
        },
        selected: {
            fill: '#f50057',
            "stroke-width": 0,
        },
    },
    backgroundColor: 'transperent',
    markers: [{
        latLng: [21.022736, 105.8019442],
        name: 'Hà Nội - 0 CT'
    }, {
        latLng: [16.0471659, 108.1716865],
        name: 'Đà Nẵng - 0 CT'
    }, {
        latLng: [15.623432, 108.502202],
        name: 'Quảng Nam - 1 CT'
    }, {
        latLng: [10.7546664, 106.4150352],
        name: 'Hồ Chí Minh - 4 CT'
    }, {
        latLng: [11.165191, 106.667257],
        name: 'Bình Dương - 1 CT'
    }
    ]
});