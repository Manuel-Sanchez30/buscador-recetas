import api from '../services/lib/axios';

export default {
    obtenerCategorias(){
        return api.get('/list.php?c=list')
    }
}

