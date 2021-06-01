/*function button(){
document.write("Привет Мир!");
  
}*/


document.getElementById('cont').style.display = 'none';
document.querySelector("#but").onclick = function(){
/*document.write("Привет Мир!");*/
    document.getElementById('cont').style.display = 'block';
    
     

}
document.querySelector("#save1").onclick = function(){
    var nazvan = (document.getElementById('namess').value);
   localStorage.setItem('key6', JSON.stringify(nazvan.value) );
localStorage.getItem('key5');
localStorage.getItem('key6');

console.log('nazvan');
}

document.querySelector("#close").onclick = function(){
      document.getElementById('cont').style.display = 'none';
  
}