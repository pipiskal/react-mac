const url = "https://restcountries.com/v3.1/name/";

export const getCountries = async (country: string) => {
  try {
    const response = await fetch(url + country);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

export default getCountries;
