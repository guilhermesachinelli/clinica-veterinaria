class Pet {
    constructor(tutor, namePet, specie, photo, date) {
        this.tutor = tutor;
        this.namePet = namePet;
        this.specie = specie;
        this.photo = photo;
        this.date = date;
        this.age = this.calculateAge();
    }

    calculateAge() {
        const today = new Date();
        const birthdate = new Date(this.date);
        let age = today.getFullYear() - birthdate.getFullYear();
        const m = today.getMonth() - birthdate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        return age;
    }
}
class PetList {
    constructor() {
        this.petLista = [];
    }
    addPet(pet) {
        if (anyInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        }else if (!isURLValida(pet.photo)) {
            envieMsg("URL inválida", "erro");
        }else {
        this.petLista.push(pet);
        showPet();
        cleaerFields();
        envieMsg("Pet Cadastrado", "success");
        }
    }
}
const petList = new PetList();
function createPet() {
    let tutor = document.getElementById("tutor").value;
    let namePet = document.getElementById("name-pet").value;
    let specie = document.getElementById("species").value;
    let photo = document.getElementById("photo").value;
    let date = document.getElementById("date").value;
    const pet = new Pet(tutor, namePet, specie, photo, date);
    petList.addPet(pet);
    console.log(petList);
}
function showPet() {
    const cotent = document.getElementById("pet-container");
    cotent.innerHTML = "";
    petList.petLista.forEach(pet => {
        const petDiv = `
        <div class="pet-card">
        <img src="${pet.photo}" alt="${pet.namePet}">
        <p><b>Nome do Tutor:</b>${pet.tutor}<p>
        <p><b>Nome do Pet:</b>${pet.namePet}</p>
        <p><b>Espêcie:</b>${pet.specie}</p>
        <p><b>Data de Nascimento:</b>${ dateinPTBR(pet.date)}</p>
        <p><b>Idade:</b>${pet.age}</p>
        </div>
        `;
        cotent.innerHTML += petDiv;
    });
};
function cleaerFields() {
    document.getElementById("tutor").value = "";
    document.getElementById("name-pet").value = "";
    document.getElementById("species").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("date").value = "";
};
function anyInputs() {
    let tutor = document.getElementById("tutor").value;
    let namePet = document.getElementById("name-pet").value;
    let specie = document.getElementById("species").value;
    let photo = document.getElementById("photo").value;
    let date = document.getElementById("date").value;
    if (tutor == "" || namePet == "" || specie == "" || photo == "" || date == "") {
        return true;
    } else {
        return false;
    }
}
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";
    let msgParaTela = `
     <p class="${tipoMsg}">${msg}</p> `
    msgDiv.innerHTML += msgParaTela;
    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}
function dateinPTBR(date) {
    return date.split('-').reverse().join('/')
}
function showRegister(){
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("pet-container").classList.add("hidden");
    document.getElementById("pet-card").classList.add("hidden");
}
function showListpet(){
    document.getElementById("container").classList.add("hidden");
    document.getElementById("pet-container").classList.remove("hidden");
    document.getElementById("pet-card").classList.remove("hidden");
}