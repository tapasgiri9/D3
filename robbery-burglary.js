var fs= require('fs');
 //var count=0;
 var dataArray = {};  // ROBBERY and burglary
 var robbery   = [];
 var burglary   =[];

for( var i=1;i<17;i++){
if(i<10){
  robbery[i-1] ={"year":"200"+(i),"total":0};
  burglary[i-1] ={"year":"200"+(i),"total":0};
}
else {
  robbery[i-1] ={"year":"20"+i,"total":0};
  burglary[i-1] ={"year":"20"+i,"total":0};
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
// var crimeType={};
 //var crimeValues=[];
if(columns[5]==='ROBBERY'){
   //console.log(columns[5]);
     switch(columns[17]) {
       case "2001": robbery[0].total = robbery[0].total+1;
                    break;
       case "2002":
                     robbery[1].total = robbery[1].total+1;
                     break;
       case "2003":
                     robbery[2].total = robbery[2].total+1;
                     break;
       case "2004":
                     robbery[3].total = robbery[3].total+1;
                     break;
       case "2005":
                     robbery[4].total = robbery[4].total+1;
                     break;
       case "2006":
                     robbery[5].total = robbery[5].total+1;
                     break;
       case "2007":
                     robbery[6].total = robbery[6].total+1;
                     break;
       case "2008": robbery[7].total = robbery[7].total+1;
                    break;
       case "2009":  robbery[8].total = robbery[8].total+1;
                      break;

       case "2010":   robbery[9].total = robbery[9].total+1;
                      break;

       case "2011":   robbery[10].total = robbery[10].total+1;
                      break;

       case "2012":  robbery[11].total = robbery[11].total+1;
                     break;

       case "2013":  robbery[12].total = robbery[12].total+1;
                     break;

       case "2014":  robbery[13].total = robbery[13].total+1;
                     break;

       case "2015":  robbery[14].total = robbery[14].total+1;
                     break;

       case "2016":  robbery[15].total = robbery[15].total+1;
                     break;
       default:"";
       }

 }

 else if (columns[5]==='BURGLARY') {
   switch(columns[17]) {
     case "2001": burglary[0].total = robbery[0].total+1;
                  break;
     case "2002":
                  burglary[1].total = burglary[1].total+1;
                   break;
     case "2003":
                   burglary[2].total = burglary[2].total+1;
                   break;
     case "2004":
                   burglary[3].total = burglary[3].total+1;
                   break;
     case "2005":
                   burglary[4].total = burglary[4].total+1;
                   break;
     case "2006":
                   burglary[5].total = burglary[5].total+1;
                   break;
     case "2007":
                   burglary[6].total = burglary[6].total+1;
                   break;
     case "2008": burglary[7].total = burglary[7].total+1;
                  break;
     case "2009":  burglary[8].total = burglary[7].total+1;
                    break;

     case "2010":   burglary[9].total = burglary[9].total+1;
                    break;

     case "2011":   burglary[10].total = burglary[10].total+1;
                    break;

     case "2012": burglary[11].total = burglary[11].total+1;
                   break;

     case "2013":  burglary[12].total = burglary[12].total+1;
                   break;

     case "2014":  burglary[13].total = burglary[13].total+1;
                   break;

     case "2015":  burglary[14].total = burglary[14].total+1;
                   break;

     case "2016":  burglary[15].total = burglary[15].total+1;
                   break;
     default:"";
     }

 }

 //console.log(columns);
}
lineReader.on("close",function(){

  //Convert robbery and burglary into json
  dataArray["robbery"] =robbery;
  dataArray["burglary"] =burglary;
  var arr = [];
  arr.push(dataArray);
  console.log(JSON.stringify(arr));

  //Write into a json file
  //fs.writeFile("robbery-burglary.json",JSON.stringify(arr),"utf-8" );



});
