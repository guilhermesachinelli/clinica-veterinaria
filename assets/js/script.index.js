class Pet{
    constructor(tutor,namePet,specie, photo, date){
        this.tutor = tutor;
        this.namePet = namePet;
        this.specie = specie;
        this.photo = photo;
        this.date = date;
    }
}
class PetList{
    constructor(){
        this.petLista = [];
    }
    addPet(pet){
        this.petLista.push(pet);
        showPet();
    }
}
const petList = new PetList();
function createPet(){
    let tutor = document.getElementById("tutor").value;
    let namePet = document.getElementById("name-pet").value;
    let specie = document.getElementById("species").value;
    let photo = document.getElementById("photo").value;
    let date = document.getElementById("date").value;
    const pet = new Pet(tutor,namePet,specie,photo,date);
    petList.addPet(pet);
    console.log(petList);
}
function showPet(){
    const cotent = document.getElementById("pet-container");
    cotent.innerHTML = "";
    petList.petLista.forEach(pet =>{
        const petDiv = `
        <h2>Nome do Tutor:${pet.tutor}</h2>
        <p>Nome do Pet:${pet.namePet}</p>
        <p>Espêcie:${pet.specie}</p>
        <img src="${pet.photo}" alt="${pet.namePet}">
        <p>Data:${pet.date}</p>
        `;
        cotent.innerHTML += petDiv;
});
}
