import React, { memo } from "react";
import { motion } from "framer-motion";

import { useSelectedIdCardContext } from "../CardGrid/context";

interface ICardProps {
  id: number;
}

const Card: React.FC<ICardProps> = ({ id }) => {
  const { setSelectedIdCard } = useSelectedIdCardContext();

  return (
    <motion.div
      className="card"
      layoutId={id.toString()}
      onClick={(e) => {
        e.stopPropagation();
        document.body.style.overflow = "hidden";
        return setSelectedIdCard(id);
      }}
    />
  );
};

export default Card;
