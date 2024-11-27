// import {url} from "url";

export const LOGO = "https://i.ibb.co/Nn3fkC2/bingeit.png"

export const USER_AVATAR = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_ACCESS_TOKEN,

    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg";

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"}]

// export const GEMINI_API_KEY = process.env.REACT_APP_GEMINIAI_KEY