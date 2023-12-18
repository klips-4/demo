import makeRequest from "../httpClient"

export const fetchCatalogData = () => makeRequest({
    url: `../src/database/items.json`
})

export const fetchMaterialData = () => makeRequest({
    url: `../src/database/materials.json`
})
