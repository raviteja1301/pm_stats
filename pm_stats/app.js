const url="./data.json";
const table = document.querySelector("table");
window.addEventListener("DOMContentLoaded", function () {
    loadTableData(url,table);
  });

async function loadTableData(url, table) {
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const {data} = await response.json();
    console.log(data);

    tableBody.innerHTML = "";

    for (const row of data){
        const rowElement = document.createElement("tr");

        for(const cellText of row){
            const cellElement = document.createElement("td");
            cellElement.textContent = cellText;
            if(cellText == "Listening"){
                cellElement.style.backgroundColor = "green";
            } else if (cellText == "Not Listening"){
                cellElement.style.backgroundColor = "red";
            }
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    }

    
}

const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{loadTableData(url,table)});