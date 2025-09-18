// Product data
const products = [
    {
        id: 1,
        name: "2 3/4' Kuruvi",
        description: "Sound cracker with loud bang",
        price: 20.00,
        originalPrice: 40.00,
        category: "sound-crackers",
        image: "images/1.jpg"
    },
    {
        id: 2,
        name: "3 1/2' Laxmi",
        description: "Traditional sound cracker",
        price: 30.00,
        originalPrice: 60.00,
        category: "sound-crackers",
        image: "images/2.jpg"
    },
    {
        id: 3,
        name: "4' Dlx Laxmi",
        description: "Deluxe sound cracker",
        price: 62.50,
        originalPrice: 125.00,
        category: "sound-crackers",
        image: "images/3.jpg"
    },
    {
        id: 4,
        name: "Gold Laxmi",
        description: "Premium gold sound cracker",
        price: 67.50,
        originalPrice: 135.00,
        category: "sound-crackers",
        image: "images/4.jpg"
    },
    {
        id: 5,
        name: "Flower Pot Asoka",
        description: "Colorful flower pot crackers (10 pcs)",
        price: 237.50,
        originalPrice: 475.00,
        category: "flowerpots",
        image: "images/5.jpg"
    },
    {
        id: 6,
        name: "Colour Koti",
        description: "Vibrant color flower pots (10 pcs)",
        price: 375.00,
        originalPrice: 750.00,
        category: "flowerpots",
        image: "images/6.jpg"
    },
    {
        id: 7,
        name: "Deluxe Colour Koti",
        description: "Premium color flower pots (10 pcs)",
        price: 475.00,
        originalPrice: 950.00,
        category: "flowerpots",
        image: "images/7.jpg"
    },
    {
        id: 8,
        name: "Mega Jumbo",
        description: "Large jumbo flower pots (10 pcs)",
        price: 875.00,
        originalPrice: 1750.00,
        category: "flowerpots",
        image: "images/8.jpg"
    },
    {
        id: 9,
        name: "Tricolour",
        description: "Tri-color flower pots (5 pcs)",
        price: 575.00,
        originalPrice: 1150.00,
        category: "flowerpots",
        image: "images/9.jpg"
    },
    {
        id: 10,
        name: "2 in 1 Colour Changing",
        description: "Color changing mud pots (10 pcs)",
        price: 875.00,
        originalPrice: 1750.00,
        category: "flowerpots",
        image: "images/10.jpg"
    },
    {
        id: 11,
        name: "Ground Chakkar Special",
        description: "Special ground chakkar (10 pcs)",
        price: 150.00,
        originalPrice: 300.00,
        category: "flowerpots",
        image: "images/11.jpg"
    },
    {
        id: 12,
        name: "Ground Chakkar Dlx",
        description: "Deluxe ground chakkar (10 pcs)",
        price: 262.50,
        originalPrice: 525.00,
        category: "flowerpots",
        image: "images/12.jpg"
    },
    {
        id: 13,
        name: "Special Magic Chakkar",
        description: "Magic wheel chakkar with plastic wheel",
        price: 212.50,
        originalPrice: 425.00,
        category: "flowerpots",
        image: "images/13.jpg"
    },
    {
        id: 14,
        name: "Fortune",
        description: "Wire chakkar with special effects",
        price: 375.00,
        originalPrice: 750.00,
        category: "flowerpots",
        image: "images/14.jpg"
    },
    {
        id: 15,
        name: "Planet Wheeling",
        description: "Planet themed wheeling chakkar",
        price: 375.00,
        originalPrice: 750.00,
        category: "flowerpots",
        image: "images/15.jpg"
    },
    {
        id: 16,
        name: "4x4 Wheeling",
        description: "4x4 wheeling chakkar",
        price: 325.00,
        originalPrice: 650.00,
        category: "flowerpots",
        image: "images/16.jpg"
    },
    {
        id: 17,
        name: "Cocktail Spinner",
        description: "Colorful cocktail spinner",
        price: 137.00,
        originalPrice: 275.00,
        category: "flowerpots",
        image: "images/17.jpg"
    },
    {
        id: 18,
        name: "Bullet Bomb",
        description: "Small bullet bomb",
        price: 62.50,
        originalPrice: 125.00,
        category: "bombs",
        image: "images/18.jpg"
    },
    {
        id: 19,
        name: "Hydro Bomb",
        description: "Water effect bomb (10 pcs)",
        price: 115.00,
        originalPrice: 230.00,
        category: "bombs",
        image: "images/19.jpg"
    },
    {
        id: 20,
        name: "King of King",
        description: "Powerful bomb (10 pcs)",
        price: 162.00,
        originalPrice: 325.00,
        category: "bombs",
        image: "images/20.jpg"
    },
    {
        id: 21,
        name: "Triller Bomb",
        description: "Thrilling bomb with special effects",
        price: 575.00,
        originalPrice: 1150.00,
        category: "bombs",
        image: "images/21.jpg"
    },
    {
        id: 22,
        name: "Tanker Bomb",
        description: "Large tanker bomb",
        price: 250.00,
        originalPrice: 500.00,
        category: "bombs",
        image: "images/22.jpg"
    },
    {
        id: 23,
        name: "1/4 kg Thunder Bomb",
        description: "Small thunder bomb",
        price: 100.00,
        originalPrice: 200.00,
        category: "bombs",
        image: "images/23.jpg"
    },
    {
        id: 24,
        name: "1/2 kg Thunder Bomb",
        description: "Medium thunder bomb",
        price: 200.00,
        originalPrice: 400.00,
        category: "bombs",
        image: "images/24.jpg"
    },
    {
        id: 25,
        name: "1 kg Thunder Bomb",
        description: "Large thunder bomb",
        price: 400.00,
        originalPrice: 800.00,
        category: "bombs",
        image: "images/25.jpg"
    },
    {
        id: 26,
        name: "Rocket Bomb",
        description: "Rocket bomb (10 pcs)",
        price: 137.50,
        originalPrice: 275.00,
        category: "rockets",
        image: "images/26.jpg"
    },
    {
        id: 27,
        name: "3 Sound Rocket",
        description: "Rocket with 3 sounds",
        price: 250.00,
        originalPrice: 500.00,
        category: "rockets",
        image: "images/27.jpg"
    },
    {
        id: 28,
        name: "Musical Rocket",
        description: "Rocket with musical effects",
        price: 325.00,
        originalPrice: 650.00,
        category: "rockets",
        image: "images/28.jpg"
    },
    {
        id: 29,
        name: "Red Bijili",
        description: "Red bijili crackers (100 pcs)",
        price: 65.00,
        originalPrice: 130.00,
        category: "sound-crackers",
        image: "images/29.jpg"
    },
    {
        id: 30,
        name: "Stripped Bijili",
        description: "Stripped bijili crackers (100 pcs)",
        price: 75.00,
        originalPrice: 150.00,
        category: "sound-crackers",
        image: "images/30.jpg"
    },
    {
        id: 31,
        name: "1 1/2' Twinkling Star",
        description: "Small twinkling star cracker",
        price: 62.50,
        originalPrice: 125.00,
        category: "sound-crackers",
        image: "images/31.jpg"
    },
    {
        id: 32,
        name: "4' Twinkling Star",
        description: "Large twinkling star (10 pcs)",
        price: 137.50,
        originalPrice: 275.00,
        category: "sound-crackers",
        image: "images/32.jpg"
    },
    {
        id: 33,
        name: "Feather/Silver Peacock",
        description: "Silver peacock cracker",
        price: 200.00,
        originalPrice: 400.00,
        category: "sound-crackers",
        image: "images/33.jpg"
    },
    {
        id: 34,
        name: "Mini Peacock",
        description: "Small peacock cracker",
        price: 225.00,
        originalPrice: 450.00,
        category: "sound-crackers",
        image: "images/34.jpg"
    },
    {
        id: 35,
        name: "Peacock",
        description: "Standard peacock cracker",
        price: 375.00,
        originalPrice: 750.00,
        category: "sound-crackers",
        image: "images/35.jpg"
    },
    {
        id: 36,
        name: "Mega Peacock",
        description: "Large peacock cracker",
        price: 875.00,
        originalPrice: 1750.00,
        category: "sound-crackers",
        image: "images/36.jpg"
    },
    {
        id: 37,
        name: "3' Fountain",
        description: "Small fountain cracker",
        price: 187.00,
        originalPrice: 375.00,
        category: "flowerpots",
        image: "images/37.jpg"
    },
    {
        id: 38,
        name: "6' Water Queen",
        description: "Water queen fountain",
        price: 325.00,
        originalPrice: 650.00,
        category: "flowerpots",
        image: "images/38.jpg"
    },
    {
        id: 39,
        name: "6 1/2' Blossom Crackling Fountain",
        description: "Blossom crackling fountain",
        price: 337.00,
        originalPrice: 675.00,
        category: "flowerpots",
        image: "images/39.jpg"
    },
    {
        id: 40,
        name: "Lion Colour Match Box",
        description: "Lion color match box (100 pcs)",
        price: 300.00,
        originalPrice: 600.00,
        category: "kids-special",
        image: "images/40.jpg"
    },
    {
        id: 41,
        name: "Sachin Colour Match Box",
        description: "Sachin color match box (100 pcs)",
        price: 150.00,
        originalPrice: 300.00,
        category: "kids-special",
        image: "images/41.jpg"
    },
    {
        id: 42,
        name: "Roll Cap Gun",
        description: "Roll cap gun toy",
        price: 250.00,
        originalPrice: 500.00,
        category: "kids-special",
        image: "images/42.jpg"
    },
    {
        id: 43,
        name: "Roll Cap",
        description: "Roll cap (100 pcs)",
        price: 180.00,
        originalPrice: 360.00,
        category: "kids-special",
        image: "images/43.jpg"
    },
    {
        id: 44,
        name: "Ring Gun",
        description: "Ring gun toy",
        price: 250.00,
        originalPrice: 500.00,
        category: "kids-special",
        image: "images/44.jpg"
    },
    {
        id: 45,
        name: "Ayyan Ring Cap",
        description: "Ayyan ring cap (1 pkt)",
        price: 22.50,
        originalPrice: 45.00,
        category: "kids-special",
        image: "images/45.jpg"
    },
    {
        id: 46,
        name: "Photoflash",
        description: "Photoflash crackers (5 pcs)",
        price: 112.50,
        originalPrice: 225.00,
        category: "kids-special",
        image: "images/46.jpg"
    },
    {
        id: 47,
        name: "Kurkure",
        description: "Kurkure crackers",
        price: 72.50,
        originalPrice: 145.00,
        category: "kids-special",
        image: "images/47.jpg"
    },
    {
        id: 48,
        name: "Snake Tablet",
        description: "Snake tablet crackers",
        price: 50.00,
        originalPrice: 100.00,
        category: "kids-special",
        image: "images/48.jpg"
    },
    {
        id: 49,
        name: "Ayyan Hunder Box Gun with Ring",
        description: "Ayyan hundred box gun with ring",
        price: 275.00,
        originalPrice: 550.00,
        category: "kids-special",
        image: "images/49.jpg"
    },
    {
        id: 50,
        name: "Lollipop",
        description: "Lollipop hand shooter",
        price: 397.00,
        originalPrice: 795.00,
        category: "hand-shooter",
        image: "images/50.jpg"
    },
    {
        id: 51,
        name: "Waterfall Pencil",
        description: "Waterfall pencil hand shooter",
        price: 325.00,
        originalPrice: 650.00,
        category: "hand-shooter",
        image: "images/51.jpg"
    },
    {
        id: 52,
        name: "Amazing Pencil",
        description: "Amazing pencil hand shooter",
        price: 162.00,
        originalPrice: 325.00,
        category: "hand-shooter",
        image: "images/52.jpg"
    },
    {
        id: 53,
        name: "Colour Smoke",
        description: "Color smoke hand shooter",
        price: 300.00,
        originalPrice: 600.00,
        category: "hand-shooter",
        image: "images/53.jpg"
    },
    {
        id: 54,
        name: "Shower",
        description: "Shower fountain (5 pcs)",
        price: 162.50,
        originalPrice: 325.00,
        category: "fountain-variety",
        image: "images/54.jpg"
    },
    {
        id: 55,
        name: "Tom and Jerry",
        description: "Tom and Jerry fountain (5 pcs)",
        price: 300.00,
        originalPrice: 600.00,
        category: "fountain-variety",
        image: "images/55.jpg"
    },
    {
        id: 56,
        name: "Travel Bus Fountain",
        description: "Travel bus fountain",
        price: 500.00,
        originalPrice: 1000.00,
        category: "fountain-variety",
        image: "images/56.jpg"
    },
    {
        id: 57,
        name: "Emo Egg",
        description: "Emo egg fountain",
        price: 272.50,
        originalPrice: 545.00,
        category: "fountain-variety",
        image: "images/57.jpg"
    },
    {
        id: 58,
        name: "Sun Light",
        description: "Sun light fountain (5 pcs)",
        price: 175.00,
        originalPrice: 350.00,
        category: "fountain-variety",
        image: "images/58.jpg"
    },
    {
        id: 59,
        name: "Star Light",
        description: "Star light fountain (5 pcs)",
        price: 175.00,
        originalPrice: 350.00,
        category: "fountain-variety",
        image: "images/59.jpg"
    },
    {
        id: 60,
        name: "Moon Light",
        description: "Moon light fountain (5 pcs)",
        price: 175.00,
        originalPrice: 350.00,
        category: "fountain-variety",
        image: "images/60.jpg"
    },
    {
        id: 61,
        name: "Icone Water Fountain",
        description: "Icone water fountain (2 pcs)",
        price: 500.00,
        originalPrice: 1000.00,
        category: "fountain-variety",
        image: "images/61.jpg"
    },
    {
        id: 62,
        name: "Purple Dove",
        description: "Purple dove fountain",
        price: 187.00,
        originalPrice: 375.00,
        category: "fountain-variety",
        image: "images/62.jpg"
    },
    {
        id: 63,
        name: "Money in the Bank",
        description: "Money in the bank (3 pcs)",
        price: 375.00,
        originalPrice: 750.00,
        category: "sound-rocks",
        image: "images/63.jpg"
    },
    {
        id: 64,
        name: "90' Watts",
        description: "90 watts sound rocks (3 pcs)",
        price: 225.00,
        originalPrice: 450.00,
        category: "sound-rocks",
        image: "images/64.jpg"
    },
    {
        id: 65,
        name: "Shin Chan",
        description: "Shin Chan sound rocks (5 pcs)",
        price: 175.00,
        originalPrice: 350.00,
        category: "sound-rocks",
        image: "images/65.jpg"
    },
    {
        id: 66,
        name: "Old Is Gold",
        description: "Old is gold sound rocks (25 pcs)",
        price: 375.00,
        originalPrice: 750.00,
        category: "sound-rocks",
        image: "images/66.jpg"
    },
    {
        id: 67,
        name: "Drone",
        description: "Drone flying cracker (5 pcs)",
        price: 250.00,
        originalPrice: 500.00,
        category: "flying-crackers",
        image: "images/67.jpg"
    },
    {
        id: 68,
        name: "Helicopter",
        description: "Helicopter flying cracker (5 pcs)",
        price: 200.00,
        originalPrice: 400.00,
        category: "flying-crackers",
        image: "images/68.jpg"
    },
    {
        id: 69,
        name: "Butterfly",
        description: "Butterfly flying cracker (10 pcs)",
        price: 150.00,
        originalPrice: 300.00,
        category: "flying-crackers",
        image: "images/69.jpg"
    },
    {
        id: 70,
        name: "Top Spin",
        description: "Top spin (pambaram) (5 pcs)",
        price: 150.00,
        originalPrice: 300.00,
        category: "flying-crackers",
        image: "images/70.jpg"
    },
    {
        id: 71,
        name: "Mega Siren",
        description: "Mega siren whistling fountain (3 pcs)",
        price: 337.50,
        originalPrice: 675.00,
        category: "whistling-fountain",
        image: "images/71.jpg"
    },
    {
        id: 72,
        name: "Mini Siren",
        description: "Mini siren whistling fountain (5 pcs)",
        price: 300.00,
        originalPrice: 600.00,
        category: "whistling-fountain",
        image: "images/72.jpg"
    },
    {
        id: 73,
        name: "7 Shot",
        description: "7 shot fancy cracker (5 pcs)",
        price: 250.00,
        originalPrice: 500.00,
        category: "fancy-out",
        image: "images/73.jpg"
    },
    {
        id: 74,
        name: "Penda Sky Shot",
        description: "Penda sky shot (5 pcs)",
        price: 119.00,
        originalPrice: 297.50,
        category: "fancy-out",
        image: "images/74.jpg"
    },
    {
        id: 75,
        name: "Chotta Fancy",
        description: "Small fancy cracker",
        price: 72.50,
        originalPrice: 145.00,
        category: "fancy-out",
        image: "images/75.jpg"
    },
    {
        id: 76,
        name: "1 1/4' Fancy",
        description: "1 1/4 inch fancy cracker (3 pcs)",
        price: 375.00,
        originalPrice: 750.00,
        category: "fancy-out",
        image: "images/76.jpg"
    },
    {
        id: 77,
        name: "2' Fancy",
        description: "2 inch fancy cracker (1 pc)",
        price: 250.00,
        originalPrice: 500.00,
        category: "fancy-out",
        image: "images/77.jpg"
    },
    {
        id: 78,
        name: "2' Fancy (3 pcs)",
        description: "2 inch fancy cracker (3 pcs)",
        price: 575.00,
        originalPrice: 1150.00,
        category: "fancy-out",
        image: "images/78.jpg"
    },
    {
        id: 79,
        name: "2 1/2' Fancy 3 Step",
        description: "2 1/2 inch fancy 3 step",
        price: 450.00,
        originalPrice: 900.00,
        category: "fancy-out",
        image: "images/79.jpg"
    },
    {
        id: 80,
        name: "3 1/2' Fancy",
        description: "3 1/2 inch fancy cracker (1 pc)",
        price: 575.00,
        originalPrice: 1150.00,
        category: "fancy-out",
        image: "images/80.jpg"
    },
    {
        id: 81,
        name: "3 1/2' Fancy (2 pcs)",
        description: "3 1/2 inch fancy cracker (2 pcs)",
        price: 1125.00,
        originalPrice: 2250.00,
        category: "fancy-out",
        image: "images/81.jpg"
    },
    {
        id: 82,
        name: "4' Fancy",
        description: "4 inch fancy cracker (1 pc)",
        price: 825.00,
        originalPrice: 1650.00,
        category: "fancy-out",
        image: "images/82.jpg"
    },
    {
        id: 83,
        name: "4' Fancy (2 pcs)",
        description: "4 inch fancy cracker (2 pcs)",
        price: 1575.00,
        originalPrice: 3150.00,
        category: "fancy-out",
        image: "images/83.jpg"
    },
    {
        id: 84,
        name: "4' Fancy (7 step)",
        description: "4 inch fancy 7 step",
        price: 875.00,
        originalPrice: 1750.00,
        category: "fancy-out",
        image: "images/84.jpg"
    },
    {
        id: 85,
        name: "4' Fancy Double Ball",
        description: "4 inch fancy double ball (1 pc)",
        price: 900.00,
        originalPrice: 1800.00,
        category: "fancy-out",
        image: "images/85.jpg"
    },
    {
        id: 86,
        name: "4' Fancy 12 Step",
        description: "4 inch fancy 12 step",
        price: 925.00,
        originalPrice: 1850.00,
        category: "fancy-out",
        image: "images/86.jpg"
    },
    {
        id: 87,
        name: "2 1/2' Violet Flower",
        description: "2 1/2 inch violet flower",
        price: 462.50,
        originalPrice: 925.00,
        category: "fancy-special-colours",
        image: "images/87.jpg"
    },
    {
        id: 88,
        name: "2 1/2' Ayyan Pink",
        description: "2 1/2 inch Ayyan pink",
        price: 462.50,
        originalPrice: 925.00,
        category: "fancy-special-colours",
        image: "images/88.jpg"
    },
    {
        id: 89,
        name: "4' Golden Eye",
        description: "4 inch Golden Eye (Nayagara Falls)",
        price: 875.00,
        originalPrice: 1750.00,
        category: "fancy-special-colours",
        image: "images/89.jpg"
    },
    {
        id: 90,
        name: "4' Wow Blue",
        description: "4 inch Wow blue",
        price: 925.00,
        originalPrice: 1850.00,
        category: "fancy-special-colours",
        image: "images/90.jpg"
    },
    {
        id: 91,
        name: "4' Wow Pink",
        description: "4 inch Wow pink",
        price: 925.00,
        originalPrice: 1850.00,
        category: "fancy-special-colours",
        image: "images/91.jpg"
    },
    {
        id: 92,
        name: "4' Wow Purple",
        description: "4 inch Wow purple",
        price: 925.00,
        originalPrice: 1850.00,
        category: "fancy-special-colours",
        image: "images/92.jpg"
    },
    {
        id: 93,
        name: "4' Wow Orange",
        description: "4 inch Wow orange",
        price: 925.00,
        originalPrice: 1850.00,
        category: "fancy-special-colours",
        image: "images/93.jpg"
    },
    {
        id: 94,
        name: "6' Fancy",
        description: "6 inch fancy cracker",
        price: 1575.00,
        originalPrice: 3150.00,
        category: "fancy-special-colours",
        image: "images/94.jpg"
    },
    {
        id: 95,
        name: "12 Shot Rider",
        description: "12 shot rider",
        price: 300.00,
        originalPrice: 600.00,
        category: "repeating-shots",
        image: "images/95.jpg"
    },
    {
        id: 96,
        name: "12 Shot Multi Colour And Crackling",
        description: "12 shot multi color and crackling",
        price: 450.00,
        originalPrice: 900.00,
        category: "repeating-shots",
        image: "images/96.jpg"
    },
    {
        id: 97,
        name: "15 Colour Smoke Shot",
        description: "15 color smoke shot",
        price: 875.00,
        originalPrice: 1750.00,
        category: "repeating-shots",
        image: "images/97.jpg"
    },
    {
        id: 98,
        name: "30 Shot Multi Colour",
        description: "30 shot multi color",
        price: 750.00,
        originalPrice: 1500.00,
        category: "repeating-shots",
        image: "images/98.jpg"
    },
    {
        id: 99,
        name: "30 Shot Multi Colour And Crackling",
        description: "30 shot multi color and crackling",
        price: 1000.00,
        originalPrice: 2000.00,
        category: "repeating-shots",
        image: "images/99.jpg"
    },
    {
        id: 100,
        name: "60 Shot Multi Colour",
        description: "60 shot multi color",
        price: 1500.00,
        originalPrice: 3000.00,
        category: "repeating-shots",
        image: "images/100.jpg"
    },
    {
        id: 101,
        name: "60 Shot Multi Colour And Crackling",
        description: "60 shot multi color and crackling",
        price: 2000.00,
        originalPrice: 4000.00,
        category: "repeating-shots",
        image: "images/101.jpg"
    },
    {
        id: 102,
        name: "120 Shot Multi Colour",
        description: "120 shot multi color",
        price: 3000.00,
        originalPrice: 6000.00,
        category: "repeating-shots",
        image: "images/102.jpg"
    },
    {
        id: 103,
        name: "120 Shot Multi Colour And Crackling",
        description: "120 shot multi color and crackling",
        price: 3750.00,
        originalPrice: 7500.00,
        category: "repeating-shots",
        image: "images/103.jpg"
    },
    {
        id: 104,
        name: "240 Shot Multi Colour And Crackling",
        description: "240 shot multi color and crackling",
        price: 7500.00,
        originalPrice: 15000.00,
        category: "repeating-shots",
        image: "images/104.jpg"
    },
    {
        id: 105,
        name: "3 1/2 Fancy (Set out)",
        description: "3 1/2 fancy set out",
        price: 7250.00,
        originalPrice: 14500.00,
        category: "repeating-shots",
        image: "images/105.jpg"
    },
    {
        id: 106,
        name: "Shooter Heaven",
        description: "Shooter heaven (10 shots)",
        price: 1000.00,
        originalPrice: 2000.00,
        category: "hand-repeating-shots",
        image: "images/106.jpg"
    },
    {
        id: 107,
        name: "Air Gun",
        description: "Air gun (2 pcs)",
        price: 910.00,
        originalPrice: 1820.00,
        category: "hand-repeating-shots",
        image: "images/107.jpg"
    },
    {
        id: 108,
        name: "5x10 Shot",
        description: "5x10 IPL shot",
        price: 5000.00,
        originalPrice: 10000.00,
        category: "ipl-shot",
        image: "images/108.jpg"
    },
    {
        id: 109,
        name: "10x10 Carnival Shot",
        description: "10x10 carnival shot",
        price: 7500.00,
        originalPrice: 15000.00,
        category: "ipl-shot",
        image: "images/109.jpg"
    },
    {
        id: 110,
        name: "Sound Magic",
        description: "Sound magic electric cracker",
        price: 375.00,
        originalPrice: 750.00,
        category: "electric-crackers",
        image: "images/110.jpg"
    },
    {
        id: 111,
        name: "7cm Electric Sparkler",
        description: "7cm electric sparkler",
        price: 22.50,
        originalPrice: 45.00,
        category: "sparklers",
        image: "images/111.jpg"
    },
    {
        id: 112,
        name: "7cm Glittering Sparkler",
        description: "7cm glittering sparkler",
        price: 30.00,
        originalPrice: 60.00,
        category: "sparklers",
        image: "images/112.jpg"
    },
    {
        id: 113,
        name: "10cm Electric Sparkler",
        description: "10cm electric sparkler",
        price: 50.00,
        originalPrice: 100.00,
        category: "sparklers",
        image: "images/113.jpg"
    },
    {
        id: 114,
        name: "10cm Glittering Sparkler",
        description: "10cm glittering sparkler",
        price: 55.00,
        originalPrice: 110.00,
        category: "sparklers",
        image: "images/114.jpg"
    },
    {
        id: 115,
        name: "10cm Green Sparkler",
        description: "10cm green sparkler",
        price: 65.00,
        originalPrice: 130.00,
        category: "sparklers",
        image: "images/115.jpg"
    },
    {
        id: 116,
        name: "10cm Red Sparkler",
        description: "10cm red sparkler",
        price: 67.50,
        originalPrice: 135.00,
        category: "sparklers",
        image: "images/116.jpg"
    },
    {
        id: 117,
        name: "12cm Electric Sparkler",
        description: "12cm electric sparkler",
        price: 70.00,
        originalPrice: 140.00,
        category: "sparklers",
        image: "images/117.jpg"
    },
    {
        id: 118,
        name: "12cm Glittering Sparkler",
        description: "12cm glittering sparkler",
        price: 75.00,
        originalPrice: 150.00,
        category: "sparklers",
        image: "images/118.jpg"
    },
    {
        id: 119,
        name: "12cm Green Sparkler",
        description: "12cm green sparkler",
        price: 80.00,
        originalPrice: 160.00,
        category: "sparklers",
        image: "images/119.jpg"
    },
    {
        id: 120,
        name: "12cm Red Sparkler",
        description: "12cm red sparkler",
        price: 90.00,
        originalPrice: 180.00,
        category: "sparklers",
        image: "images/120.jpg"
    },
    {
        id: 121,
        name: "15cm Electric Sparkler",
        description: "15cm electric sparkler",
        price: 112.50,
        originalPrice: 225.00,
        category: "sparklers",
        image: "images/121.jpg"
    },
    {
        id: 122,
        name: "15cm Glittering Sparkler",
        description: "15cm glittering sparkler",
        price: 120.00,
        originalPrice: 240.00,
        category: "sparklers",
        image: "images/122.jpg"
    },
    {
        id: 123,
        name: "15cm Green Sparkler",
        description: "15cm green sparkler",
        price: 125.00,
        originalPrice: 250.00,
        category: "sparklers",
        image: "images/123.jpg"
    },
    {
        id: 124,
        name: "15cm Red Sparkler",
        description: "15cm red sparkler",
        price: 135.00,
        originalPrice: 270.00,
        category: "sparklers",
        image: "images/124.jpg"
    },
    {
        id: 125,
        name: "15cm Silver Sparkler",
        description: "15cm silver sparkler",
        price: 150.00,
        originalPrice: 300.00,
        category: "sparklers",
        image: "images/125.jpg"
    },
    {
        id: 126,
        name: "15cm 5in 1 Sparkler",
        description: "15cm 5in 1 sparkler (50 kampi)",
        price: 625.00,
        originalPrice: 1250.00,
        category: "sparklers",
        image: "images/126.jpg"
    },
    {
        id: 127,
        name: "30cm Electric Sparkler",
        description: "30cm electric sparkler",
        price: 112.50,
        originalPrice: 225.00,
        category: "sparklers",
        image: "images/127.jpg"
    },
    {
        id: 128,
        name: "30cm Glittering Sparkler",
        description: "30cm glittering sparkler",
        price: 120.00,
        originalPrice: 240.00,
        category: "sparklers",
        image: "images/128.jpg"
    },
    {
        id: 129,
        name: "30cm Green Sparkler",
        description: "30cm green sparkler",
        price: 125.00,
        originalPrice: 250.00,
        category: "sparklers",
        image: "images/129.jpg"
    },
    {
        id: 130,
        name: "30cm Red Sparkler",
        description: "30cm red sparkler",
        price: 135.00,
        originalPrice: 270.00,
        category: "sparklers",
        image: "images/130.jpg"
    },
    {
        id: 131,
        name: "50cm Electric Sparkler",
        description: "50cm electric sparkler",
        price: 400.00,
        originalPrice: 800.00,
        category: "sparklers",
        image: "images/131.jpg"
    },
    {
        id: 132,
        name: "50cm Color Sparkler",
        description: "50cm color sparkler",
        price: 437.00,
        originalPrice: 875.00,
        category: "sparklers",
        image: "images/132.jpg"
    },
    {
        id: 133,
        name: "50cm Mix Sparkler",
        description: "50cm mix sparkler",
        price: 450.00,
        originalPrice: 900.00,
        category: "sparklers",
        image: "images/133.jpg"
    },
    {
        id: 134,
        name: "Rotating Sparkler",
        description: "Rotating sparkler",
        price: 450.00,
        originalPrice: 900.00,
        category: "sparklers",
        image: "images/134.jpg"
    },
    {
        id: 135,
        name: "Love Heart Sparkler",
        description: "Love heart sparkler",
        price: 300.00,
        originalPrice: 600.00,
        category: "sparklers",
        image: "images/135.jpg"
    },
    {
        id: 136,
        name: "30 Item Gift Box",
        description: "Gift box with 30 items",
        price: 875.00,
        originalPrice: 1750.00,
        category: "gift-boxes",
        image: "images/136.jpg"
    },
    {
        id: 137,
        name: "40 Item Gift Box",
        description: "Gift box with 40 items",
        price: 1250.00,
        originalPrice: 2500.00,
        category: "gift-boxes",
        image: "images/137.jpg"
    },
    {
        id: 138,
        name: "50 Item Gift Box",
        description: "Gift box with 50 items",
        price: 1875.00,
        originalPrice: 3750.00,
        category: "gift-boxes",
        image: "images/138.jpg"
    },
    {
        id: 139,
        name: "Budget Combo Pack",
        description: "Budget combo pack",
        price: 5000.00,
        originalPrice: 10000.00,
        category: "family-packs",
        image: "images/139.jpg"
    },
    {
        id: 140,
        name: "Damaka Family Pack",
        description: "Damaka family pack (3k)",
        price: 7500.00,
        originalPrice: 15000.00,
        category: "family-packs",
        image: "images/140.jpg"
    },
    {
        id: 141,
        name: "Double Damaka Pack",
        description: "Double damaka pack (5k)",
        price: 12500.00,
        originalPrice: 25000.00,
        category: "family-packs",
        image: "images/141.jpg"
    },
    {
        id: 142,
        name: "Diamond Combo Pack",
        description: "Diamond combo pack (7k)",
        price: 17500.00,
        originalPrice: 35000.00,
        category: "family-packs",
        image: "images/142.jpg"
    },
    {
        id: 143,
        name: "VIP Pack",
        description: "VIP pack",
        price: 25000.00,
        originalPrice: 50000.00,
        category: "family-packs",
        image: "images/143.jpg"
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const orderModal = document.getElementById('orderModal');
const closeModal = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const selectedProductDiv = document.getElementById('selectedProduct');
const fullNameInput = document.getElementById('fullName');
const phoneNumberInput = document.getElementById('phoneNumber');
const addressInput = document.getElementById('address');
const quantityInput = document.getElementById('quantity');
const noteInput = document.getElementById('note');
const decreaseQtyBtn = document.getElementById('decreaseQty');
const increaseQtyBtn = document.getElementById('increaseQty');
const confirmationToast = document.getElementById('confirmationToast');
const darkModeToggle = document.getElementById('darkModeToggle');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartDiscount = document.getElementById('cartDiscount');
const cartTotal = document.getElementById('cartTotal');
const clearCart = document.getElementById('clearCart');
const checkoutCart = document.getElementById('checkoutCart');

// State
let currentProduct = null;
let filteredProducts = [...products];
let cart = [];
let previewModal = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
    updateCartUI();
    
    // Check for dark mode preference
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter
    categoryFilter.addEventListener('change', handleCategoryFilter);
    
    // Modal controls
    closeModal.addEventListener('click', closeOrderModal);
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) closeOrderModal();
    });
    
    // Cart modal controls
    closeCartModal.addEventListener('click', closeCartModalFunc);
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModalFunc();
    });
    
    // Form submission
    orderForm.addEventListener('submit', handleOrderSubmit);
    
    // Quantity controls
    decreaseQtyBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
    
    increaseQtyBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Cart button
    cartButton.addEventListener('click', openCartModal);
    
    // Clear cart
    clearCart.addEventListener('click', clearCartFunc);
    
    // Checkout cart
    checkoutCart.addEventListener('click', checkoutCartFunc);
}

