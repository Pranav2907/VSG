var a;
var b;
function myfunction(){
    var a = document.getElementById('linkp');
    var b = a.value;
    
    return b;
}
function study(){
    var c = myfunction();
   window.location.href = c;
}