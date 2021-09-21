import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Card } from "..";
import { useSelectedIdCardContext } from "../CardGrid/context";

const CardModal: React.FC = () => {
  const { selectedIdCard, setSelectedIdCard } = useSelectedIdCardContext();

  return (
    <AnimatePresence>
      {selectedIdCard && (
        <motion.div
          className="modal-overlay"
          onClick={(e) => {
            e.stopPropagation();
            document.body.style.overflowY = "unset";
            return setSelectedIdCard(undefined);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card id={selectedIdCard} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardModal;
