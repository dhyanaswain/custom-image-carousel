import axios from 'axios'

const fetchData = async () => {
	const api = `https://demo5110359.mockable.io/images`
	const res = await axios.get(api)
	return res.data
}

export default fetchData
