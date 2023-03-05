import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [inputData, setInputData] = useState("");

  const navigate = useNavigate();
  const search = () => {
    navigate(`search/${inputData}`);
  };

  return (
    <header
      id="header"
      className="px-[1rem] sm:px-[7rem] py-[2rem] flex justify-between flex-col sm:flex-row gap-2 sm:gap-0"
    >
      <Link className="text-3xl" to="/">
        Movie Bank
      </Link>
      <div className="flex items-center justify-center sm:block">
        <ul className="flex justify-between items-center gap-10 text-xl">
          <li className="hidden sm:block">
            <Link className="hover:text-gray-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <div className="p-0 sm:p-2 flex gap-2">
              <input
                onChange={(e) => setInputData(e.target.value)}
                className="border border-solid border-black rounded text-lg p-2"
                type="text"
                placeholder="Encontrar filme..."
              />
              {inputData && inputData != "" && (
                <button
                  onClick={() => search()}
                  className="px-5 py-3 text-sm rounded-md bg-green-600 hover:bg-green-800"
                >
                  Pesquisar
                </button>
              )}
            </div>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};