// Render products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-gray-400 text-4xl mb-4"></i>
                <h3 class="text-xl font-medium text-gray-500">No products found</h3>
                <p class="text-gray-400 mt-2">Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden';
        
        const discountPercentage = Math.round((1 - product.price / product.originalPrice) * 100);
        
        productCard.innerHTML = `
            <div class="product-image-container relative">
                <img src="${product.image}" alt="${product.name}" 
                     class="w-full h-48 object-cover lazy-image cursor-pointer" 
                     loading="lazy">
                <div class="discount-badge">${discountPercentage}% OFF</div>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-1">${product.name}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${product.description}</p>
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <span class="text-lg font-bold text-orange-500">₹${product.price.toFixed(2)}</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">₹${product.originalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button class="add-to-cart-btn flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg transition-colors"
                            data-product-id="${product.id}">
                        <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
                    </button>
                    <button class="order-btn"
                            data-product-id="${product.id}">
                    </button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
        
        // Add event listener to order button
        const orderBtn = productCard.querySelector('.order-btn');
        orderBtn.addEventListener('click', () => openOrderModal(product));
        
        // Add event listener to add to cart button
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => addToCart(product));
        
        // Add event listener to product image for preview
        const productImage = productCard.querySelector('.product-image-container img');
        productImage.addEventListener('click', () => openPreviewModal(product));
    });
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    renderProducts(filteredProducts);
}

// Handle category filter
function handleCategoryFilter() {
    handleSearch(); // Reuse search logic
}

// Open order modal
function openOrderModal(product) {
    currentProduct = product;
    
    selectedProductDiv.innerHTML = `
        <div class="flex items-center">
            <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg mr-4">
            <div>
                <h4 class="font-bold">${product.name}</h4>
                <p class="text-orange-500 font-bold">₹${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
    
    orderModal.classList.remove('hidden');
    orderModal.classList.add('modal-enter');
    
    // Reset form
    orderForm.reset();
    quantityInput.value = 1;
    
    // Focus on first input
    setTimeout(() => fullNameInput.focus(), 300);
}

