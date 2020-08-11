import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")

export {
    checkForName,
    handleSubmit
}

/* Global Variables */
const baseUrl='http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey='76a469593954e6e2dc828c770a16ff2f';

document.addEventListener('click', pullWeather);


function pullWeather(event) {
    

    console.log("::: Clicked :::")
    fetch(baseUrl+'94114'+'&appid='+apiKey)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data.main.temp);
        document.getElementById('temp').innerHTML = data.main.temp
    })
}

export { pullWeather }

