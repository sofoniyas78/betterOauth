import { authClient } from "./auth-client"

const enableTwoFactor = async() => {
  const data = await authClient.twoFactor.enable({
    password // the user pssowrd is requred
  }) // this will enable two facor
}

const disableTwoFactor = async() => {
  const data = await authClient.twoFacor.disable({
    password// the user password is requreid
  }) // this will dsable two facor 
}

const signInWith2Factor = async() => {
  const data = await authClient.signIn.email({
    // ..
  })
  // if the user has two facor enabled it will will redirect to the two facor
}
const verifyOTP = async() => {
  const dat = await authClient.twoFactor.verifyOTP({

    code: "12345",

    trustDevice: true
  })
}