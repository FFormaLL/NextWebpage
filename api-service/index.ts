import axios from 'axios'
import { API_HOST } from '~/config'
import { base64Encode } from '~/hooks'

export type OAuthVendor = {
    vendorId: string
    vendorName: string
    brandIcon: string
    brandColor: string
    redirectUrl: string
}

export class TokenRefreshAPI {
    public static async InspectAccessToken(accessToken:string) {}
    public static async RefreshAccessToken(accessToken:string) {}
}

export class DextoolsAPI {
    public static async GetCryptoPrice():Promise<number> {
        try {
        const { data } = await axios.get(`https://www.dextools.io/shared/data/pair?address=0xc9c9c0c9a70355b0afb47571c37d6f7c5220e36d&chain=ether`)
        return data.data[0].price
        } catch (e) {
            return -1
        }
    }
}

export class AuthAPI {
    public static async OAuthVendors() {
        const { data } = await axios.get(`${API_HOST}/auth/vendors`)
        return data
    }
    public static async OAuthLogin(vendor:string, oauthCode:string) {
        const { data } = await axios.post(`${API_HOST}/auth/vendor/${vendor}/${oauthCode}`)
        return data
    }
    public static async OAuthAccountLink(vendor:string, oauthCode:string, userJwt:string) {
        const { data } = await axios.put(`${API_HOST}/auth/vendor/${vendor}/${base64Encode(oauthCode)}`, {}, {
            headers: { 'x-jwt': userJwt }
        })
        return data
    }
    public static async OAuthAccountUnlink(vendor:string, userJwt:string) {
        const { data } = await axios.delete(`${API_HOST}/auth/vendor/${vendor}`, {
            headers: { 'x-jwt': userJwt }
        })
        return data
    }
}

// This can be removed once API integration is setup
export class MockAuthAPI {
    public static async OAuthVendors() {
        return [
            {
                vendorId: 'discord',
                vendorName: 'Discord',
                brandIcon: '/icons/discord.svg',
                brandColor: '#5a67d8',
                redirectUrl: 'https://discord.com/api/oauth2/authorize?client_id=1048062091669553182&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Fdiscord&response_type=code&scope=identify',
            },
            {
                vendorId: 'twitch',
                vendorName: 'Twitch',
                brandIcon: '/icons/twitch.svg',
                brandColor: '#6441A4',
                redirectUrl: '#',
            },
        ]
    }
}
