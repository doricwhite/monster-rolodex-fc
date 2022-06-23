import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

// TS Object
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      /* Action for when name is searched */
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
