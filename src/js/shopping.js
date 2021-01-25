class Trains{

    constructor(id, hours, mins, name, dest) {
        
        this.id = id,
        this.hours = hours,
        this.mins = mins,
        this.name = name,
        this.destination = dest

    }
}

// globals

let trains = [];

const inputs = document.querySelectorAll(".formfield");
const button = document.getElementById("button");

// Functions

const newTrain = () => {

    let arg = [];

    inputs.forEach(e => {
        arg.push(e.value);
    });

    trains.push(
        new Trains(arg[0], arg[1], arg[2], arg[3], arg[4])
        );

}

// event listeners

button.addEventListener("click", newTrain);









// run

trains.push({id: "121", hours: "10", mins: 34, name: "bob", destination: "paris"});
trains.push({id: "432", hours: "11", mins: 04, name: "jane", destination: "berlin"});
trains.push({id: "653", hours: "11", mins: 56, name: "tom", destination: "york"});
trains.push({id: "457", hours: "12", mins: 34, name: "rob", destination: "praha"});
trains.push({id: "115", hours: "15", mins: 34, name: "ivan", destination: "kiev"});