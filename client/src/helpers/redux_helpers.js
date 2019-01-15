export const authHeaders = () => {
    return {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }
}