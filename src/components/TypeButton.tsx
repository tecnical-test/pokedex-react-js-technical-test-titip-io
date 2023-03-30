import React, { useState } from "react";

const TypeButton = ({ types }) => {
  const [value, setValue] = useState("");
  const typeList = types.map((type) => {
    return (
      <option key={type.name} value={type.url}>
        {type.name}
      </option>
    );
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Filter by type: </label>
      <select
        name="type"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {typeList}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TypeButton;
