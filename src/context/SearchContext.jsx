import React, { createContext, useState } from "react";

const initialState = {
  searchValue: "",
  setSearchValue: () => {},
};

const SearchContext = createContext(initialState);

export function SearchContextProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
