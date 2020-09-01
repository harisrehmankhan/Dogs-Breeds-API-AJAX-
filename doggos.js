const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// status, message;


// const promise = fetch(DOG_URL);

// promise.then(function(response){
//     const processingPromise = response.json();
//     return processingPromise;
// }).then(function(processedPromise){
//     console.log(processedPromise);
//     console.log(processedPromise.message);

// });

var spval=[];
var breedur=[];
var vval;

const doggos = document.querySelector(".doggos");

function addNewDogo(){
    const promise= fetch(DOG_URL);
    promise.then(function(response){
        const processingPromise=response.json();
        return processingPromise;
    }).then(function(processedPromise){
        const imG= document.createElement("img");
        imG.src= processedPromise.message;
        imG.alt="Cute Doggo";
        doggos.appendChild(imG);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDogo);

// Start Breed Select Lis API

const BREED_URL = "https://dog.ceo/api/breeds/list/all";
const dogfr = document.querySelector(".dog-frame");

const prom = fetch(BREED_URL);

prom.then(function(res){
const proc= res.json();
return proc;
}).then(function(prprom){
   const ur=prprom.message;
   const sel = document.createElement("select");
   sel.id="salact";
    sel.style="margin-left: 612px; margin-bottom: 10px;"
   dogfr.appendChild(sel); 
//    console.log(Object.keys(ur)[1]);

for(i=0; i<Object.keys(ur).length; i++){
    const op = document.createElement("option");
    spval[i]=Object.keys(ur)[i];
    
    op.value=Object.keys(ur)[i];
    op.innerHTML=Object.keys(ur)[i];

    // console.log(Object.keys(ur)[i]);
    sel.appendChild(op);
    
}
// console.log(Object.keys(ur).length);
// console.log(spval[0]);


// for(i=0;i<spval.length;i++){
//     breedur[i]= "https://dog.ceo/api/breed/"+spval[i]+"/images/random";
// // console.log(breedur[i]); //hre
        
// }



});




// const sal= document.querySelector(".")

document.querySelector(".breed-doggo").addEventListener("click",function(){
        // console.log("this.value");
    
    vval= document.querySelector("#salact").value;
    console.log(vval);
    addBDogo(vval);
});

function addBDogo(vval){
    console.log("Ethy a vy..");
var uri= "https://dog.ceo/api/breed/"+vval+"/images/random";
console.log(uri);

    const promise= fetch(uri);
    promise.then(function(response){
        const processingPromise=response.json();
        return processingPromise;
    }).then(function(processedPromise){
        const imG= document.createElement("img");
        imG.src= processedPromise.message;
        imG.alt="Breed Doggo";
        doggos.appendChild(imG);
    });
}






// 
// 