// Close order modal
function closeOrderModal() {
    orderModal.classList.add('hidden');
    orderModal.classList.remove('modal-enter');
    currentProduct = null;
}

// Handle order submission
function handleOrderSubmit(e) {
    e.preventDefault();
    
    const fullName = fullNameInput.value;
    const phoneNumber = phoneNumberInput.value;
    const address = addressInput.value;
    const quantity = quantityInput.value;
    const note = noteInput.value;
    
    // Generate WhatsApp message
    const whatsappMessage = `*New Order - Sparkle Crackers*%0A%0A` +
        `*Product:* ${currentProduct.name}%0A` +
        `*Price:* ₹${currentProduct.price.toFixed(2)}%0A` +
        `*Quantity:* ${quantity}%0A` +
        `*Total:* ₹${(currentProduct.price * quantity).toFixed(2)}%0A%0A` +
        `*Customer Details:*%0A` +
        `*Name:* ${fullName}%0A` +
        `*Phone:* ${phoneNumber}%0A` +
        `*Address:* ${address}%0A` +
        `${note ? `*Note:* ${note}%0A` : ''}`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/9600166116?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    closeOrderModal();
    
    // Show confirmation toast
    showConfirmationToast();
}

// Show confirmation toast
function showConfirmationToast() {
    confirmationToast.classList.remove('translate-y-full');
    confirmationToast.classList.add('toast-enter');
    
    // Hide after 5 seconds
    setTimeout(() => {
        confirmationToast.classList.add('translate-y-full');
        confirmationToast.classList.remove('toast-enter');
    }, 5000);
}

