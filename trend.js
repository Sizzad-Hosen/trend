let showAll = false;

const loadTrend=async()=>{

    const url =`https://openapi.programming-hero.com/api/ai/tools`
  
    try{

        const res = await fetch(url);
        const data = await res.json();
        displayTrend(data.data);
     
    }
    catch(error){
        console.log(error);
    }
}

// dispaly show data load
    const displayTrend =(data)=>{

        const mainContainer =document.getElementById('container-main');
   mainContainer.innerHTML='';

   const seeAll = document.getElementById('seeAll');
   if(data.tools.length> 6){

    seeAll.classList.remove('d-none');
   }
   else{
    seeAll.classList.add('d-none');
   }

// slice kore only 6 iteams nibo
// data.tools=data.tools.slice(0,6);


// spiner 
const displayedData = showAll ? data.tools : data.tools.slice(0, 6);

displayedData.forEach(tool => {
                
                console.log(tool);
                
                
                const divElement =document.createElement('div');
                
                divElement.classList.add('col');
                divElement.innerHTML = `      <div class="col">
                <div class="card h-100">
                <img src="${tool.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text"> <b> Features </b> <br>
                1.Natural language processing <br>
                2.Contextual understanding <br>
                3.Text generation.</p>
                </div>
                <div class="card-footer">
                <h5 class="card-title"> <b> ${tool.name} </b> </h5>
                <small class="text-body-secondary"><i class="fa-solid fa-calendar-check"></i> 11/01/2022</small>

                <button onclick="loadDetails(${tool.id})"  type="button" class=" p-2 btn btn-primary " data-bs-toggle="modal" data-bs-target="#trendModal">
    Details
  </button>
                </div>
                </div>
                </div>
                
                `
                // // console.log(data.tools[0].image);
                
                mainContainer.appendChild(divElement);
                   
                
            });
            // stop loader
            toggleBar(false);
            
            
        }
       
            document.getElementById('btn-showAll').addEventListener('click',function(){

                toggleBar(true);
            
                showAll = !showAll;
                
                loadTrend();
                
            })


            // loader section
            const toggleBar =(isLoading)=>{
                
               const loading = document.getElementById('loader');
               if(isLoading){
                loading.classList.remove('d-none');
               }


               else{
                loading.classList.add('d-none');
               }
       }

       const loadDetails =( search) => {
        const url =`https://openapi.programming-hero.com/api/ai/tool/${search}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayDetails(data))
        // console.log(idMeal);
       }
      
    //    load details

    const loadDetails2=async(search)=>{
        const url = `https://openapi.programming-hero.com/api/ai/tool?${search}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            displayDetails(data);
        }
        catch(error){
            console.log(error);
        }
    }
//  // ??????
    const displayDetails = (data)=>{
       const modal= document.getElementById('trendExample') ;
       modal.innerHTML =`${data.name}`;

        const trendDetails = document.getElementById('trendBody');

        trendDetails.innerHTML =`
        <img class="img-fluid" src="${data.image}">
        `
        // console.log(data.tool.name);


        // loadTrend(modal);
    }
 
    loadTrend();