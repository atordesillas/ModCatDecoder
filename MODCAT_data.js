const prs = {
    model18 : "KL1812",
    model38 : "KL380",
    model48 : "408 Maple/Std Model",
    model4N : "Neal Schon 14",
    model5N : "Neal Schon 15",
    model5M : "McCarty 594 Soapbar Limited",
    model5S : "McCarty 594 Singlecut Soapbar Limited",
    modelAA : "Archtop Artist",
    modelAD : "Al Di Meola",
    modelAM : "Artist Model",
    modelB4 : "Bass",
    modelBM : "Brent Mason",
    modelBS : "Brushstroke",
    modelCA : "Artist V",
    modelCB : "Custom Brazilian",
    modelCD : "DC245",
    modelCE : "Classic Electric",
    modelCH : "Chris Henderson",
    modelCL : "Custom Leftie",
    modelCM : "Custom with Maple Headstock Veneer",
    modelCO : "Custom Soapbar",
    modelCS : "Custom Semi-Hollow",
    modelCT : "Custom 12 String",
    modelCU : "Custom 22/24",
    modelCW : "Custom Wood Library",
    modelD3 : "DC3",
    modelDG : "David Grissom",
    modelDN : "Dave Navarro",
    modelEX : "Experience PRS Limited",
    modelF3 : "NF3",
    modelFN : "509",
    modelFT : "513",
    modelG4 : "Grainger Bass 4",
    modelG5 : "Grainger Bass 5",
    modelH2 : "Hollowbody II",
    modelHO : "Hollowbody I/Spruce",
    modelHT : "Hollowbody 12 String",
    modelJ1 : "Silver Sky",
    modelJA : "JA-15",
    modelJH : "Johnny Hiland",
    modelJT : "SC Jumbo Thinline",
    modelKC : "Smokeburst McCarty",
    modelM2 : "McCarty 2",
    modelM3 : "Studio",
    modelM5 : "McCarty 594",
    modelM8 : "McCarty 58",
    modelMC : "McCarty",
    modelME : "Modern Eagle",
    modelMF : "Doublecut 22 (Musicians Friend)",
    modelMI : "Mira",
    modelML : "McCarty Lefty",
    modelMO : "McCarty Soapbar",
    modelMS : "McCarty Standard or McCarty Soapbar",
    modelN1 : "Singlecut Satin",
    modelNS : "Standard Satin",
    modelP2 : "P24 Limited Edition",
    modelPG : "Paul's Guitar",
    modelPX : "Experience P22",
    modelPZ : "P22 or P24",
    modelRL : "Starla",
    modelS1 : "SC Hollowbody I",
    modelS2 : "SC Hollowbody II",
    modelS3 : "Santana 3",
    modelS4 : "Sunburst SC245",
    modelS8 : "SC 58 or Stripped 58",
    modelSA : "Santana 2",
    modelSC : "Singlecut",
    modelSH : "Singlecut Hollowbody",
    modelSL : "408 Signature Limited",
    modelSM : "Santana Maryland",
    modelSQ : "Special 22 Semi-Hollow Limited Edition",
    modelSS : "SC Hollowbody Standard",
    modelST : "Standard",
    modelSW : "Swamp Ash",
    modelSX : "20th Anniv. Singlecut",
    modelT4 : "SC245",
    modelT5 : "SC250",
    modelTF : "305",
    modelTR : "Tremonti",
    modelTT : "Tremonti Trem",
    modelUD : "Studio",
    modelXM : "Mira X",

    topWoodA : "Alder",
    topWoodH : "Mahogany",
    topWoodK : "Korina",
    topWoodM : "Maple",
    topWoodO : "Obeche",
    topWoodS : "Swamp Ash",
    topWoodU : "Spruce",

    frets1 : "21",
    frets2 : "22",
    frets4 : "24",

    topSpecB : "Burled",
    topSpecF : "Figured",
    topSpecQ : "Quilted",
    topSpec_ : "Non-Figured",

    topGradeA : "Artist",
    topGradeM : "Designation only used on Silver Sky. Meaning unknown", //So far only seen on Silver Sky
    topGradeP : "Private Stock", //Looking for more data to confirm
    topGradeS : "Select",
    topGradeT : "Ten Top",
    topGrade_ : "Non-Ten Top",

    neckWoodB : "Brazilian Rosewood (Domestic)",
    neckWoodF : "Figured Maple",
    neckWoodC : "Mahogany", // Found on one Experience 2018 Paul's Guitar
    neckWoodG : "Madagascar Rosewood",
    neckWoodH : "Mahogany",
    neckWoodI : "East Indian Rosewood",
    neckWoodK : "Korina",
    neckWoodM : "Rock Maple",
    neckWoodN : "Honduran Rosewood",
    neckWoodO : "Cocobolo",
    neckWoodP : "Pernambuco",
    neckWoodR : "Indian Rosewood",
    neckWoodS : "Sipo",
    neckWoodZ : "Brazilian Rosewood (International)",

    neckCarve4 : "Grainger Bass 4",
    neckCarve5 : "Grainger Bass 5",
    neckCarveA : "Santana",
    neckCarveD : "Custom Soapbar",
    neckCarveF : "Pattern (Wide Fat)",
    neckCarveG : "Grissom",
    neckCarveJ : "Johnny Hiland",
    neckCarveS : "Pattern Regular (Standard)",
    neckCarveT : "Pattern Thin (Wide Thin)",
    neckCarveV : "Pattern Vintage",
    neckCarveW : "Twelve String",
    neckCarveX : "Wide Fat (Mira X)",

    fingerboardA : "African Blackwood",
    fingerboardB : "Brazilian Rosewood (Domestic)",
    fingerboardC : "Macassar Ebony",
    fingerboardD : "Rosewood",
    fingerboardE : "Gaboon Ebony",
    fingerboardF : "Figured Maple",
    fingerboardG : "Madagascar Rosewood",
    fingerboardI : "East Indian Rosewood",
    fingerboardK : "Katalox",
    fingerboardM : "Rock Maple (non-figured)",
    fingerboardN : "Honduran Rosewood",
    fingerboardO : "Cocobolo",
    fingerboardP : "Pau Ferro",
    fingerboardX : "Ziricote",
    fingerboardZ : "Brazilian Rosewood (International)",

    inlay2 : "20th Anniv. Birds (in flight)",
    inlay4 : "2011 Birds",
    inlay5 : "2013 Birds",
    inlay6 : "2014+ Birds",
    inlay7 : "30th Anniv. Birds",
    inlayA : "Artist Package Birds",
    inlayB : "Original Solid Birds (pre-2008)",
    inlayD : "Dots",
    inlayE : "MOP/Paua Heart Birds (ME 2)",
    inlayF : "513 Birds",
    inlayI : "Outline Birds (2008+)",
    inlayJ : "Johnny Hiland",
    inlayL : "Moons (2008+)",
    inlayM : "Moons (pre-2008)",
    inlayN : "Ring Dots",
    inlayP : "Paua Birds",
    inlayX : "Brushstroke Birds and \"Pre-Factory\" Small Eagle Headstock Inlay",
    inlayQ : "Shadow Birds (25th Ann.)",
    inlayS : "Brush Stroke Birds",
    inlayT : "Tremonti",

    bridge2 : "2-Piece Bridge",
    bridge3 : "Gen III Tremolo",
    bridge4 : "Grainger Bass 4",
    bridge5 : "Grainger Bass 5",
    bridgeA : "Adjustable Stoptail",
    bridgeB : "Bigsby/Tune-o-matic or Bass",
    bridgeF : "Floyd Rose",
    bridgeO : "Tune-o-matic",
    bridgeP : "Piezo Adjustable Stoptail",
    bridgeS : "Straight Stoptail",
    bridgeT : "Tremolo or 2-Piece Bridge",

    colorAA : "Armando's Amethyst",
    colorAB : "Abalone",
    colorAE : "Aquamarine",
    colorAF : "Faded Abalone",
    colorAK : "Amber Black",
    colorAL : "Angry Larry",
    colorAM : "Amber",
    colorAN : "Angry Larry/Natural Back",
    colorAQ : "Aquableux",
    colorAS : "Violin Amber Sunburst",
    colorAV : "Aqua Verde Fog",
    colorAW : "Antique White",
    colorBA : "Burnt Almond",
    colorBB : "Faded Blue Burst",
    colorBC : "Black Cherry",
    colorBF : "Blue Fade",
    colorBG : "Black Gold",
    colorBI : "Bitchin' Bev",
    colorBL : "Black",
    colorBM : "Blue Matteo",
    colorBN : "Black Slate/Natural Back",
    colorBP : "Bonnie Pink",
    colorBS : "Black Sunburst",
    colorBT : "Black Slate",
    colorBW : "Black Gold Burst",
    colorCB : "Charcoal Burst",
    colorCC : "Custom Color",
    colorCD : "Catalina Dream",
    colorCE : "Charcoal Blue Burst",
    colorCG : "Crab Glow",
    colorCH : "Charcoal",
    colorCO : "Copper",
    colorCR : "Cream",
    colorCS : "Cherry Sunburst",
    colorCT : "Charcoal Contour Burst",
    colorCV : "Cherry Vanilla Burst",
    colorCY : "Cranberry",
    colorDB : "Dirty Blonde",
    colorDD : "Black Gold Nitro",
    colorDS : "Dark Cherry Sunburst",
    colorDW : "Dark Cherry Wraparound",
    colorEG : "Emerald Green",
    colorEK : "Eriza Verde Sunburst",
    colorEM : "Emerald Green",
    colorEN : "Emerald Green/Natural Back",
    colorER : "Eriza Verde",
    colorEV : "Evergreen",
    colorFB : "Faded Blue Jean",
    colorFF : "Faded Evergreen",
    colorFH : "Faded Cherry",
    colorFL : "Faded Abalone Sunburst",
    colorFM : "Faded McCarty Sunburst",
    colorFN : "Fire Red Burst/Natural Back",
    colorFR : "Fire Red Burst",
    colorFW : "Faded Whale Blue",
    colorGB : "Grey Black",
    colorGF : "Faded Grey Black",
    colorGM : "Gold Metallic",
    colorGN : "Grey Black/Natural Back",
    colorGO : "Gold Burst",
    colorGR : "Green Burst",
    colorGT : "Gold Top",
    colorIS : "Tri-Color Sunburst",
    colorJA : "Jade",
    colorJB : "Jade Burst",
    colorJW : "Jet White",
    colorKA : "Smoked Amber",
    colorKB : "Smokeburst",
    colorKC : "Charcoal Smokeburst",
    colorKG : "Black Gold Burst",
    colorKH : "Smoked Cherry Burst",
    colorKL : "Smoked Black Slate",
    colorKN : "Black/Natural Back/Middle",
    colorKO : "Smoked Orange",
    colorKP : "Sapphire Smokeburst",
    colorKR : "Red Tiger Smokeburst",
    colorKS : "Scarlet Smokeburst",
    colorKY : "Burnt Maple Leaf",
    colorLB : "Blue Crab Blue Burst",
    colorLI : "Lilac",
    colorLK : "Blue Crab Smokeburst",
    colorLL : "Livingston Lemondrop",
    colorLM : "Platinum Metallic",
    colorLN : "Blue Crab Blue Burst/Natural",
    colorLR : "Blue Crab Blue",
    colorMA : "McCarty Amber",
    colorMG : "Metallic Green",
    colorMK : "Makena Blue",
    colorML : "Frost Blue Metallic",
    colorMM : "Matteo Mist",
    colorMR : "Metallic Red",
    colorMS : "McCarty Sunburst",
    colorMT : "McCarty Tobacco Sunburst",
    colorMW : "McCarty Tobacco Wrap",
    colorNA : "Natural",
    colorNF : "Green Fade",
    colorNP : "Bonnie Pink/Natural Back",
    colorOA : "Old Antique Vintage Natural",
    colorOB : "Autumn Sky",
    colorOE : "Solana Eclipse",
    colorOF : "Orange Fade",
    colorOI : "Orange Tiger",
    colorOR : "Orange",
    colorOS : "Obsidian",
    colorOW : "Tobacco Wraparound Burst",
    colorOY : "Boyd Burst",
    colorPB : "Powder Blue",
    colorPM : "Platinum Metallic",
    colorPN : "Purple/Natural Back",
    colorPR : "Prism (Al Di Meola)",
    colorPU : "Purple",
    colorPZ : "Purple Hazel",
    colorQN : "Antique White/Natural Back",
    colorRA : "Raspberry",
    colorRB : "Royal Blue",
    colorRI : "Red Tiger",
    colorRU : "Ruby",
    colorSB : "Smoke Burst",
    colorSE : "Sunset Burst",
    colorSF : "Solar Flare",
    colorSG : "Seafoam Green",
    colorSL : "Slate Blue",
    colorSN : "Slate/Natural Back",
    colorSO : "Solana Burst",
    colorSR : "Scarlet Red",
    colorSS : "Sandstorm",
    colorSY : "Santana Yellow",
    colorTA : "Tortoise Shell/Natural Back or Tangerine or Transparent Raspberry",
    colorTB : "Teal Black",
    colorTC : "Translucent Vintage Cherry",
    colorTE : "Tiger Eye",
    colorTG : "Tampas Green or Translucent Emerald Green",
    colorTL : "Translucent Blue",
    colorTN : "Teal Black/Natural Back",
    colorTO : "Tortoise Shell",
    colorTP : "Translucent Purple",
    colorTR : "Translucent Orange",
    colorTS : "PRS Tobacco Sunburst",
    colorTT : "Translucent Turquoise",
    colorTU : "Turquoise",
    colorTW : "Translucent Walnut",
    colorUN : "Turquoise/Natural Back",
    colorVA : "Violin Amber",
    colorVB : "Vintage Burst",
    colorVC : "Vintage Cherry",
    colorVI : "Violet",
    colorVK : "Vintage Smokeburst",
    colorVM : "Vintage Mahogony",
    colorVN : "Vintage Natural",
    colorVO : "Vintage Orange",
    colorVS : "Vintage Sunburst",
    colorVY : "Vintage Yellow",
    colorWB : "Whale Blue",
    colorWM : "Wild Mint",
    colorWN : "Whale Blue/Natural Back",
    colorWW : "White Wash",
    colorXR : "Special Run",
    colorYI : "Yellow Tiger",
    colorY8 : "Cherry Charcoal Burst", // Wood Library 

    hardwareG : "Gold",
    hardwareH : "Hybrid (Nickel and Gold)",
    hardwareN : "Nickel",

    treblepu1 : "53/10 or 58/15 LT",
    treblepu2 : "509 Humbucker",
    treblepu3 : "Santana 3",
    treblepu4 : "Mira or 245",
    treblepu5 : "85/15 or 250",
    treblepu6 : "58/15 or PRS 6",
    treblepu7 : "PRS 7",
    treblepu8 : "57/08 Uncovered",
    treblepu9 : "59/09",
    treblepuA : "Dragon or Artist V",
    treblepuB : "408 or Paul's Guitar", //may also be bass?
    treblepuC : "513 Humbucker or 305 Single Coil",
    treblepuD : "Dragon 2",
    treblepuE : "12 String",
    treblepuF : "HFS Zebra",
    treblepuG : "Grainger Bass 4/5 or Dragon Zebra",
    treblepuH : "HFS Treble",
    treblepuJ : "Johnny Hiland",
    treblepuK : "57/08 Covered",
    treblepuL : "RP",
    treblepuM : "McCarty",
    treblepuN : "Santana",
    treblepuO : "Grissom",
    treblepuP : "P22",
    treblepuQ : "Santana Covered",
    treblepuR : "Archtop",
    treblepuS : "Soapbar",
    treblepuT : "Tremonti",
    treblepuU : "58/15 MT Treble",
    treblepuW : "Swamp Ash",
    treblepuX : "Starla",
    treblepuY : "Santana Maryland",
    treblepuZ : "Narrowfield",

    middlepu3 : "509 Single Coil",
    middlepuC : "513 or 305 Single Coil",
    middlepuE : "12 String (Fralin)",
    middlepuH : "Henderson",
    middlepuR : "Vintage Rail",
    middlepuS : "Soapbar",
    middlepuZ : "Narrowfield",
    middlepu_ : "none",

    basspu1 : "53/10 or 58/15 LT",
    basspu2 : "509 Humbucker",
    basspu3 : "Santana 3",
    basspu4 : "Mira or 245",
    basspu5 : "85/15 or 250",
    basspu6 : "58/15 or PRS 6",
    basspu7 : "PRS 7",
    basspu8 : "57/08 Uncovered",
    basspu9 : "59/09",
    basspuA : "Dragon or Artist V",
    basspuB : "408 or Paul's Guitar", //may also be bass?
    basspuC : "513 Humbucker or 305 Single Coil",
    basspuD : "Dragon 2",
    basspuE : "12 String",
    basspuG : "Grainger Bass 4/5 or Dragon Zebra",
    basspuH : "Henderson",
    basspuI : "Tremonti",
    basspuJ : "Johnny Hiland",
    basspuK : "57/08 Covered",
    basspuL : "RP",
    basspuM : "McCarty",
    basspuN : "Santana",
    basspuO : "Grissom",
    basspuP : "P22",
    basspuQ : "Santana Covered",
    basspuR : "Archtop",
    basspuS : "Soapbar",
    basspuT : "Vintage Bass Zebra",
    basspuU : "58/15 MT Bass",
    basspuV : "Vintage Bass",
    basspuX : "Starla",
    basspuY : "Santana Maryland",
    basspuZ : "Narrowfield",

    elec3 : "3-Way Toggle or Blade",
    elec4 : "408",
    elec5 : "5-Way Rotary",
    elec7 : "Singlecut",
    elec9 : "509",
    elecA : "Paul's", //May also be bass?
    elecB : "5-Way Blade or Grainger Bass 4/5",
    elecF : "513",
    elecH : "Henderson",
    elecJ : "Starla",
    elecK : "McCarty 594",
    elecM : "McCarty",
    elecN : "Santana",
    elecO : "Grissom",
    elecP : "McCarty P90",
    elecR : "JA-15 or HB 12 String or Archtop or HB or SC-J",
    elecS : "Swamp Ash or Signature Limited",
    elecT : "Santana 3",
    elecV : "5-Way Bladeswitch",
    elecX : "3-Way Toggle with Tap",
    elecZ : "Piezo (Hollowbody)"
};

Object.freeze(prs);
