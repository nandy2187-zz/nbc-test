//service.js
import data from '../data/data';

const service = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    })
}

export default service;