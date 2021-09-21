import React from "react";
import { AnimateSharedLayout } from "framer-motion";

import { SelectedIdCardProvider } from "./context";

const CardGrid: React.FC = ({ children }) => {
  return (
    <div className="container-card-grid">
      <AnimateSharedLayout type="crossfade">
        <SelectedIdCardProvider>{children}</SelectedIdCardProvider>
      </AnimateSharedLayout>
    </div>
  );
};

export default CardGrid;
