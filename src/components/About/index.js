import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Button } from "../Button";
import { TitleSection } from "../TitleSection";
import { AboutMeSection } from "./styles";

export function About() {
  const [data, setData] = useState();
  useEffect(() => {
    api.get('aboutme/about-me')
      .then(response => setData(response.data))
  }, []);

  return (
    <>
      <AboutMeSection id="about">
        <TitleSection title={data?.tituloSessao} subtile={data?.subTitulo} />
        <div className="container">
          <div className="row aboutmecontent">

            <div className="col-12 col-md-5">
              <img src={data?.imgSection} alt={data?.tituloSessao} className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 aboutmetext">
              <p>{data?.paragrafo}</p>

              <div className="d-flex text-center justify-content-center mt-5">
                <div className="d-flex flex-column mr-3">
                  <h3>03+</h3>
                  <p>Years <br /> Experience</p>
                </div>

                <div className="d-flex flex-column mr-3">
                  <h3>08+</h3>
                  <p>Completed<br /> project</p>
                </div>

                <div className="d-flex flex-column mr-3">
                  <h3>08+</h3>
                  <p>Completed <br /> project</p>
                </div>
              </div>

              <Button name="Download CV" href="#" />
            </div>

          </div>
        </div>
      </AboutMeSection>
    </>
  );
}