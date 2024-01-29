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

data.tools.forEach(tool => {

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
    </div>
    </div>
    </div>
    
    `
    // // console.log(data.tools[0].image);
    
    mainContainer.appendChild(divElement);
    
});
       

    }

loadTrend();