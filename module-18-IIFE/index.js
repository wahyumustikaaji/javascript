(function() {
    console.log("Hello World")
})();

const appConfig = (function(){
    const API_KEY = '1234'
    const BASE_URL = 'https://api.key'

    return {
        getApiKey: function(){
            return API_KEY
        },
        getBaseUrl: function(){
            return BASE_URL
        }
    }
})()

console.log(appConfig.getApiKey())
console.log(appConfig.getBaseUrl())