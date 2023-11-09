
var aktivneVrsteZadataka=[1,2,5,6,7];
var MOD=100;

var rezultat,indeksVrsteZadatka=-1;
rezultat=new Array(100);
for(var i=0;i<=99;i++)rezultat[i]=0;
povecajRezultat(1,0);
var trenVrstaZadatka=0;
class Zadatak{
    constructor(vrstaZadatka,tekstZadatka,izraz, trazenaPromenljiva,resenje){
        this.vrstaZadatka=vrstaZadatka;
        this.tekstZadatka=tekstZadatka;
        this.izraz=izraz;
        this.trazenaPromenljiva=trazenaPromenljiva;
        this.resenje=resenje;
    }
}
var  trenZadatak=new Zadatak();

window.onload=GenerisiZadatak();
document.getElementById('UnosTextBox').focus();

/*document.getElementById('UnosTextBox').onblur = function () {
    setTimeout(function () {
        document.getElementById('UnosTextBox').focus();
    });
};*/

document.addEventListener('keydown', function(event){
    if(event.keyCode == 13 )Provera();
  })
function GenerisiZadatak(){
    indeksVrsteZadatka++;
    if(indeksVrsteZadatka>=aktivneVrsteZadataka.length)indeksVrsteZadatka=0;
    trenVrstaZadatka=aktivneVrsteZadataka[indeksVrsteZadatka];

    if(trenVrstaZadatka==1) trenZadatak=ZadatakSabiranje();
    else if(trenVrstaZadatka==2) trenZadatak=ZadatakOduzimanje();
    else if(trenVrstaZadatka==3) trenZadatak=ZadatakMnozenje();
    else if(trenVrstaZadatka==4) trenZadatak=ZadatakDeljenje();
    else if(trenVrstaZadatka==5) trenZadatak=ZadatakNepSabirak();
    else if(trenVrstaZadatka==6) trenZadatak=ZadatakNepUmanjenik();
    else if(trenVrstaZadatka==7) trenZadatak=ZadatakNepUmanjilac();
    else if(trenVrstaZadatka==8) trenZadatak=ZadatakNepCinilac();
    else if(trenVrstaZadatka==9) trenZadatak=ZadatakDeljenik();
    else if(trenVrstaZadatka==10) trenZadatak=ZadatakDelilac();
    
    document.getElementById('TekstZadatka').innerHTML=trenZadatak.tekstZadatka;
    document.getElementById('Izraz').innerHTML=trenZadatak.izraz;
    document.getElementById('TrazenaPromenjiva').innerHTML=trenZadatak.trazenaPromenljiva;
    
    return;
}

  function Provera(){

    var unosPar=document.getElementById('UnosTextBox').value;
    if(unosPar=='')return;
    else if(unosPar==trenZadatak.resenje){
        povecajRezultat(trenZadatak.vrstaZadatka,1);
        ZabeleziIstoriju(trenZadatak.izraz,unosPar,1);        
        ZadatakResen();
    }
        else {
            povecajRezultat(trenZadatak.vrstaZadatka,0);        
            ZabeleziIstoriju(trenZadatak.izraz,unosPar,0);
        }
    document.getElementById('UnosTextBox').value='';
    return;
    
}
function ZadatakResen(){
    GenerisiZadatak();
    return;
}
function povecajRezultat(vrstaZadatka,tacnost){
    rezultat[vrstaZadatka]+=parseInt(tacnost);
    rezultat[0]+=parseInt(tacnost);
    document.getElementById('Task'+vrstaZadatka+'Value').innerHTML=rezultat[vrstaZadatka];
    document.getElementById('UkupnoValue').innerHTML=rezultat[0];
    return;
}
function ZabeleziIstoriju(izraz, unos, tacnost){
    for(var i=1;i<=5;i++){
        if(document.getElementById('IstorijskiZapis'+i).style.visibility=='hidden'){
            document.getElementById('IstorijskiZapis'+i).style.visibility='visible';
            
            document.getElementById('IstorijskiZapis'+i).querySelector('#IstorijaIzraz').innerHTML=izraz;
            document.getElementById('IstorijskiZapis'+i).querySelector('#IstorijaTrazenaPromenljiva').innerHTML=trenZadatak.trazenaPromenljiva;
            document.getElementById('IstorijskiZapis'+i).querySelector('#IstorijaUnos').value=unos;
            if(tacnost==0)document.getElementById('IstorijskiZapis'+i).style.backgroundColor='#CA9787';
            return;
        }        
    }
    for(var i=1;i<=4;i++){
        document.getElementById('IstorijskiZapis'+i).querySelector('#IstorijaIzraz').innerHTML=document.getElementById('IstorijskiZapis'+(i+1)).querySelector('#IstorijaIzraz').innerHTML;
        document.getElementById('IstorijskiZapis'+i).querySelector('#IstorijaTrazenaPromenljiva').innerHTML=document.getElementById('IstorijskiZapis'+(i+1)).querySelector('#IstorijaTrazenaPromenljiva').innerHTML;
        document.getElementById('IstorijskiZapis'+i).querySelector('#IstorijaUnos').value=document.getElementById('IstorijskiZapis'+(i+1)).querySelector('#IstorijaUnos').value;
        document.getElementById('IstorijskiZapis'+i).style.backgroundColor=document.getElementById('IstorijskiZapis'+(i+1)).style.backgroundColor;
    }
        document.getElementById('IstorijskiZapis5').querySelector('#IstorijaIzraz').innerHTML=izraz;
        document.getElementById('IstorijskiZapis5').querySelector('#IstorijaTrazenaPromenljiva').innerHTML=trenZadatak.trazenaPromenljiva;
        document.getElementById('IstorijskiZapis5').querySelector('#IstorijaUnos').value=unos;
        if(tacnost==0)document.getElementById('IstorijskiZapis5').style.backgroundColor='#CA9787';
        else document.getElementById('IstorijskiZapis5').style.backgroundColor='#95BD96';
      
    
    
    //istorijaIzrazi.push({Zadatak:izraz, Unos:unos, Rez:tacnost});
    
    return;
}



