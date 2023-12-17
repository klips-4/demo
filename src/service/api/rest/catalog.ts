import makeRequest from "../httpClient"

export const fetchCatalogData = () => makeRequest({
    method: 'get',
    url: `../src/database/items.json`
})

export const fetchMaterialData = () => makeRequest({
    method: 'get',
    url: `../src/database/materials.json`
})
