let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch("http://localhost:3000/locations")
        .then(response => response.json())
        .then(parsedLocations => {
            locations = parsedLocations
        }
    )
}
        