const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(({ name, flags, population, region }) => {
        // console.log(country[0]);
        return `
        <div class ="country">
            <h1> ${name.common} </h1>
            <p>Population: ${population}</p>
            <p>Region: ${region} </p>
            <img src="${flags.png}" alt="">
        </div>
    `;
    });

    const countryHTML = document.getElementById('country-container');
    countryHTML.innerHTML = countriesHTML.join(' ');


}


loadCountries();