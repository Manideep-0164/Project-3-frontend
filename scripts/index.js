
let grainbtn = document.getElementById("grain-processing-machine");
let chainbtn = document.getElementById("chain-saw");

const grainMachine = ()=>{
    let data = {
        category:grainbtn.innerText,
        subCategories:["Agriculture & Gardening - Made In Japan", "Agriculture Implements", "Artificial Grass", "Blowers", "Brush Cutter and Accessories", "Chaff Cutter"]
    }
    localStorage.setItem('category-grain',JSON.stringify(data));
}

const chainSaws = ()=>{
    let data = {
        category:chainbtn.innerText,
        subCategories:['Chainsaw Accessories', "Cordless Chain Saw", "Electric Chain Saw", "Petrol Chain Saw", "Pole Saw"]
    }
    localStorage.setItem('category-chain',JSON.stringify(data));
}

