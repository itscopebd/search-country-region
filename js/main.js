document.getElementById("region__list").addEventListener("change",function(e){
    const region=e.target.value;
    dataLoad(region)
})

const dataLoad= async(region="asia")=>{
   
    const url=`https://restcountries.com/v3.1/region/${region}`;

   try{
    const res= await fetch(url);
    const data= await res.json();
    diplayData(data)
   }
   catch(err){
    console.log(err)
   }

}
const diplayData=(data)=>{
    const cardLoad= document.getElementById("cardLoad");
    cardLoad.innerHTML="";
data.forEach(element => {
    console.log(element)
  
    const {capital,name,languages,region,flags}=element;
    const div= document.createElement("div");
    let lan="";
    for (const key in languages) {
       lan=languages[key];
    }
    div.classList.add("col");
    div.innerHTML=`
    <div class="card">
    <img style="height:200px" src="${flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Name: ${name ? name.common :"No Name" }</h5>
      <h5 class="card-title">Capital: ${capital ? capital[0] :"No Capital" }</h5>
      <h5 class="card-title">Languages: ${lan ? lan :"No Languages" }</h5>
      <h5 class="card-title">Region: ${region ? region :"No Region" }</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
    
    `;
    cardLoad.appendChild(div)
});
}
dataLoad();