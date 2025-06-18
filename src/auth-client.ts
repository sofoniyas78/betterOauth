/* client configuration
once wer're done with server we need to add the plugin to the clinet to this you need to import the plugin and pass it to the plugings options of the auth client for expample to add two factor authentication you cnas see the folowing code*/

import { createAuthClient } from "better-auth/client";
import { twoFactorClient } from "better-auth/client/plugins";

const authClient = createAuthClient({
  plugins: [
    twoFactorClient({
      twoFactorPage: "/two-factor"// the pafe to redirect if 
    })
  ]
})