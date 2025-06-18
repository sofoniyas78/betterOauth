import { authClient } from "@/lib/auth-client" // import the auth client
 
const { data: session, error } = await authClient.getSession()

export function User() {
  const {
    data: session,
    ispending, // loading state
    error, // error object
    refetch// refetch the session
  } = authClient.useSesssion()

  return (
    // ...
  )
}