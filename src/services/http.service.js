import axios from "axios";

function getProducts() {
    return axios.get("http://localhost:3000/product", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });
}

export default {
    getProducts
}