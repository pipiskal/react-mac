import React, { useState } from "react";
import { Wrapper, Search } from "./App.styles";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import getCountries from "./services/ApiCallServices";

export type CountryType = {
  capital: string;
  flag: string;
  name: string;
  population: number;
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [country, setCountry] = useState<CountryType>();

  const getCountryInfo = async () => {
    const data = await getCountries(inputValue);
    const { name, capital, population, flags } = data;
    setCountry({
      name: name.common,
      capital: capital[0],
      population,
      flag: flags.png,
    });
  };

  return (
    <div className="App">
      <Wrapper>
        <Search>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            onClick={() => setInputValue("")}
            value={inputValue}
          />
          <Button
            kind="primary"
            size="lg"
            onClick={() => getCountryInfo()}
          ></Button>
        </Search>

        <Card country={country} />
      </Wrapper>
    </div>
  );
}

export default App;
