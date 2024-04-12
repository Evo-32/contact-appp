import axios from "axios";
const API = import.meta.env.VITE_BASE_API;

const FetchContact = ()=> {
    return axios.get(API + "/contact/list")
       .then((response) => {
            return response.data;
        })
       .catch((error) => {
            console.log(error);
        });
}

export const AddContacts = ()=> {
    return axios.post(API + "/contact/add")
    .then((response) => {
        return response.data.message;
    })
    .catch((error) => {
        console.log(error);
    });

}

const DeleteContact = ()=> {
    return axios.delete(API + "/contact/delete?id" + id)
    .then((response) => {
        return response.data.message;
    })
    .catch((error) => {
        console.log(error);
    });
}

const UpdateContact = ()=> {
    return axios.put(API + "/contact/update")
    .then((response) => {
        return response.data.message;
    })
    .catch((error) => {
        console.log(error);
    });
}