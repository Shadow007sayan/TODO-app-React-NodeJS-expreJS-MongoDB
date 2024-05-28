import axios from 'axios'

const baseUrl = "http://localhost:8080"

const getAllToDo =(setToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        console.log('data ------>',data);
        setToDo(data);
    })
}

const addToDo=(text,setText,setToDo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
}

export {getAllToDo,addToDo}