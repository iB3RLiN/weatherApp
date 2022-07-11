//selctor
const mainform = document.querySelector(".contener form");
const cityInput = document.querySelector(".contener form input");
const apiKey = '634d30eac7cbf386c7671be74534408c';
const resultContener = document.querySelector('.resultContener')






mainform.addEventListener("submit",e => {
    e.preventDefault();
    let inputVal = cityInput.value;
    if(inputVal == ''){
        console.log('no value');
    }
    else{
        console.log(inputVal);
        getApiData(inputVal);
    }
    
})





function getApiData(userInput){
    let apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // console.log(data.length);
        // console.log(typeof(data));
        // console.log(data['name'])
        results(data);
    })
}


function results(obj){
    let objOfWeath = obj;
    let cityName = obj['name'];
    let tempDeg = obj['main']['temp'];
    let icon = obj['weather']['icon'];
    console.log(icon);


    let cityNameChaing = document.createElement('div');
    cityNameChaing.className = 'card';


    let paraghra = document.createElement('p');
    let textNod = document.createTextNode(cityName);
    paraghra.appendChild(textNod);
    cityNameChaing.appendChild(paraghra);
    resultContener.appendChild(cityNameChaing);


    let degParg = document.createElement('p');
    let degTextNod = document.createTextNode(tempDeg);
    degParg.appendChild(degTextNod);
    cityNameChaing.appendChild(degParg);
    resultContener.appendChild(cityNameChaing);




    // console.log(tempDeg)

}

























// let myRequst = new XMLHttpRequest();
    // myRequst.onreadystatechange = function(){
    //     // let myObj = JSON.parse(this.ResponseText);
    //     // console.log(myObj)
    //     if(this.readyState === 4 && this.status === 200){
    //         let myObj = JSON.parse(this.ResponseText);
    //         console.log(myObj);
    //         alert(this.responseText);
    //     }

    //     myRequst.open("GET", apiUrl, true);
    //     myRequst.send();
    // }











// let cityShow = document.querySelector('.card p'),
//     degr = document.querySelector('.card span'),
//     button = document.querySelector('.contener .btn');
    
    
    
// let btn = document.getElementById("btn");







// document.getElementById("btn").addEventListener("click", function() {
//     let cityInput = document.querySelector('.contener input').value;
//     console.log(cityInput)
// });


// button.onclick = ()=>{
//     let cityInput = document.querySelector('.contener input').value;
//     console.log(cityInput)

// }




// function RequstApi(city){
//     let myRequst = new XMLHttpRequest();
    
//     //Setting API
//     let apiKey = '634d30eac7cbf386c7671be74534408c',
//         apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

//     myRequst.onreadystatechange = function(){

//         if(this.readyState === 4 && this.status === 200){
//             let objectOfApi = JSON.parse(this.responseText);
//             myPrint(objectOfApi);
//         }

//         myRequst.open("GET", apiUrl, true);
//         myRequst.send();
//     }
// }

// function myPrint(obj){
//     console.log(obj);
//     console.log(cityInput);

// }
























