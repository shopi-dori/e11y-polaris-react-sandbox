import { Page, Card, Button } from "@shopify/polaris";

// Polaris starter example: https://github.com/Shopify/polaris/tree/main/polaris-react#usage
export function Example() {
  return (
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert("Button clicked!")}>Example button</Button>
      </Card>
    </Page>
  );
}
