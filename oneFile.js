var fs= require('fs');
var robbery   = [];
var burglary   =[];
var cases=[];
var flag=false;
var caseType,yearIndex,desc;

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

var robberyTypes=[];
robberyTypes[0]={"type":"ARMED:KNIFE/CUTTING INSTRUMENT","total":0};
robberyTypes[1]={"type":"ARMED: OTHER DANGEROUS WEAPON","total":0};
robberyTypes [2]={"type":"ARMED: HANDGUN","total":0};
robberyTypes [3]={"type":"ARMED: OTHER FIREARM","total":0};
robberyTypes [4]={"type": "STRONGARM - NO WEAPON","total":0};
robberyTypes [5]={"type": "VEHICULAR HIJACKING","total":0};
robberyTypes[6] ={"type":"AGGRAVATED VEHICULAR HIJACKING","total":0};
robberyTypes [7]={"type":"AGGRAVATED","total":0};
robberyTypes [8]={"type":"ATTEMPT: AGGRAVATED","total":0};
robberyTypes [9]={"type":"ATTEMPT: ARMED-KNIFE/CUT INSTR","total":0};
robberyTypes [10]={"type":"ATTEMPT: ARMED-OTHER DANG WEAP","total":0};
robberyTypes[11]={"type": "ATTEMPT: ARMED-HANDGUN","total":0};
robberyTypes[12]={"type":"ATTEMPT: ARMED-OTHER FIREARM","total":0};
robberyTypes[13] ={"type":"ATTEMPT: STRONGARM-NO WEAPON","total":0};

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Crimes_-_2001_to_present.csv')
});

lineReader.on('line', function (line) {
robberyBurglary(line);
robberyType(line);
crimanalDamage(line);



});

function robberyBurglary(line){

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
     case "2009":  burglary[8].total = burglary[8].total+1;
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
 }


 function robberyType(line){
   var columns  = line.split(",");
   //var count=0;
   //var crimeType={};
   //var crimeValues=[];
  if(columns[5]==='ROBBERY'){

    switch(columns[6]){
      case "ARMED:KNIFE/CUTTING INSTRUMENT":  robberyTypes[0].total =  robberyTypes[0].total+1;
                                             break;
      case "ARMED: OTHER DANGEROUS WEAPON":   robberyTypes[1].total =  robberyTypes[1].total+1;
                                             break;
      case "ARMED: HANDGUN":                  robberyTypes[2].total =  robberyTypes[2].total+1;
                                            break;
      case "ARMED: OTHER FIREARM":           robberyTypes[3].total = robberyTypes[3].total+1;
                                            break;
      case "STRONGARM - NO WEAPON":            robberyTypes[4].total =  robberyTypes[4].total+1;
                                            break;
      case "VEHICULAR HIJACKING":            robberyTypes[5].total = robberyTypes[5].total+1;
                                            break;
      case "AGGRAVATED VEHICULAR HIJACKING":  robberyTypes[6].total =    robberyTypes[6].total+1;
                                             break;
      case "AGGRAVATED":                     robberyTypes[7].total =    robberyTypes[7].total+1;
                                             break;
      case "ATTEMPT: AGGRAVATED":            robberyTypes[8].total =  robberyTypes[8].total+1;
                                             break;
      case "ATTEMPT: ARMED-KNIFE/CUT INSTR": robberyTypes[9].total = robberyTypes[9].total+1;
                                             break;
      case "ATTEMPT: ARMED-OTHER DANG WEAP":  robberyTypes[10].total =  robberyTypes[10].total+1;
                                              break;
      case "ATTEMPT: ARMED-HANDGUN":  robberyTypes[11].total =  robberyTypes[11].total+1;
                                              break;
      case "ATTEMPT: ARMED-OTHER FIREARM":  robberyTypes[12].total =  robberyTypes[12].total+1;
                                              break;
      case "ATTEMPT: STRONGARM-NO WEAPON":  robberyTypes[13].total =   robberyTypes[13].total+1;
                                            break;
      default:"";


    }

  }





 }


function crimanalDamage(line){


  var lines=line.toString().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  lines=lines||[];
  for(var i=0;i<lines.length;i++){
      if(lines[i]=="Primary Type"){
      caseType=i;
    }else if(lines[i]=="Year"){
      yearIndex=i;
    }
    else if(lines[i]=="Description"){
      desc=i;
    }
    }
    if(lines[caseType].toUpperCase()=="CRIMINAL DAMAGE"){
        if(lines[yearIndex]>=2001 || lines[yearIndex]<=2016){
          if(lines[desc]==="TO PROPERTY"){
            for(var i in cases){
              if(cases[i]["year"]===lines[yearIndex]){
                cases[i]["criminalDamageCount"]+=1;
                flag=true;
                break;
              }}
            if(flag==false){
              cases.push({year:lines[yearIndex],criminalDamageCount:1,vehicleCount:0,stateSupCount:0});
            }
            flag=false;
          }
          else if(lines[desc]==="TO VEHICLE"){
            for(var i in cases){
              if(cases[i]["year"]===lines[yearIndex]){
                cases[i]["vehicleCount"]+=1;
                flag=true;
                break;
              }}
            if(flag==false){
              cases.push({year:lines[yearIndex],criminalDamageCount:0,vehicleCount:1,stateSupCount:0});
            }
            flag=false;
          }
          else if(lines[desc]==="TO STATE SUP PROP"){
            for(var i in cases){
              if(cases[i]["year"]===lines[yearIndex]){
                cases[i]["stateSupCount"]+=1;
                flag=true;
                break;
              }}
            if(flag==false){
              cases.push({year:lines[yearIndex],criminalDamageCount:0,vehicleCount:0,stateSupCount:1});
            }
            flag=false;
          }
        }
      }
}
 //console.log(columns);
}

lineReader.on("close",function(){

  //Convert robbery and burglary into json





  var arr1 = [
    {
      "key":"robbery",
      "values":[]
    },
    {
      "key":"Burglary",
      "values":[]
    }


  ];


    arr1[0]["values"] =robbery;
    arr1[1]["values"] =burglary;

  //arr[0]["values"=robbery].push(dataArray);
  //arr[1][burglary].push(dataArrayTwo);

  //console.log(JSON.stringify(arr));

  //Write into a json file
  fs.writeFile("robbery-burglary.json",JSON.stringify(arr1,null,2),"utf-8" );
  fs.writeFile('criminalDamage.json', JSON.stringify(cases, null, 2),"utf-8");
  fs.writeFile('robbery-types.json', JSON.stringify(cases, null, 2),"utf-8");




});
