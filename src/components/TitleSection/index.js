import { Title, SubTitle } from "./styles";

export function TitleSection({ title, subtile }) {
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-12 text-center mb-5">
          <Title>{title}</Title>
          <SubTitle>{subtile}</SubTitle>
        </div>

      </div>
    </div>
  );
}