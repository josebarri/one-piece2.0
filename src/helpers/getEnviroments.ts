
export const getEnviroments = () => {

    return {
        // VITE_API_PREDICCION: import.meta.env.VITE_API_PREDICCION,
        // VITE_API_INSUMOS: import.meta.env.VITE_API_INSUMOS,
        VITE_BASE_URL: import.meta.env.VITE_BASE_URL
        // AWS_BUCKET_IMAGES: import.meta.env.VITE_AWS_BUCKET_IMAGES,
    }
}