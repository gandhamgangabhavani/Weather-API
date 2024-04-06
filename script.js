//  Accessing all the HTML values
const Inputval = document.getElementById("inputval");
const BtnEle = document.getElementById("btn");
const TempEle = document.getElementById("temp");
const descriptionEle = document.getElementById("description");
const locationEle = document.getElementById("location");
const ImgIcon = document.getElementById("icon");

let Apikey = "075454cc7d2bbbbd10856aa78943bb80"

BtnEle.addEventListener("click" , () =>{
    if(Inputval.value == ' '){
        alert("plz enter location")
    }
    else{
        // vartiable to store location value
        let loc = Inputval.value

        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${Apikey}`;

        fetch(url)
        .then((res) => res.json()) // response header  = converting into pbject form
        .then((da) => {
            console.log(da);
            // object disctructuring
            const { name } = da; //da.name
            const { feels_like } = da.main;
            const { description } = da.weather[0];
            const { icon } = da.weather[0];

            // displaying data in the html  page dynmically hased user given loction
            locationEle.innerText = name
            TempEle.innerText = Math.round((feels_like - 273))    // converting to  kelvin to degree
            descriptionEle.innerText = description
            ImgIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

        }) // object data
        .catch(() => {
            alert("Enter the corrext the location")
        })
    }
    Inputval.value = "";
})