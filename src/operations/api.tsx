// export const BASE_URL="http://localhost:3000/api/v1"


export const BASE_URL = import.meta.env.VITE_BASE_URL
export const endPoints={
    SIGN_UP:`${BASE_URL}/signup`,
    SIGN_IN:`${BASE_URL}/signin`,
    CONTENT:`${BASE_URL}/content`,
    SHARE:`${BASE_URL}/brain/share`,
    LINK:`${BASE_URL}/brain/:shareLink`,
    STATUS:`${BASE_URL}/status`,
    TAG:`${BASE_URL}/tag`
}

// SIGN_UP: `${BASE_URL}/signup`,
// SIGN_IN: `${BASE_URL}/signin`,
// CONTENT: `${BASE_URL}/content`,
// SHARE: `${BASE_URL}/brain/share`,