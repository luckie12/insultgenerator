const axios = require('axios')
const readline = require('readline')

axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
.then((data) => {
    console.log(data.data.insult)
})

