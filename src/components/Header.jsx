//Header.jsx
import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

export default function Header({ setCategoryFilter }) {
  return (
    <div>
      <SearchBar />
      <Navbar setCategoryFilter={setCategoryFilter} />
    </div>
  );
}
