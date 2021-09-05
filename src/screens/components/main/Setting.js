import React from 'react'
import auth from "../auth/authentication";

export default function Setting(props) {
    return (
        <div>
            Setting
            <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
        </div>
    )
}
