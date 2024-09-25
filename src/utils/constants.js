export const LOGO = "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"

export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"

export const SUPPORTED_LANGUAGES = [{identifier : "en", name : "English"},{identifier : "kannada", name : "Kannada"},{identifier : "hindi", name : "Hindi"}]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY 