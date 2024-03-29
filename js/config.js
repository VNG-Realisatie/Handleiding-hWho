let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "Handleiding-hWho",

  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "HR",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "IO",
  publishDate: "2024-1-10",
  publishVersion: "0.1.0",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane maturities
//  previousMaturity: "IG",
//  previousPublishDate: "2022-06-24",
//  previousPublishVersion: "0.0.4",
  
  title: "Handleiding Herziene Who",
//  content: {"mermaid": "", "ch01": "informative", "ch02": ""},
//  authors:
//    [
//      {
//        name: "Robert Melskens",
//        company: "VNG Realisatie",
//        companyURL: "https://vng.nl/artikelen/vng-realisatie",
//      }
//    ],
  editors:
    [
      {
        name: "Sander Bakker",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/VNG-Realisatie/Handleiding-hWho",

//  maxTocLevel: 2,
  
  // Creëer PDF en link deze aan de file in de header van het html document (optioneel). Het is (nog) niet mogelijk hier een globale property van te maken:
  alternateFormats: [
      {
          label: "pdf",
          uri: "snapshot.pdf",
      },
    ],
  localBiblio: {
        "MIM": {
           "href": "https://docs.geostandaarden.nl/mim/mim/",
           "publisher": "Geonovum",
           "title": "MIM - Metamodel Informatie Modellering",
            date: "Oktober 2013",
            rawDate: "2023"
        },
    },
};

