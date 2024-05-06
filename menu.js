class beachVaca{
    constructor(vacations){
        this.vacations = vacations;
    }

    displayBeachImages(){
        const section = document.getElementById('beach-images');
        this.vacations.forEach(vacation => {
            const img = document.createElement('img');
            img.src = vacation.src;
            img.style.width = '250px';
            img.style.margin = '150px';
            img.style.height = '250px';
            section.appendChild(img);
    
    });
    }
}

const beachVacation = new beachVaca([
    {src:'images/breakfast1.jpg',},
    {src:'images/breakfast2.jpg'},
    {src:'images/breakfast3.png'}
]);

document.addEventListener('DOMContentLoaded',()=>{
    beachVacation.displayBeachImages();
});

//code demo for week 10
    //Async function to fetch data from a placeholder API, type jsonplaceholder.typicode.com and use the link. 
async function fetchData(){
    try{  //try...catch is a convenient way for error handling. 
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }
    catch {
        console.error('Fetching data failed');
    }
        
}
    // call the fetchData function when the window loads
document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
});

