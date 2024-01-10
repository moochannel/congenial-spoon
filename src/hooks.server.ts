import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
	callbacks: {
		jwt: async ({ token, account }) => {
			if (account) {
				token.accessToken = account.access_token
			}
			return token
		},
		session: async ({ session, token }) => {
			session.accessToken = token.accessToken as string
			return session
		},
	},
})
