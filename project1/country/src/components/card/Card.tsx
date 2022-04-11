import { Wrapper, Flag, Paragraph, Span } from "./Card.styles";
import { CountryType } from "../../App";

type CardPropsType = {
  country?: CountryType;
};

const Card = ({ country }: CardPropsType): JSX.Element => {
  return (
    <Wrapper>
      <Flag flagImg={country && country.flag} />
      <Paragraph>
        <Span>Name</Span> : <Span>{country?.name}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Capital</Span> : <Span>{country?.capital}</Span>
      </Paragraph>
      <Paragraph>
        <Span>Population</Span> : <Span>{country?.population}</Span>
      </Paragraph>
    </Wrapper>
  );
};

export default Card;
