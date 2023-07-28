const forecast = require("./data/forecast.js")
const geocode = require(`./data/geocode.js`)

const country = process.argv[2]

geocode(country, (error, data) => {
    if (error) {
        console.log (`ERROR : ${error}`)
    } else {
        console.log(`longtitude : ${data.longtitude}`)
        console.log(`latitude : ${data.latitude}`)
    }
    if (data) {
        forecast(data.longtitude, data.latitude, (error, data) => {
            if (error) {
                console.log (`ERROR : ${error}`)
            } else {
                console.log(data)
            }
        })
    }
}) 