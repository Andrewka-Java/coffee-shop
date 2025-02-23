import { useHttp } from "../hooks/http.hook"

const useCoffeShopService = () => {

    const _api = 'http://localhost:8080/api'

    const { request, clearError, process, setProcess } = useHttp()

    const getAllCoffee = async (search = null, filterByCountry = null, limit = null) => {
        let url = `${_api}/coffee?`;
        if (search) url += `search=${search}&`;  // <-- Fix typo
        if (limit) url += `limit=${limit}&`;
        if (filterByCountry) url += `country=${filterByCountry}`;

        const res = await request(url);
        return res.map(_toCoffee);
    };

    const getCoffee = async (id) => {
        const res = await request(`${_api}/coffee/${id}`)
        return _toCoffee(res)
    }

    const _toCoffee = (coffee) => {
        return {
            id: coffee.id,
            name: coffee.name,
            price: coffee.price,
            country: coffee.country,
            imgName: coffee.imgName
        }
    }

    return { getAllCoffee, getCoffee, clearError, process, setProcess }
}

export default useCoffeShopService