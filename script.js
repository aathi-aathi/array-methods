const api = 'https://restcountries.com/v3.1/all'

//Get all the countries from Asia continent /region using Filter method
const getAsianCountries = async()=>{
    const response = await fetch(api) 
    const data = await response.json()
    const asianCountries= data.filter((country)=> country.region == 'Asia')
    console.log('All Asian countries:',asianCountries)
    
}

//Get all the countries with a population of less than 2 lakhs using Filter method
const lessPopulation = async()=>{
    const response = await fetch(api) 
    const data = await response.json()
    const less_population= data.filter((country)=> country.population < 200000)
    console.log('Countries with a population of less than 2 lakhs:',less_population)
    
}
const getDetails = async()=>{
    const response = await fetch(api)
    const data = await response.json()
    const arr =[];
    data.forEach(element => {
        arr.push(element.name,element.capital,element.flag)
    });
    console.log(arr)
}
const getTotalPopulation = async ()=>{
    const response = await fetch(api)
    const data = await response.json()
    const totalPopulation = data.reduce((acc,country)=> acc + country.population,0)
    console.log('Total population of the countries:',totalPopulation)
}
const getUsCurrency = async()=>{
    const response = await fetch(api)
    const data = await response.json()
    const usCurrency = data.filter((country)=>{
        for(let key in country.currencies){ 
            if(key == 'USD'){
                return country;
            }
           
        }
    })
    console.log('Countries that use US dollars',usCurrency)
}
getAsianCountries()
lessPopulation()
getDetails()
getTotalPopulation()
getUsCurrency()
