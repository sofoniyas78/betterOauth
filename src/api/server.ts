/*API
When you create a new Better Auth instance, it provides you with an api object. This object exposes every endpoint that exist in your Better Auth instance. And you can use this to interact with Better Auth server side.

Any endpoint added to Better Auth, whether from plugins or the core, will be accessible through the api object.*/
/*Calling API Endpoints on the Server
To call an API endpoint on the server, import your auth instance and call the endpoint using the api object*/


import { betterAuth } from 'better-auth';
import { headers } from 'next/headers';
import { APIError } from "better-auth/api";
 
try {
    await auth.api.signInEmail({
        body: {
            email: "",
            password: ""
        }
    })
} catch (error) {
    if (error instanceof APIError) {
        console.log(error.message, error.status)
    }
}

export const auth = betterAuth({
  //...
});
await auth.api.getSession({
  headers: await headers(),
});

await auth.api.signInEmail({
  body: {
    email: 'john@doe.com',
    password: 'password',
  },
  headers: await headers(), // optional but would be useful to get the user IP, user agent, etc.
});

await auth.api.verifyEmail({
  query: {
    token: 'my_token',
  },
});
