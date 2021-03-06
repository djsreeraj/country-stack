import { CONTINENT_INFO, COUNTRY_INFO } from "./queries";

const countryWithIndiaQueryMock = [
  {
    request: {
      query: COUNTRY_INFO,
      variables: { code: "IN" },
    },
    result: {
      data: {
        country: {
          name: "India",
          code: "IN",
          emoji: "๐ฎ๐ณ",
          currency: "INR",
          languages: [
            {
              __typename: "Language",
              name: "Hindi",
            },
            {
              __typename: "Language",
              name: "English",
            },
          ],
          __typename: "Country",
        },
      },
    },
  },
];

const continentWithIndiaQueryMock = [
  {
    request: {
      query: CONTINENT_INFO,
      variables: { code: "EU" },
    },
    result: {
      data: {
        continent: {
          __typename: "Continent",
          name: "Europe",
          code: "EU",
          countries: [
            {
              __typename: "Country",
              code: "AD",
              name: "Andorra",
              emoji: "๐ฆ๐ฉ",
            },
            {
              __typename: "Country",
              code: "AL",
              name: "Albania",
              emoji: "๐ฆ๐ฑ",
            },
            {
              __typename: "Country",
              code: "AT",
              name: "Austria",
              emoji: "๐ฆ๐น",
            },
            {
              __typename: "Country",
              code: "AX",
              name: "รland",
              emoji: "๐ฆ๐ฝ",
            },
            {
              __typename: "Country",
              code: "BA",
              name: "Bosnia and Herzegovina",
              emoji: "๐ง๐ฆ",
            },
            {
              __typename: "Country",
              code: "BE",
              name: "Belgium",
              emoji: "๐ง๐ช",
            },
            {
              __typename: "Country",
              code: "BG",
              name: "Bulgaria",
              emoji: "๐ง๐ฌ",
            },
            {
              __typename: "Country",
              code: "BY",
              name: "Belarus",
              emoji: "๐ง๐พ",
            },
            {
              __typename: "Country",
              code: "CH",
              name: "Switzerland",
              emoji: "๐จ๐ญ",
            },
            {
              __typename: "Country",
              code: "CY",
              name: "Cyprus",
              emoji: "๐จ๐พ",
            },
            {
              __typename: "Country",
              code: "CZ",
              name: "Czech Republic",
              emoji: "๐จ๐ฟ",
            },
            {
              __typename: "Country",
              code: "DE",
              name: "Germany",
              emoji: "๐ฉ๐ช",
            },
            {
              __typename: "Country",
              code: "DK",
              name: "Denmark",
              emoji: "๐ฉ๐ฐ",
            },
            {
              __typename: "Country",
              code: "EE",
              name: "Estonia",
              emoji: "๐ช๐ช",
            },
            {
              __typename: "Country",
              code: "ES",
              name: "Spain",
              emoji: "๐ช๐ธ",
            },
            {
              __typename: "Country",
              code: "FI",
              name: "Finland",
              emoji: "๐ซ๐ฎ",
            },
            {
              __typename: "Country",
              code: "FO",
              name: "Faroe Islands",
              emoji: "๐ซ๐ด",
            },
            {
              __typename: "Country",
              code: "FR",
              name: "France",
              emoji: "๐ซ๐ท",
            },
            {
              __typename: "Country",
              code: "GB",
              name: "United Kingdom",
              emoji: "๐ฌ๐ง",
            },
            {
              __typename: "Country",
              code: "GG",
              name: "Guernsey",
              emoji: "๐ฌ๐ฌ",
            },
            {
              __typename: "Country",
              code: "GI",
              name: "Gibraltar",
              emoji: "๐ฌ๐ฎ",
            },
            {
              __typename: "Country",
              code: "GR",
              name: "Greece",
              emoji: "๐ฌ๐ท",
            },
            {
              __typename: "Country",
              code: "HR",
              name: "Croatia",
              emoji: "๐ญ๐ท",
            },
            {
              __typename: "Country",
              code: "HU",
              name: "Hungary",
              emoji: "๐ญ๐บ",
            },
            {
              __typename: "Country",
              code: "IE",
              name: "Ireland",
              emoji: "๐ฎ๐ช",
            },
            {
              __typename: "Country",
              code: "IM",
              name: "Isle of Man",
              emoji: "๐ฎ๐ฒ",
            },
            {
              __typename: "Country",
              code: "IS",
              name: "Iceland",
              emoji: "๐ฎ๐ธ",
            },
            {
              __typename: "Country",
              code: "IT",
              name: "Italy",
              emoji: "๐ฎ๐น",
            },
            {
              __typename: "Country",
              code: "JE",
              name: "Jersey",
              emoji: "๐ฏ๐ช",
            },
            {
              __typename: "Country",
              code: "LI",
              name: "Liechtenstein",
              emoji: "๐ฑ๐ฎ",
            },
            {
              __typename: "Country",
              code: "LT",
              name: "Lithuania",
              emoji: "๐ฑ๐น",
            },
            {
              __typename: "Country",
              code: "LU",
              name: "Luxembourg",
              emoji: "๐ฑ๐บ",
            },
            {
              __typename: "Country",
              code: "LV",
              name: "Latvia",
              emoji: "๐ฑ๐ป",
            },
            {
              __typename: "Country",
              code: "MC",
              name: "Monaco",
              emoji: "๐ฒ๐จ",
            },
            {
              __typename: "Country",
              code: "MD",
              name: "Moldova",
              emoji: "๐ฒ๐ฉ",
            },
            {
              __typename: "Country",
              code: "ME",
              name: "Montenegro",
              emoji: "๐ฒ๐ช",
            },
            {
              __typename: "Country",
              code: "MK",
              name: "North Macedonia",
              emoji: "๐ฒ๐ฐ",
            },
            {
              __typename: "Country",
              code: "MT",
              name: "Malta",
              emoji: "๐ฒ๐น",
            },
            {
              __typename: "Country",
              code: "NL",
              name: "Netherlands",
              emoji: "๐ณ๐ฑ",
            },
            {
              __typename: "Country",
              code: "NO",
              name: "Norway",
              emoji: "๐ณ๐ด",
            },
            {
              __typename: "Country",
              code: "PL",
              name: "Poland",
              emoji: "๐ต๐ฑ",
            },
            {
              __typename: "Country",
              code: "PT",
              name: "Portugal",
              emoji: "๐ต๐น",
            },
            {
              __typename: "Country",
              code: "RO",
              name: "Romania",
              emoji: "๐ท๐ด",
            },
            {
              __typename: "Country",
              code: "RS",
              name: "Serbia",
              emoji: "๐ท๐ธ",
            },
            {
              __typename: "Country",
              code: "RU",
              name: "Russia",
              emoji: "๐ท๐บ",
            },
            {
              __typename: "Country",
              code: "SE",
              name: "Sweden",
              emoji: "๐ธ๐ช",
            },
            {
              __typename: "Country",
              code: "SI",
              name: "Slovenia",
              emoji: "๐ธ๐ฎ",
            },
            {
              __typename: "Country",
              code: "SJ",
              name: "Svalbard and Jan Mayen",
              emoji: "๐ธ๐ฏ",
            },
            {
              __typename: "Country",
              code: "SK",
              name: "Slovakia",
              emoji: "๐ธ๐ฐ",
            },
            {
              __typename: "Country",
              code: "SM",
              name: "San Marino",
              emoji: "๐ธ๐ฒ",
            },
            {
              __typename: "Country",
              code: "UA",
              name: "Ukraine",
              emoji: "๐บ๐ฆ",
            },
            {
              __typename: "Country",
              code: "VA",
              name: "Vatican City",
              emoji: "๐ป๐ฆ",
            },
            {
              __typename: "Country",
              code: "XK",
              name: "Kosovo",
              emoji: "๐ฝ๐ฐ",
            },
          ],
        },
      },
    },
  },
];

const errorMocks = (message: string) => {
  return [
    {
      request: {
        COUNTRY_INFO,
      },
      error: new Error(message),
    },
  ];
};

export { errorMocks, countryWithIndiaQueryMock, continentWithIndiaQueryMock };
