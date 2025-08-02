import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// characterKey でグローバルに名前を管理
type CharacterNameMap = {
  [characterKey: string]: string;
};

interface CharacterNameContextType {
  names: CharacterNameMap;
  setName: (characterKey: string, name: string) => void;
}

const CharacterNameContext = createContext<CharacterNameContextType | undefined>(undefined);

const loadNamesFromStorage = (): CharacterNameMap => {
  try {
    const storedNames = localStorage.getItem('characterNames');
    return storedNames ? JSON.parse(storedNames) : {};
  } catch (error) {
    console.error("Failed to load character names from storage", error);
    return {};
  }
};

export const CharacterNameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [names, setNames] = useState<CharacterNameMap>(loadNamesFromStorage);

  useEffect(() => {
    try {
      localStorage.setItem('characterNames', JSON.stringify(names));
    } catch (error) {
      console.error("Failed to save character names to storage", error);
    }
  }, [names]);

  const setName = (characterKey: string, name: string) => {
    setNames(prevNames => ({
      ...prevNames,
      [characterKey]: name,
    }));
  };

  const clearName = (characterKey: string) => {
    setNames(prevNames => {
      const newNames = { ...prevNames };
      delete newNames[characterKey];
      return newNames;
    });
  };

  const clearAllNames = () => {
    setNames({});
  };

  return (
    <CharacterNameContext.Provider value={{ names, setName, clearName, clearAllNames }}>
      {children}
    </CharacterNameContext.Provider>
  );
};

export const useCharacterNames = () => {
  const context = useContext(CharacterNameContext);
  if (context === undefined) {
    throw new Error('useCharacterNames must be used within a CharacterNameProvider');
  }
  return context;
};
