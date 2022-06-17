const {Router} = require('express');
const router = Router();
const fetch = require("node-fetch");


router.get("/search", async function (req, res) {
    try {
        res.status(400).json({message: "Вы должны ввести город"});
    } catch (e) {
        res.status(500).json({message: "Something go wrong..."});
    };
});

router.get("/search/:city", async function (req, res) {
    try {
        let urlSearch = "https://ru.wikipedia.org/w/api.php"; 

        let paramsSearch = {
            action: "query",
            list: "search",
            srsearch: req.params.city,
            format: "json"
        };

        urlSearch = urlSearch + "?origin=*";
        Object.keys(paramsSearch).forEach(function(key){urlSearch += "&" + key + "=" + paramsSearch[key];});

        let pageid = await fetch(urlSearch)
                        .then(response => {return response.json()})
                        .then(response => {return response.query.search[0].pageid});

        let urlCatch = "https://ru.wikipedia.org/w/api.php"; 
    
        let paramsCatch = {
            action: "query",
            prop: "extracts",
            pageids: pageid,
            format: "json",
            formatversion: 2,
            exsentences: 4,
            exlimit: 1,
            explaintext: 1
        };
        urlCatch = urlCatch + "?origin=*";
        Object.keys(paramsCatch).forEach(function(key){urlCatch += "&" + key + "=" + paramsCatch[key];});
        let text = await fetch(urlCatch).then(response => {return response.json()}).then(response => {return response.query.pages[0].extract});
        res.json(text);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: "Something go wrong..."});
    };
});

module.exports = router;