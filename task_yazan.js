function ageInDays(){
    var birthYear=prompt("what year were you born ... Good friend?");
    var ageInDays =(2018 - birthYear)*365;
var h1=document.createElement('h1');
var textAnswer =document.createTextNode('you are'+ageInDays+'days');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);


}

function reset(){
    document.getElementById('ageInDays').remove();

}

----------------------------------------
/*they other*/ 

var index=Math.floor(Math.random()*arrays.length);

function Getindex(arrays){
    var index=Math.floor(Math.random()*arrays.length);
    return index;
}
var btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
    
    
    pic.src=arrays[Getindex(arrays)];
    //console.log(Getindex(arrays));
});
