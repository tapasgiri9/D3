var fs = require('fs');
var first=true;
var firstOne=true;
var firstTwo=true;
var second=true;
var third=true;
var headers=[];
var population_index_2013;
var country_index;
var gdp_index_2013;
var purchasing_power_2013;
var country;
var columns=[];
var output=[];
var dataPopulation=[];
var dataGdp=[];
var dataPurchasing=[];
var growth=[];
var population_growth_2010;
var population_growth_2013;
var purchasing_growth_2010;
var purchasing_growth_2013;


var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

lineReader.on('line', function (line){
  populationDescending(line);
  gdpDescending(line);
  purchasingDescending(line);
  growthPopulationAndPurchasing(line)
  //continentAggregate(line);

  });
  function populationDescending(line){

    if(first==true){
      headers=line.split(',');
      population_index_2013=headers.indexOf('Population (Millions) - 2013');
      country_index=headers.indexOf('Country Name');
      first=false;
}
else {
  columns=line.split(',');
  //console.log(columns);

  var country=columns[country_index];

  if(country.toUpperCase()!=='EUROPEAN UNION' && country.toUpperCase()!=='WORLD'){
    //console.log(country);
    var population=columns[population_index_2013];
  dataPopulation.push({"country": country, "Population":population});
  dataPopulation.sort(function(a,b){
          return b.Population-a.Population;
  });

}
}
}

function gdpDescending(line){

  if(firstOne==true){
    headers=line.split(',');
    gdp_index_2013=headers.indexOf('GDP Billions (US$) - 2013');
    country_index=headers.indexOf('Country Name');
    firstOne=false;
}
else {
  columns=line.split(',');
  var country=columns[country_index];

  if(country.toUpperCase()!=='EUROPEAN UNION' && country.toUpperCase()!=='WORLD'){
    var gdp=columns[gdp_index_2013];
    //console.log(gdp);
    dataGdp.push({"Country": country, "GDP":gdp});
    dataGdp.sort(function(a,b){
             return b.GDP-a.GDP;
     });
}
}
}

function purchasingDescending(line){
  if(firstTwo==true){
    headers=line.split(',');
    purchasing_power_2013=headers.indexOf('Purchasing Power in Billions ( Current International Dollar) - 2013');
    country_index=headers.indexOf('Country Name');
    firstTwo=false;
}
else {
columns=line.split(',');
//console.log(columns);

var country=columns[country_index];

if(country.toUpperCase()!=='EUROPEAN UNION' && country.toUpperCase()!=='WORLD'){
  //console.log(country);
  var purchasing=columns[purchasing_power_2013];
dataPurchasing.push({"country": country, "Purchasing":purchasing});
dataPurchasing.sort(function(a,b){
         return b.Purchasing-a.Purchasing;
 });

}
}
}

function growthPopulationAndPurchasing(line){


  if(second==true){
    headers=line.split(',');


    population_growth_2010=headers.indexOf('Population (Millions) - 2010');

    population_growth_2013=headers.indexOf('Population (Millions) - 2013');

    purchasing_growth_2010=headers.indexOf('Purchasing Power in Billions ( Current International Dollar) - 2010');
    purchasing_growth_2013=headers.indexOf('Purchasing Power in Billions ( Current International Dollar) - 2013');

    country_index=headers.indexOf('Country Name');
    second=false;

  }
  else{
        columns=line.split(',');
        var country=columns[country_index];
        if(country.toUpperCase()!=='EUROPEAN UNION' && country.toUpperCase()!=='WORLD'){
          var population_2010=columns[population_growth_2010];
          var population_2013=columns[population_growth_2013];
          population_aggregate=((population_2013- population_2010)*100)/population_2010;

          var purchasing_2010=columns[purchasing_growth_2010];
          var purchasing_2013=columns[purchasing_growth_2013];
          purchasing_aggregate=((purchasing_2013- purchasing_2010)*100)/purchasing_2010;

          growth.push({"Country":country,"Population Aggregate":population_aggregate,"Purchase Aggregate":purchasing_aggregate});


        }


  }


}

// function continentAggregate(line){
//   if(third==true){
//     headers=line.split(',');
//     country_index=headers.indexOf('Country Name');
//     third=false;
//
//   }
//   else{
//     columns=line.split(',');
//     var country=columns[country_index];
//     if(country.toUpperCase=='Argentina'&& country.toUpperCase='France'&&country.toUpperCase='Germany'&&country.toUpperCase='Italy'&&country.toUpperCase='Russia'&&country.toUpperCase='Turkey'&&country.toUpperCase='United Kingdom'){
//
//     }
//   }
// }





lineReader.on('close', function () {

// console.log(dataPopulation);
// console.log(dataGdp);
// console.log(dataPurchasing);
fs.writeFile('countryPopulation.json',JSON.stringify(dataPopulation,null,2));
fs.writeFile('countryGdp.json',JSON.stringify(dataGdp,null,2));
fs.writeFile('countryPurchasing.json',JSON.stringify(dataPurchasing,null,2));
fs.writeFile('growth.json',JSON.stringify(growth,null,2));



});
