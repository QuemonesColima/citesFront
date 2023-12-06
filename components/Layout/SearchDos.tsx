import { Searchbar } from "react-native-paper";
import { type SetStateAction, useState } from "react";

const SearchDos = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: SetStateAction<string>) => {
    setSearchQuery(query);
  };

  return (
    <Searchbar
      placeholder="Buscar por título, autor o género"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchDos;
