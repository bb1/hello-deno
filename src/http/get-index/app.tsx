// @deno-types="https://servestjs.org/@v1.1.7/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
      h1: any;
      button: any;
      input: any;
    }
  }
}

type Props = {};

export const App = () => {
    return (
        <>
            <h1>Hello Deno</h1>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Log in</button>
        </>
    );
}