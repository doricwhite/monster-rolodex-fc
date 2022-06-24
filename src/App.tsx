/* Hooks */
import { useState, useEffect, ChangeEvent } from "react";

import { getData } from "./utils/data.utils";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

export type Monsters = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  /* */
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = evt.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  /* useEffect to mitigate against infinite re-rendering */
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monsters[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      setMonsters(users);
    };

    fetchUsers();
  }, []);

  /** */
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      {/* Search Input */}
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
