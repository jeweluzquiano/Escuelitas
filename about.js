var config = {
    style: 'mapbox://styles/jeweluzquiano/cku6dxge41f1m17ml5zyuzj66',
    accessToken: 'pk.eyJ1IjoiamV3ZWx1enF1aWFubyIsImEiOiJjazE1aDdxbW0wdTc5M2twa21wMHN5dmt4In0.8oWsvXBqTQTUG8PF_E8Gng',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'About the Authors',
    subtitle: 'Get to Know the Creators of the Map',
    byline: 'Philis M. Barragán Goetz and Jewel Uzquiano',
    footer: 'Find the Source of the Map: Reading, Writing, and Revolution by Philis M. Barragan Goetz <br> <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.',
    chapters: [
        {
            id: 'philis',
            title: 'Philis M. Barragán Goetz',
            image: 'images/philis-barragan-goetz-headshot.jpg',
            //image: '/staticmap.html',
            description: '',
            location: {
              center: [-98.57101, 29.43056],
              zoom: 9.42,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: '',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'jewel',
            title: 'Jewel Uzquiano',
            image: 'images/jewel-headshot.jpeg',
            //image: '/staticmap.html',
            description: '',
            location: {
              center: [-98.57101, 29.43056],
              zoom: 9.42,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: '',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
