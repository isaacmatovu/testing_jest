function capitalize(name){
    if(!name){
        return undefined
    } else{
        return name[0].toUpperCase() + name.slice(1)
    }
}

function reverseString(name){
      return name.split("").reverse().join("")
}


function analyze(Books){

 const average= Books.reduce((a,b)=> a + b ,0) / Books.length;
 const min =  Math.min(...Books);
 const max =  Math.max(...Books);
 const length=Books.length;


 return {
   average,
    min, 
   max,
   length
};

 

}




export {capitalize, reverseString, analyze}

