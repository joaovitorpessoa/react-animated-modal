import React from "react";

import { Card, CardGrid, CardModal } from "./components";

function App() {
  return (
    <CardGrid>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
        <Card id={id} key={id} />
      ))}

      <CardModal />
    </CardGrid>
  );
}

export default App;
