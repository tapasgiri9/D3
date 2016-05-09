var fs= require('fs');
 //var count=0;
 var dataArray = {};  // Crimanal damage- vehicle,property,state sup property
 var vehicle   = [];
 var property   =[];
 var stateSupProperty=[];

for( var i=1;i<17;i++){
if(i<10){
  vehicle[i-1] ={"year":"200"+(i),"total":0};
  property[i-1] ={"year":"200"+(i),"total":0};
  stateSupProperty[i-1] ={"year":"200"+(i),"total":0};
}
else {
  vehicle[i-1] ={"year":"20"+i,"total":0};
  property[i-1] ={"year":"20"+i,"total":0};
  stateSupProperty[i-1] ={"year":"20"+i,"total":0};
}
}

var lines = new Array();
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Crimes_-_2001_to_present.csv')
});

lineReader.on('line', function (line) {
  //console.log('Line from file:', line);
 //  if(count<=1){
     storeLine(line);
 //    count++;
 // }


});

function storeLine(line){

 var columns  = line.split(",");
 //var count=0;
 //var crimeType={};
 //var crimeValues=[];
if(columns[5]==='CRIMINAL DAMAGE'){
  if(columns[6]==='TO PROPERTY'){
    switch(columns[17]){
      case "2001": property[0].total=property[0].total+1;
                   break;

      case "2002": property[1].total=property[1].total+1;
                    break;

      case "2003": property[2].total=property[2].total+1;
                    break;
      case "2004": property[3].total=property[3].total+1;
                    break;
      case "2005": property[4].total=property[4].total+1;
                   break;
       case "2006": property[5].total=property[5].total+1;
                    break;
      case "2007": property[6].total=property[6].total+1;
                     break;
      case "2008": property[7].total=property[7].total+1;
                    break;

      case "2009": property[8].total=property[8].total+1;
                   break;

      case "2010": property[9].total=property[9].total+1;
                   break;
      case "2011": property[10].total=property[10].total+1;
                   break;
      case "2012": property[11].total=property[11].total+1;
                   break;
      case "2013": property[12].total=property[12].total+1;
                   break;
      case "2014": property[13].total=property[13].total+1;
                   break;
      case "2015": property[14].total=property[14].total+1;
                   break;
      case "2016": property[15].total=property[15].total+1;
                   break;
    }
  }

  else if (columns[6]==='TO VEHICLE') {
    switch(columns[17]){
      case "2001": vehicle[0].total=vehicle[0].total+1;
                   break;

      case "2002": vehicle[1].total= vehicle[1].total+1;
                    break;

      case "2003": vehicle[2].total= vehicle[2].total+1;
                    break;
      case "2004": vehicle[3].total= vehicle[3].total+1;
                    break;
      case "2005": vehicle[4].total= vehicle[4].total+1;
                   break;
       case "2006": vehicle[5].total= vehicle[5].total+1;
                    break;
      case "2007": vehicle[6].total= vehicle[6].total+1;
                     break;
      case "2008": vehicle[7].total= vehicle[7].total+1;
                    break;

      case "2009": vehicle[8].total= vehicle[8].total+1;
                   break;

      case "2010": vehicle[9].total= vehicle[9].total+1;
                   break;
      case "2011": vehicle[10].total= vehicle[10].total+1;
                   break;
      case "2012": vehicle[11].total=vehicle[11].total+1;
                   break;
      case "2013": vehicle[12].total=vehicle[12].total+1;
                   break;
      case "2014": vehicle[13].total=vehicle[13].total+1;
                   break;
      case "2015": vehicle[14].total=vehicle[14].total+1;
                   break;
      case "2016": vehicle[15].total=vehicle[15].total+1;
                   break;

    }

  }


  else if (columns[6]==='TO STATE SUP PROP') {
    switch(columns[17]){
      case "2001": stateSupProperty[0].total=stateSupProperty[0].total+1;
                   break;

      case "2002": stateSupProperty[1].total= stateSupProperty[1].total+1;
                    break;

      case "2003": stateSupProperty[2].total= stateSupProperty[2].total+1;
                    break;
      case "2004": stateSupProperty[3].total= stateSupProperty[3].total+1;
                    break;
      case "2005": stateSupProperty[4].total= stateSupProperty[4].total+1;
                   break;
       case "2006": stateSupProperty[5].total= stateSupProperty[5].total+1;
                    break;
      case "2007": stateSupProperty[6].total= stateSupProperty[6].total+1;
                     break;
      case "2008": stateSupProperty[7].total= stateSupProperty[7].total+1;
                    break;

      case "2009": stateSupProperty[8].total= stateSupProperty[8].total+1;
                   break;

      case "2010": stateSupProperty[9].total= stateSupProperty[9].total+1;
                   break;
      case "2011": stateSupProperty[10].total= stateSupProperty[10].total+1;
                   break;
      case "2012": stateSupProperty[11].total=stateSupProperty[11].total+1;
                   break;
      case "2013": stateSupProperty[12].total= stateSupProperty[12].total+1;
                   break;
      case "2014": stateSupProperty[13].total=stateSupProperty[13].total+1;
                   break;
      case "2015": stateSupProperty[14].total= stateSupProperty[14].total+1;
                   break;
      case "2016": stateSupProperty[15].total= stateSupProperty[15].total+1;
                   break;

    }

  }
}







}
lineReader.on("close",function(){

  //Convert robbery and burglary into json
   dataArray["vehicle"] =vehicle;
   dataArray["property"] =property;
   dataArray["stateSupProperty"]=stateSupProperty;
   var arr = [];
  arr.push(dataArray);
  //console.log(JSON.stringify(arr));
  //
  // //Write into a json file
   fs.writeFile("crimanal-damage.json",JSON.stringify(arr),"utf-8" );

//  console.log(stateSupProperty);



});
