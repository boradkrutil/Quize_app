import axios from "axios"

class Api{
    constructor(){
        // this.baseUrl = "http://localhost:5000"
        this.baseUrl = "https://quize-app-seven.vercel.app"
    }

    listAllQuiz(){
        return axios.get(`${this.baseUrl}/api/quizzes`)
    }
    listQuizById(id){
        return axios.get(`${this.baseUrl}/api/quizzes/${id}`)
    }
    submitQuiz(data){
        return axios.post(`${this.baseUrl}/api/submit`, data)
    }
}

const api = new Api()
export default api
