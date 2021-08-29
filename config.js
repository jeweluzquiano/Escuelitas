var config = {
    style: 'mapbox://styles/jeweluzquiano/ckrzkp46w14wc17q9d9tmp7ui',
    accessToken: 'pk.eyJ1IjoiamV3ZWx1enF1aWFubyIsImEiOiJjazE1aDdxbW0wdTc5M2twa21wMHN5dmt4In0.8oWsvXBqTQTUG8PF_E8Gng',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Documented Locations of Escuelitas Locales in Texas 1880-1960',
    subtitle: 'A living map from archival records, oral history interiews and historical newspapers',
    byline: 'By Philis M. Barragan Goetz and Jewel Uzquiano',
    footer: 'Source: Reading, Writing, and Revolution by Philis M. Barragan Goetz',
    chapters: [
        {
            id: 'intro',
            title: 'What is an Escuelita?',
            image: 'images/barragan-goetz_7140_cvr.jpeg',
            description: 'In Texas, Spanish-language community schools called escuelitas were a vehicle ethnic Mexicans used to negotiate their power in the education system.',
            location: {
                center: [-98.90686, 30.94089],
                zoom: 5.2,
                pitch: 30.00,
                bearing: 0
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
            id: 'laredo',
            title: 'Laredo',
            image: './path/to/image/source.png',
            description: 'Description',
            location: {
                center: [-99.49954, 27.53085],
                zoom: 8.81,
                pitch: 50,
                bearing: 0.00
            },
            onChapterEnter:[],
            onChapterExit:[]
          },
          {
            id: 'alice',
            title: 'Alice',
            image:'',
            description: '',
            location: {
                center: [-98.07078, 27.76111],
                zoom: 9.63,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter:[],
            onChapterExit:[]
          },
          {
            id:'valentine',
            title: 'Valentine',
            image:'',
            description: '',
            location: {
              center: [-104.47881, 31.59883],
              zoom: 8.09,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter:[],
            onChapterExit:[]
          },
          {
            id:'rio hondo',
            title: 'Rio Hondo',
            image: '',
            description: '',
            location: {
              center: [-97.58388, 26.23672],
              zoom: 10.81,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter:[],
            onChapterExit:[]
          },
          {
            id: 'mercedes',
            title: 'Mercedes',
            image: '',
            description: '',
            location: {
              center: [-97.91347, 26.15081],
              zoom: 10.93,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'san benito',
            title: 'San Benito',
            image: '',
            description: '',
            location: {
              center: [-97.62962, 26.13574],
              zoom: 10.62,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'san antonio',
            title: 'San Antonio',
            image: '',
            description: '',
            location: {
              center: [-98.49522, 29.42466],
              zoom: 9.41,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'seguin',
            title: 'Seguin',
            image: '',
            description: '',
            location: {
              center: [-97.96562, 29.56619],
              zoom: 10.16,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'corpus christi',
            title: 'Corpus Christi',
            image: '',
            description: '',
            location: {
              center: [-97.39561, 27.79889],
              zoom: 9.87,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'rio grande city',
            title: 'Rio Grande City',
            image: '',
            description: '',
            location: {
              center: [-98.81986, 26.37830],
              zoom: 9.69,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'hebbronville',
            title: 'Hebbronville',
            image: '',
            description: '',
            location: {
              center: [-98.68078, 27.30753],
              zoom: 9.25,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'kingsville',
            title: 'Kingsville',
            image: '',
            description: '',
            location: {
              center: [-97.85543, 27.51983],
              zoom: 9.40,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'port arthur',
            title: 'Port Arthur',
            image: '',
            description: '',
            location: {
              center: [-93.92772, 29.91010],
              zoom: 9.54,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'houston',
            title: 'Houston',
            image: '',
            description: '',
            location: {
              center: [-95.36952, 29.76426],
              zoom: 9.83,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: '16-big wells',
            title: 'Big Wells',
            image: '',
            description: '',
            location: {
              center: [-99.56862, 28.57510],
              zoom: 10.94,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'el paso',
            title: 'El Paso',
            image: '',
            description: '',
            location: {
              center: [-106.40924, 31.84690],
              zoom: 9.65,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'eagle pass',
            title: 'Eagle Pass',
            image: '',
            description: '',
            location: {
              center: [-100.34416, 28.63749],
              zoom: 9.06,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'presidio',
            title: 'Presidio',
            image: '',
            description: '',
            location: {
              center: [-104.24550, 29.79749],
              zoom: 8.80,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'fentress',
            title: 'Fentress',
            image: '',
            description: '',
            location: {
              center: [-97.77629, 29.75604],
              zoom: 13.98,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'vanderbilt',
            title: 'Vanderbilt',
            image: '',
            description: '',
            location: {
              center: [-96.62022, 28.82206],
              zoom: 11.61,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'alamo',
            title: 'Alamo',
            image: '',
            description: '',
            location: {
              center: [-98.12322, 26.18237],
              zoom: 11.27,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'hidalgo',
            title: 'Hidalgo',
            image: '',
            description: '',
            location: {
              center: [-98.26283, 26.09949],
              zoom: 12.60,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'roma',
            title: 'Roma',
            image: '',
            description: '',
            location: {
              center: [-99.02330, 26.42879],
              zoom: 10.17,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'cotulla',
            title: 'Cotulla',
            image: '',
            description: '',
            location: {
              center: [-99.23786, 28.43285],
              zoom: 9.63,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'agua nueva',
            title: 'Agua Nueva',
            image: '',
            description: '',
            location: {
              center: [-98.60512, 26.89940],
              zoom: 10.40,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id: 'guerra',
            title: 'Guerra',
            image: '',
            description: '',
            location: {
              center: [-98.89384, 26.88250],
              zoom: 10.62,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'randado',
            title:'Randado',
            image:'',
            description:'',
            location: {
              center: [-98.88298, 27.07378],
              zoom: 10.44,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'cuevitas',
            title:'Cuevitas',
            image:'',
            description:'',
            location:{
              center: [-98.27345, 26.09859],
              zoom: 12.94,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'del rio',
            title:'Del Rio',
            image:'',
            description:'',
            location:{
              center: [-100.89586, 29.37064],
              zoom: 9.09,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'crystal city',
            title:'Crystal City',
            image:'',
            description:'',
            location:{
              center: [-97.69584, 26.19128],
              zoom: 11.08,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'harlingen',
            title:'Harlingen',
            image:'',
            description:'',
            location:{
              center: [-97.69380, 26.19258],
              zoom: 11.08,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'uribeno cemetery',
            title:'Uribeno Cemetery',
            image:'',
            description:'',
            location:{
              center: [-99.17396, 26.90059],
              zoom: 9.51,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'ysleta',
            title:'Ysleta',
            image:'',
            description:'',
            location:{
              center: [-106.32635, 31.69814],
              zoom: 12.66,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'Zapata',
            title:'Zapata',
            image:'',
            description:'',
            location:{
              center: [-99.20951, 26.98673],
              zoom: 10.10,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'Uvalde',
            title:'Uvalde',
            image:'',
            description:'',
            location:{
              center: [-99.78629, 29.19677],
              zoom: 9.76,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'clear springs',
            title:'Clear Springs',
            image:'',
            description:'',
            location:{
              center: [-98.05972, 29.67642],
              zoom: 13.73,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'san diego',
            title:'San Diego',
            image:'',
            description:'',
            location:{
              center: [-98.49491, 27.77314],
              zoom: 9.70,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'benavides',
            title:'Benavides',
            image:'',
            description:'',
            location:{
              center: [-98.42157, 27.58605],
              zoom: 10.16,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
            id:'el campo ranch',
            title:'El Campo Ranch',
            image:'',
            description:'',
            location:{
              center: [-96.23585, 29.18272],
              zoom: 11.47,
              pitch: 45.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
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
