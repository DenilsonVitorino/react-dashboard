import { URL_API } from './base';

export function consultarFaturamento(callback) {
    fetch(`${ URL_API }/Faturamento`)
        .then(resultado => resultado.json().then(callback));    
}