// Toggle dark mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

// Cart functions
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    updateCartUI();
    
    // Add animation to cart button
    cartButton.classList.add('cart-bounce');
    setTimeout(() => {
        cartButton.classList.remove('cart-bounce');
    }, 300);
    
    // Show toast
    showToast('Product added to cart!');
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    renderCartItems();
    
    // Update cart totals
    updateCartTotals();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="decrease-quantity" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                    <button class="increase-quantity" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart-item-remove" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
        
        // Add event listeners
        const decreaseBtn = cartItem.querySelector('.decrease-quantity');
        const increaseBtn = cartItem.querySelector('.increase-quantity');
        const quantityInput = cartItem.querySelector('.quantity-input');
        const removeBtn = cartItem.querySelector('.cart-item-remove');
        
        decreaseBtn.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
                updateCartUI();
                saveCart();
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            item.quantity += 1;
            updateCartUI();
            saveCart();
        });
        
        quantityInput.addEventListener('change', (e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity > 0) {
                item.quantity = newQuantity;
                updateCartUI();
                saveCart();
            }
        });
        
        removeBtn.addEventListener('click', () => {
            cart = cart.filter(cartItem => cartItem.id !== item.id);
            updateCartUI();
            saveCart();
            showToast('Product removed from cart');
        });
    });
}

function updateCartTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
    const discount = cart.reduce((total, item) => total + ((item.originalPrice - item.price) * item.quantity), 0);
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
    cartDiscount.textContent = `-₹${discount.toFixed(2)}`;
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function openCartModal() {
    cartModal.classList.remove('hidden');
    cartModal.classList.add('modal-enter');
}

function closeCartModalFunc() {
    cartModal.classList.add('hidden');
    cartModal.classList.remove('modal-enter');
}

function clearCartFunc() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCartUI();
        saveCart();
        showToast('Cart cleared');
    }
}

function checkoutCartFunc() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    // Generate cart summary for WhatsApp message
    let cartSummary = '';
    cart.forEach(item => {
        cartSummary += `${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}%0A`;
    });
    
    const subtotal = cart.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
    const discount = cart.reduce((total, item) => total + ((item.originalPrice - item.price) * item.quantity), 0);
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Generate WhatsApp message
    const whatsappMessage = `*New Order - Sparkle Crackers*%0A%0A` +
        `*Cart Items:*%0A${cartSummary}%0A` +
        `*Subtotal:* ₹${subtotal.toFixed(2)}%0A` +
        `*Discount (50%):* -₹${discount.toFixed(2)}%0A` +
        `*Total:* ₹${total.toFixed(2)}%0A%0A` +
        `*Please provide your details to confirm the order*`;
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/9600166116?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    closeCartModalFunc();
    
    // Show confirmation toast
    showConfirmationToast();
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 3000);
}

