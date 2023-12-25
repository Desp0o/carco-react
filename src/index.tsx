import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");

// Ensure container is not null before passing it to createRoot
const root = createRoot(container ?? document.body);
root.render(<App />);
