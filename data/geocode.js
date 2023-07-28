const request = require("request")
const geocode = (country, callback) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoibWFkZWwzMDAiLCJhIjoiY2xra3JqcHMyMGZ2MDNxbnMwamh4MWNpeCJ9.ND97bSird6x6UJIgxnTDlg`
    request({url: geocodeUrl, json: true}, (error, response) => {
        if (error) {
            callback (`can not connect with weather page`, undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        }else if (response.body.features.length == 0) {
            callback (`Your country not found`, undefined)
        } else {
            callback(undefined, {
                longtitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]
            } )
        }
    })
}

module.exports = geocode