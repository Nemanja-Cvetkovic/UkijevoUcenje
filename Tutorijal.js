
var tasks=new Array();
    for(var i=0;i<100;i++)tasks.push({Naslov:'', Text});

    tasks[1].Naslov='Sabiranje';
    tasks[1].Text='Da bi sabrao dva broja, probaj zapisati ih jedan ispod drugog';

    tasks[2].Naslov='Oduzimanje';
    tasks[2].Text='Da bi sabrao dva broja, probaj zapisati ih jedan ispod drugog';

    tasks[3].Naslov='Množenje';
    tasks[3].Text='Da bi sabrao dva broja, probaj zapisati ih jedan ispod drugog';

    tasks[4].Naslov='Deljenje';
    tasks[4].Text='Da bi sabrao dva broja, probaj zapisati ih jedan ispod drugog';


var istorijaIzrazi=new Array();


function PromeniTutorijal(taskNumber){
    
    document.getElementById('NazivTutorijala').innerHTML=tasks[taskNumber].Naslov;
 
}




