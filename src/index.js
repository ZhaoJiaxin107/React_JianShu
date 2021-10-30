import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
// 引入Provider, 引入store
import { Provider } from "react-redux";
import store from "./store";



// 声明一个App组件，然后这个组件用 Provider进行包装
const App = (
    <Provider store = {store}>
        <TodoList />
    </Provider>
)
ReactDOM.render(
    App, document.getElementById('root')
);


