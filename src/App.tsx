import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

import { Example } from "./Example";

import "@shopify/polaris/build/esm/styles.css";
// import "./styles.css";

export default function App() {
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <AppProvider i18n={enTranslations}>
      <Example />
    </AppProvider>
  );
}
