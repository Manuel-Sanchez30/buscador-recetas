import {openrouter} from './lib/ia'
import { streamText } from 'ai';


export default{
    async generarReceta(prompt){
        const resultado = streamText({
            model: openrouter('meta-llama/llama-3.2-1b-instruct:free'),
            prompt
        })
        return resultado.textStream
    }
}