
var tasks=new Array();
    for(var i=0;i<100;i++)tasks.push({Naslov:'', Text:''});

    tasks[1].Naslov='Sabiranje';
    tasks[2].Naslov='Oduzimanje';
    tasks[3].Naslov='Množenje';
    
    tasks[4].Naslov='Deljenje';
    
    tasks[5].Naslov='Nepoznati sabirak';
    
    
    tasks[6].Naslov='Nepoznati umanjenik';
    
    
    tasks[7].Naslov='Nepoznati umanjilac';
    
    
    tasks[8].Naslov='Nepoznati činilac';
    
    
    tasks[9].Naslov='Nepoznati deljenik';
    
    
    tasks[10].Naslov='Nepoznati delilac';
    
    

var istorijaIzrazi=new Array();


function PromeniTutorijal(taskNumber){
    
    document.getElementById('NazivTutorijala').innerHTML=tasks[taskNumber].Naslov;
    document.getElementById('OpisTutorijala').innerHTML=tasks[taskNumber].Text;
    document.getElementById('SlikaTutorijala1').src='./assets/Task'+taskNumber+'_1.svg';
    document.getElementById('SlikaTutorijala2').src='./assets/Task'+taskNumber+'_2.svg';

    
}




