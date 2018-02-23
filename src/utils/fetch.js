import axios from 'axios';
function translateParam(param) {
    if (typeof(param) === 'object') {
        let newParam = [];
        for (let key in param){
        if (param[key] instanceof Array) {
            newParam.push(`${key}=${encodeURIComponent(JSON.stringify(param[key]))}`);
        } else {
            newParam.push(`${key}=${encodeURIComponent(param[key])}`);
        }
        }
        return newParam.join('&');
    }
    return param;
}


export function fetch(url, params={}, data={}) {
    return axios({
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        params: params,
        data: translateParam(data)
    }).then(respone => respone.data)
}