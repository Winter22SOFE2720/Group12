let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let flightInput = document.querySelector('#Name');
let ArrivalInput = document.querySelector('#Arrival');
let RunwayInput = document.querySelector('#Number');

const x = ["Available", "Busy"];
const store = [1, 2, 3, 4];


btnAdd.addEventListener('click', () => {
    let flightName = flightInput.value;
    let arrival = ArrivalInput.value;
    let num = RunwayInput.value;
    let num2 = Math.floor(Math.random() * 1001);
    let status = x[1];


    // for (let i = 0; i < store.length; i++) {
    //     if (num == store[i]) {
    //         store.splice(i, 1);
    //         status = x[i];

    //     }
    //     else {
    //         alert("WRONG INPUT YOU DUMBASS ");
    //         break;
    //     }

    // }

    if (arrival >= "9:05") {
        alert("The runway is busy try again later");



    }

    else {




        let template = `
                <tr>
                    <td>${flightName}</td>
                    <td>${num2}</td>
                    <td>${arrival}</td>
                    <td>${num}</td>
                    <td>${status}</td>
                </tr>`;

        table.innerHTML += template;
    }



});

