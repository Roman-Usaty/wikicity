import CSVToArray from "./CSVHelper";
import CyrillicToTranslit from 'cyrillic-to-translit-js';


export default async function GetGeoIdTime(city:string): Promise<string> {
    try {
        const cyrillicToTranslit = CyrillicToTranslit({preset:"ru"});
        let geoidArr = await fetch(require("./geoid.csv")).then(async function (response) {
            return CSVToArray(await response.text(), ";");
        });
        
        let geoid = geoidArr.find(element => {
            return element[1] === city;
        }) || null;
        if (geoid === null) {
            geoid = geoidArr.find(element => {
                console.log(cyrillicToTranslit.transform(city));
                return element[1] === cyrillicToTranslit.transform(city);
            }) || null;
        }
        if (geoid === null) {
            throw new Error("Город не найден");
        }
        
        return geoid[0];
    } catch (error) {
        console.log(error);
        return "1";
    }
}