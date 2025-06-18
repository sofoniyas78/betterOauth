/*erver-Side Authentication
To authenticate a user on the server, you can use the auth.api methods.*/

import { auth } from "./auth";

const response = await auth.api.signInEmail({
  body: {
    email,
    password
  },
  asResponse: true // returns    response object
});