


interface ParamsSearch {
    action: string;
    list: string;
    srsearch: string;
    format: string;
    [key: string]: string | number;
};

interface ParamsCatch {
    action: string;
    prop: string;
    pageids: number;
    format: string;
    formatversion: number;
    exsentences: number;
    exlimit: number;
    explaintext: number;
    [key: string]: string | number;
}

export default async function SearchCity(city:string) {
    try {
        let urlSearch = "https://ru.wikipedia.org/w/api.php"; 
        let paramsSearch:ParamsSearch = {
            action: "query",
            list: "search",
            srsearch: city,
            format: "json"
        };
        urlSearch = urlSearch + "?origin=*";
        Object.keys(paramsSearch).forEach(function(key){urlSearch += "&" + key + "=" + paramsSearch[key];});
        let pageid = await fetch(urlSearch)
                        .then(response => {return response.json()})
                        .then(response => {return response.query.search[0].pageid});

        let urlCatch = "https://ru.wikipedia.org/w/api.php"; 
    
        let paramsCatch:ParamsCatch = {
            action: "query",
            prop: "extracts",
            pageids: pageid,
            format: "json",
            formatversion: 2,
            exsentences: 4,
            exlimit: 1,
            explaintext: 1,
        };
        urlCatch = urlCatch + "?origin=*";
        
        Object.keys(paramsCatch).forEach(function(key){urlCatch += "&" + key + "=" +paramsCatch[key]});

        let text = await fetch(urlCatch).then(response => {return response.json()}).then(response => {return response.query.pages[0].extract});
        return text
    } catch (e) {
        console.log(e);
        
    }
    
}