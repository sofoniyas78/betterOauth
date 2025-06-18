/*To sign in using a social provider you need to call signIn.social. It takes an object with the following properties: */
import { authClient } from '@/lib/auth-client'; // import the auth cclient

await authClient.signIn.social({
  /**
   * The social provider ID
   * @example "github", "google", "apple"
   */
  provider: 'github',
  /**
   * A URL to redirect if an error occurs during the sign in process
   */
  errorCallbackURL: '/error',
  /**
   * A url to redirect if the user is newly registered
   */
  newUserCallbackURL: '/welcome',
  /**
   * disable the automatic redirect to the provider
   * @default false
   */
  dsiableRedirect: true,
});
