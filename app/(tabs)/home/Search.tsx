import { useState } from "react";
import { Searchbar } from "react-native-paper";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Buscar"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