// Preview Modal Functions
function createPreviewModal() {
    if (previewModal) return; // already created

    // Create the modal structure
    const modal = document.createElement('div');
    modal.id = 'previewModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
    modal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold" id="previewProductName"></h3>
                    <button id="closePreviewModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="md:w-1/2">
                        <img id="previewProductImage" src="" alt="" class="w-full h-auto rounded-lg">
                    </div>
                    <div class="md:w-1/2">
                        <p id="previewProductDescription" class="text-gray-600 dark:text-gray-300 mb-4"></p>
                        <div class="mb-4">
                            <span class="text-lg font-bold text-orange-500" id="previewProductPrice"></span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 line-through ml-2" id="previewProductOriginalPrice"></span>
                        </div>
                        <div class="flex gap-2">
                            <button class="add-to-cart-btn flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg transition-colors">
                                <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    previewModal = modal;

    // Setup event listeners for closing
    const closeBtn = modal.querySelector('#closePreviewModal');
    closeBtn.addEventListener('click', closePreviewModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePreviewModal();
        }
    });

    // Setup event listeners for the buttons
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    const orderBtn = modal.querySelector('.order-btn');

    addToCartBtn.addEventListener('click', () => {
        const product = previewModal.currentProduct;
        if (product) {
            addToCart(product);
            closePreviewModal();
        }
    });

    orderBtn.addEventListener('click', () => {
        const product = previewModal.currentProduct;
        if (product) {
            openOrderModal(product);
            closePreviewModal();
        }
    });
}

function openPreviewModal(product) {
    createPreviewModal(); // Ensure modal exists

    // Set the product data
    document.getElementById('previewProductName').textContent = product.name;
    document.getElementById('previewProductImage').src = product.image;
    document.getElementById('previewProductImage').alt = product.name;
    document.getElementById('previewProductDescription').textContent = product.description;
    document.getElementById('previewProductPrice').textContent = `₹${product.price.toFixed(2)}`;
    document.getElementById('previewProductOriginalPrice').textContent = `₹${product.originalPrice.toFixed(2)}`;

    // Store the current product for the buttons
    previewModal.currentProduct = product;

    // Show the modal
    previewModal.classList.remove('hidden');
}

function closePreviewModal() {
    if (previewModal) {
        previewModal.classList.add('hidden');
    }
}