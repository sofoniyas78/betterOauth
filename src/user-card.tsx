await authClient.signOut({
  fetchOptions: {
    onSucess: () => {
      router.push("/login"); /// reidrect to login page


    },
  },
});