//Zadatci
function ZadatakSabiranje(){
    var a=Math.round(Math.random()*MOD);
    var b=Math.round(Math.random()*MOD);
    return new Zadatak(1,"Rešiti jednačinu:",a+'+'+b+'=?',"Resenje:",a+b);
}
function ZadatakOduzimanje(){
    var a=Math.round(Math.random()*MOD);
    var b=Math.round(Math.random()*MOD);
    if(a<b)[a,b]=[b,a];
    return new Zadatak(2,"Rešiti jednačinu:",a+'-'+b+'=?',"Resenje:",a-b);
}
function ZadatakMnozenje(){
    var a=Math.round(Math.random()*MOD/3);
    var b=Math.round(Math.random()*MOD/3);
    return new Zadatak(3,"Rešiti jednačinu:",a+'×'+b+'=?',"Resenje:",a*b);
}
function ZadatakDeljenje(){
    var a=Math.round(Math.random()*MOD/3)+1;
    var b=Math.round(Math.random()*MOD/3)+1;
    return new Zadatak(4,"Rešiti jednačinu:",a*b+'/'+a+'=?',"Resenje:",b);
}
function ZadatakNepSabirak(){
    var a=Math.round(Math.random()*MOD);
    var b=Math.round(Math.random()*MOD);
    return new Zadatak(5,"Rešiti jednačinu:",a+'+X'+'='+ (a+b),"X=",b);
}
function ZadatakNepUmanjenik(){
    var a=Math.round(Math.random()*MOD);
    var b=Math.round(Math.random()*MOD);
    if(a<b)[a,b]=[b,a];
    return new Zadatak(6,"Rešiti jednačinu:",'X'+'-'+b+'='+ (a-b),"X=",a);    
}
function ZadatakNepUmanjilac(){
    var a=Math.round(Math.random()*MOD);
    var b=Math.round(Math.random()*MOD);
    if(a<b)[a,b]=[b,a];
    return new Zadatak(7,"Rešiti jednačinu:",a+'-X'+'='+ (a-b),"X=",b);    
}
function ZadatakNepCinilac(){
    var a=Math.round(Math.random()*MOD/3);
    var b=Math.round(Math.random()*MOD/3);
    if(a>b)   return new Zadatak(8,"Rešiti jednačinu:",a+'×X'+'='+(a*b),"Resenje:",b);
    else return new Zadatak(8,"Rešiti jednačinu:",'X×'+b+'='+(a*b),"X=",a);
}
function ZadatakDeljenik(){
    var a=Math.round(Math.random()*MOD/3)+1;
    var b=Math.round(Math.random()*MOD/3);
    return new Zadatak(9,"Rešiti jednačinu:",'X/'+a+'='+b,"X=",a*b);
}
function ZadatakDelilac(){
    var a=Math.round(Math.random()*MOD/3)+1;
    var b=Math.round(Math.random()*MOD/3)+1;
    return new Zadatak(10,"Rešiti jednačinu:",(a*b)+'/X'+'='+b,"X=",a);
}
