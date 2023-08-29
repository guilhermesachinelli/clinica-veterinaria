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
        this.petList = [];
    }
    addPet(pet){
        this.petList.push(pet);
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