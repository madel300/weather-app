const request = require ("request")

const forecast = (longtitude, latitude, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=2e1e9ca1b0844e09b85111907232707&q=${longtitude},${latitude}`
    request({url, json:true}, (error, response) => {
        if (error) {
            callback(`can not connect with weather page`, undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        } else {
            callback(undefined, `Country name is : ${response.body.location.name}
Weather is : ${response.body.current.condition.text}
temperature is : ${response.body.current.temp_c}`)
        }
    })
}

module.exports = forecast