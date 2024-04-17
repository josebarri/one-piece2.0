import oneApi from "@/services/oneApi";

import type {  fruData } from '../interface';

// este toca realizarlo en el componente porque no resive nongun parametro
const useFrut = () => {

    const getFrut = async () => {
        try {
            const URL_API = `v2/fruits/fr`;
            const { data, status } = await oneApi.put(URL_API)
            return { data, status }
        } catch (error) {
            console.log(error);
            return { error };
        }
    }
    const frutId = async (id: string) => {
        try {
            const URL_API = `fruits/fr/${id}`;
            const { data, status } = await oneApi.get(URL_API);
            return { data, status }
        } catch (error) {
            console.log(error);
            return { error };
        }
    }

    
    return {
        getFrut,
        // getOfferById,
        // frutId,
        // deleteCharacteristic,
        // putCharacteristic,
        // getQuestionsByOfferId,
        // patchQuestionAnswer,
        // deleteCharacVehiculo,
        // addTextCharacteristic,
        // addImageCharacteristic,
        // CrearVehiculo,
        // addImagenVehiculo,
        // putVehiculo,
        // putZonaProduction,
    }


}
    export default useFrut;