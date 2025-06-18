import { authClient } from "@/lib/auth-client"; // import the auth client

const { data, error } = await authClient.signup.email({
  email,
  password, /// user  password => min 8 charachters by default 
  name, // user display name
  image,
  challbackURL: "/dashboard"
}, {
  onRequest: (ctx) => {
    // show loading

  },
  onSucess: (ctx) => {
    /// redirect to the dashboard or  sign in page
  }, {
    // display the error message
    alert(ctx.error.message);

  },
});

