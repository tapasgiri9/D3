var fs= require('fs');
 //var count=0;
 var dataRobbery = {};  // Crimanal damage- vehicle,property,state sup property

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
lineReader.on("close",function(){
var arr=[];


//  arr.push(robberyTypes);
//console.log(JSON.stringify(robberyTypes));

//Write into a json file
fs.writeFile("robbery-types.json",JSON.stringify(robberyTypes),"utf-8" );




  //console.log(armedKnife[0]);

//  console.log(stateSupProperty);
});
