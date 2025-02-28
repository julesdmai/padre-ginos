import React from "react";
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Pineapples",
    }),
    React.createElement(Pizza, {
      name: "The New York",
      description: "I'm walkin' ova 'ere",
    }),
    React.createElement(Pizza, {
      name: "The Chicago",
      description: "Deep dish",
    }),
    React.createElement(Pizza, {
      name: "The Canadian",
      description: "Maple syrup",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
