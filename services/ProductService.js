import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://challenge-api.sollenaturals.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getProducts() {
    let response = await apiClient.get(
      `/products`
    )

    response.data.products.sort((a, b) => {
      if (a.sequence > b.sequence) return 1
      if (a.sequence < b.sequence) return -1
      return 0
    })

    return response.data.products
  },

  async getProduct(id) {
    let response = await apiClient.get(`/products/${id}`)

    return response.data.product
  }
}
