export interface SearchWeatherResponse {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    rain:       Rain;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
}

export interface Rain {
    "1h": number;
}

export interface Sys {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}


// {
//     "coord": {
//         "lon": -122.3321,
//         "lat": 47.6062
//     },
//     "weather": [
//         {
//             "id": 500,
//             "main": "Rain",
//             "description": "light rain",
//             "icon": "10n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 277.31,
//         "feels_like": 277.31,
//         "temp_min": 276.01,
//         "temp_max": 278.54,
//         "pressure": 1022,
//         "humidity": 92
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 0.45,
//         "deg": 338,
//         "gust": 1.79
//     },
//     "rain": {
//         "1h": 0.22
//     },
//     "clouds": {
//         "all": 90
//     },
//     "dt": 1638668179,
//     "sys": {
//         "type": 2,
//         "id": 2004026,
//         "country": "US",
//         "sunrise": 1638632448,
//         "sunset": 1638663540
//     },
//     "timezone": -28800,
//     "id": 5809844,
//     "name": "Seattle",
//     "cod": 200
// }