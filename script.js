const tableValue = document.getElementById('tb-value');

fetch('https://api.covid19api.com/summary')
    .then(apiData => {
        return apiData.json();
    })
    .then(actualData => {
        console.log(actualData);
        console.log(actualData.Countries.length);

        // Added rows in html Table and data insert dynamically
        for (let i = 1; i < actualData.Countries.length; i++) {
            //insert a row on dom table
            let row = tableValue.insertRow();

            // insert a cell on above row on very first postion
            row.insertCell(0);
            // On Dom element of 1st row and 1st col add this data
            tableValue.rows[i].cells[0].innerText = actualData.Countries[i-1].Country;
            tableValue.rows[i].cells[0].style.background='#7a4a91';
            tableValue.rows[i].cells[0].style.color='#fff';

            row.insertCell(1);
            tableValue.rows[i].cells[1].innerText = actualData.Countries[i-1].TotalConfirmed;
            tableValue.rows[i].cells[1].style.background='#4bb7d8';

            row.insertCell(2);
            tableValue.rows[i].cells[2].innerText = actualData.Countries[i-1].TotalRecovered;
            tableValue.rows[i].cells[2].style.background='#9cc850';

            row.insertCell(3);
            tableValue.rows[i].cells[3].innerText = actualData.Countries[i-1].TotalDeaths;
            tableValue.rows[i].cells[3].style.background='#f36e23';

            row.insertCell(4);
            tableValue.rows[i].cells[4].innerText = actualData.Countries[i-1].NewConfirmed;
            tableValue.rows[i].cells[4].style.background='#4bb7d8';

            row.insertCell(5);
            tableValue.rows[i].cells[5].innerText = actualData.Countries[i-1].NewRecovered;
            tableValue.rows[i].cells[5].style.background='#9cc850';

            row.insertCell(6);
            tableValue.rows[i].cells[6].innerText = actualData.Countries[i-1].NewDeaths;
            tableValue.rows[i].cells[6].style.background='#f36e23';
        }


        // const data = actualData.Countries[127];
        // document.getElementById('show-content').innerHTML = `The name of the country is ${data.Country}. The Total Confirmed Cases is ${data.TotalConfirmed}. and the Total Deaths is ${data.TotalDeaths}. and the Total Recovered cases is ${data.TotalRecovered}`;
    })
    .catch(err => {
        console.log(`The Error: ${err}`)
    })
