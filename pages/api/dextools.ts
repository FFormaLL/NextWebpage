import { DextoolsAPI } from "~/api-service"

export default async (req, res) => {
    const price = await DextoolsAPI.GetCryptoPrice()
    res.send(price)
}
