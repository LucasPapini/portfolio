import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Banner } from "./styles";
import { Button } from "../Button";

export function Header() {
  const [data, setData] = useState();

  useEffect(() => {
    api.get('slide/slide-home')
      .then(response => setData(response.data))
  }, []);

  return (
    <Banner>
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-6">
            <h2>{data?.tituloSlide}</h2>
            <h4>{data?.subTitulo}</h4>
            <p>{data?.texto}</p>
            <Button name="Contact Me"/>
          </div>

          <div className="col-12 col-md-6">
            <img src={data?.imagemSlide} alt={data?.tituloSlide} className="img-fluid" />
          </div>

        </div>
      </div>
    </Banner>
  );
}