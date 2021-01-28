
const url2 = `http://bootcamp.podlomar.org/api/departures`

class Trains{

    constructor(id, hours, mins, status, name, dest) {
        
        this.id = id;
        this.hours = hours;
        this.mins = mins;
        this.status = status;
        this.name = name;
        this.destination = dest
    }

    .





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
        <td>${train.hours}:${train.mins}</td>
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
    let dId = e.getAttribute("data");


    for (let i = 0; i < trains.length; i++) {
        if(trains[i].id === dId) {
            if (trains[i].status === "delayed") {
                trains[i].status = "on time";
            } else {
                trains[i].status = "delayed"
            } break;
        }
    }
    updateAll();
}

// event listeners

button.addEventListener("click", newTrain);


///// ///// ///// ///// ///// ///// ///// ///// /////   run

fetch(url2)
    .then((result) => 
        result.json())
    .then((data) => {


    data.forEach(train => {
        trains.push(new Trains(train.no, train.time.hrs, train.time.mins, train.status ,train.train, train.to))
    });
});

updateAll();

