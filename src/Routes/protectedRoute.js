import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../fakeAuth/auth";
export default function ProtectedRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenicated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
