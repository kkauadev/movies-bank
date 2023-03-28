import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [inputData, setInputData] = useState("");

  const navigate = useNavigate();
  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`search/${inputData}`);
  };

  return (
    <header
      id="header"
      className="shadow-md px-[1rem] sm:px-[7rem] py-[1.2rem] flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0"
    >
      <Link className="text-3xl" to="/">
        Movie Bank
      </Link>
      <nav className="flex justify-between items-center gap-10 text-xl list-none">
        <li className="hidden sm:block">
          <Link className="hover:text-gray-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <form onSubmit={(e) => search(e)} className="p-0 sm:p-2 flex gap-2">
            <input
              onChange={(e) => setInputData(e.target.value)}
              className="border border-solid border-black rounded text-lg p-2"
              type="text"
              placeholder="Encontrar filme..."
            />
            {inputData && inputData != "" && (
              <button
                type="submit"
                className="px-5 py-3 text-sm rounded-md bg-green-600 hover:bg-green-800"
              >
                Pesquisar
              </button>
            )}
          </form>
        </li>
      </nav>
    </header>
  );
};
