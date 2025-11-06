export const API_KEY = "AIzaSyBM3k3Ip7D6ETl9G8rlT7n0b_YEJeQzLdg";

export const value_converter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if (value>=1000) {
        return Math.floor(value/1000)+"K"
    }
    else {
        return value
    }
}