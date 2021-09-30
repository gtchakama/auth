import React from "react"
import View from "./View"
import { getCurrentUser } from "../utils/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <View title="Your Profile ">
      <p>Welcome back to your profile, {name}!</p>
      <p>
        This is a client-only route. You could set up some awesome tools for the
        user on this page.
      </p>
    </View>
  )
}

export default Profile
