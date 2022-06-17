const {Router} = require('express');
const router = Router();
const fetch = require("node-fetch");
const fs = require('fs');
const cyrillicToTranslitJs = require("cyrillic-to-translit-js");

const changeLetter = new cyrillicToTranslitJs();

function CSVToArray( strData, strDelimiter ){

    strDelimiter = (strDelimiter || ",");

    var objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
        );

    var arrData = [[]];

    var arrMatches = null;

    while (arrMatches = objPattern.exec( strData )){
        var strMatchedDelimiter = arrMatches[ 1 ];
        if (
            strMatchedDelimiter.length &&
            (strMatchedDelimiter != strDelimiter)
            ){
            arrData.push( [] );
        }
        if (arrMatches[ 2 ]){
            var strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
                );

        } else {
            var strMatchedValue = arrMatches[ 3 ];

        }
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    return( arrData );
}

router.get('/geoid/:city', async (req, res)=> {
    try {
        let geoidArr = CSVToArray(fs.readFileSync("./geoid.csv", 'utf-8'), ";")

        let geoid = geoidArr.find(element => {
            return element[1] === req.params.city;
        }) || null;
        if (geoid === null) {
            geoid = geoidArr.find(element => {
                console.log(changeLetter.transform(req.params.city));
                return element[1] === changeLetter.transform(req.params.city);
            }) || null;
        }
        if (geoid === null) {
            res.status(404).json({message: "Город не найден"});
        }
        res.json(geoid[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json("Spmething go wrong...");
    }
    
})

module.exports = router;