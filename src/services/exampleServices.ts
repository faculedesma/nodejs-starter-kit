import { Example } from "../types";

const examples = [
  {
    id: 1,
    name: "Example One",
    description: "This is the example one",
    isSomething: false
  },
  {
    id: 2,
    name: "example Two",
    description: "This is the example two",
    isSomething: true
  }
];

const newExample = {
  id: 3,
  name: "Example Three",
  description: "This is the example three",
  isSomething: false
};

export const getExampleData = (): Example[] => examples;

export const addExample = (): Example => newExample;
