import React, { Component } from "https://unpkg.com/es-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
    }
  }
}

type Props = {};

export const App = () => {
    return (<p>Hello world!! YAAY</p>);
}