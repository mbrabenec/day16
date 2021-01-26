class Trains{

    constructor(id, time, status, name, dest) {
        
        this.id = id,
        this.time = time,
        this.status = status,
        this.name = name,
        this.destination = dest
    }
}

// globals

let trains = [];

const inputs = document.querySelectorAll(".formfield");
const button = document.getElementById("button");
const tbody = document.getElementById("table__body");

// Functions


const newTrain = () => {

    let arg = [];

    inputs.forEach(e => {
        arg.push(e.value);
    });

    trains.push(new Trains(arg[0], arg[1], arg[2], arg[3], arg[4]));

    updateAll();
}


const updateAll = () => {

    trains.sort((a,b) => a.time - b.time);

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    trains.forEach((train) => {

        let time = Math.floor(train.time /60)+":"+(train.time % 60);

        let newRow = document.createElement('tr');
        newRow.id = train.id;
        
        newRow.innerHTML = `
        
        <td>${train.id}</td>
        <td>${time}</td>
        <td class ="status" data="${train.id}">${train.status}</td>
        <td>${train.name}</td>
        <td>${train.destination}</td>
        <td><input type="button" value = "delayed" onclick="delayed(this)" data="${train.id}"></td>
        <td><input type="button" value = "delete" onclick="del(this)" data="${train.id}"></td>
        `
        tbody.appendChild(newRow);

        if(train.status === "delayed") newRow.style.background="red";
    });
}


function del(e) {

    let toDel = e.getAttribute("data");

    let arrayIndex;
    for (let i = 0; i < trains.length; i++) {
        if(trains[i].id === toDel) {
            arrayIndex = i;
            break;
        }
    }
    trains.splice(arrayIndex, 1);

    document.getElementById(toDel).remove();

    updateAll();
}


function delayed(e) {

    console.log(e);
    let dId = e.getAttribute("data");

}
    for (let i = 0; i < trains.length; i++) {
        if(trains[i].id === dId) {
            if (trains[i].status !== "on time") {
                trains[i].status = "on time";
            } else {
                trains[i].status = "delayed"
            } break;
        }
    }
    updateAll();


// event listeners

button.addEventListener("click", newTrain);


///// ///// ///// ///// ///// ///// ///// ///// /////   run

trains.push({id: "121", time: 540, status: "on time", name: "bob", destination: "paris"});
trains.push({id: "432", time: 640, status: "on time", name: "jane", destination: "berlin"});
trains.push({id: "653", time: 340, status: "delayed", name: "tom", destination: "york"});
trains.push({id: "457", time: 140, status: "on time", name: "rob", destination: "praha"});
trains.push({id: "115", time: 430, status: "on time", name: "ivan", destination: "kiev"});

updateAll();