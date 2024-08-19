# React Redux

State management library.

- redux is availble for all js based apps.

- to use in react -- react-redux

- updated library -- redux-toolkit (more abstraction)

- better dataflow in redux than context API

Redux & RTK concepts-

- Store, reducers, useSelector, UseDispatch

## Installation

```
npm install react-redux
```

```
npm install @reduxjs/toolkit
```

## Coniguration

- configureStore

```
<!-- src/folder_name/store.js -->

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({})

```

- reducers, initalState, Slices

```
<!-- src/features/todo/todoSlice.js -->

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

```

- initialState

how the store looks initially
(can be array or object)

- reducer

is a functionality that contains properies & functions

reducer have access to -
state, action

- slices are one step up of reducers

dispatch changes store values using reducers
