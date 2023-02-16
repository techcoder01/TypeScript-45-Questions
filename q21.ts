// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// // Define a type for country objects
// type Country = {
//     name: string;
//     capital: string;
//     population: number;
//     language: string;
//   };
  
//   // Create an array of country objects
//   const countries: Country[] = [
//     {
//       name: 'United States',
//       capital: 'Washington D.C.',
//       population: 331000000,
//       language: 'English'
//     },
//     {
//       name: 'China',
//       capital: 'Beijing',
//       population: 1404328611,
//       language: 'Chinese'
//     },
//     {
//       name: 'Brazil',
//       capital: 'Brasília',
//       population: 212559417,
//       language: 'Portuguese'
//     },
//     {
//       name: 'India',
//       capital: 'New Delhi',
//       population: 1380004385,
//       language: 'Hindi, English'
//     },
//     {
//       name: 'Russia',
//       capital: 'Moscow',
//       population: 145934462,
//       language: 'Russian'
//     }
//   ];
  
//   // Print the list of countries
//   console.log(countries);

type Country = {
  name: string;
  capital: string;
  population: number;
  language: string;
}

var countries: Country[] = [
  {
    name: 'United States',
          capital: 'Washington D.C.',
          population: 331000000,
          language: 'English'
        },
        {
          name: 'China',
          capital: 'Beijing',
          population: 1404328611,
          language: 'Chinese'
        },
        {
          name: 'Brazil',
          capital: 'Brasília',
          population: 212559417,
          language: 'Portuguese'
        },
        {
          name: 'India',
          capital: 'New Delhi',
          population: 1380004385,
          language: 'Hindi, English'
        },
        {
          name: 'Russia',
          capital: 'Moscow',
          population: 145934462,
          language: 'Russian'
}
]

console.log(countries)