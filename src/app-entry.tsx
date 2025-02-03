import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./shared/store.ts";
import App from "./app";

const root = createRoot(document.body);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
