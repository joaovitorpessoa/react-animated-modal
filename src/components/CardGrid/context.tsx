import React, { createContext, useContext, useState } from "react";

interface ISelectedIdCardContext {
  selectedIdCard: number | undefined;
  setSelectedIdCard: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const SelectedIdCardContext = createContext({} as ISelectedIdCardContext);

const SelectedIdCardProvider: React.FC = ({ children }) => {
  const [selectedIdCard, setSelectedIdCard] = useState<number | undefined>();

  return (
    <SelectedIdCardContext.Provider
      value={{ selectedIdCard, setSelectedIdCard }}
    >
      {children}
    </SelectedIdCardContext.Provider>
  );
};

const useSelectedIdCardContext = (): ISelectedIdCardContext => {
  const context = useContext(SelectedIdCardContext);

  if (!context) {
    throw new Error(
      "useSelectedIdCardContext must be used within a SelectedIdCardProvider"
    );
  }

  const { selectedIdCard, setSelectedIdCard } = context;

  return { selectedIdCard, setSelectedIdCard };
};

export { SelectedIdCardProvider, useSelectedIdCardContext };
