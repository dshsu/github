import axios from 'axios';

const BPAL_API_BASE_URL = "http://localhost:8080/api/display";

class BPALService {

    getBPAL(){
        return axios.get(BPAL_API_BASE_URL);
    }

    createBPAL(perfume){
        return axios.post(BPAL_API_BASE_URL, perfume);
    }

    getBPALById(perfumeId){
        return axios.get(BPAL_API_BASE_URL + '/' + perfumeId);
    }

    updateBPAL(perfume, perfumeId){
        return axios.put(BPAL_API_BASE_URL + '/' + perfumeId, perfume);
    }

    deleteBPAL(perfumeId){
        return axios.delete(BPAL_API_BASE_URL + '/' + perfumeId);
    }
}

export default new BPALService()

