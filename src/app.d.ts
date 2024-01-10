/// <reference types="@auth/sveltekit" />

import "@auth/sveltekit"

declare module "@auth/sveltekit" {
  interface Session {
    accessToken: string
  }
}
