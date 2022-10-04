import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TitleSection } from "../TitleSection";
import { SkillsMeySection } from './styles';

export function Skills() {
  const [data, setData] = useState();
  useEffect(() => {
    api.get('skills/skills')
      .then(response => setData(response.data))
  }, []);
  return (
    <SkillsMeySection id="skills">
      <TitleSection title={data?.tituloSessao} subtile={data?.subTitulo} />

      <div className="container">
        <div className="row">

          <div className="col-12 col-md-3 mt-5 mb-3 d-flex flex-column">
            <h2>Front-end <br/> Developer</h2>
            <span>More that 4 year</span>
          </div>

          <div className="col-12 col-md-9 d-flex align-items-center justify-content-center">
            {data?.incosFrontEnd.map((img) => (
              <img src={img} key={img} className="img-fluid mr-5"/>
            ))}
          </div>

          <div className="col-12">
            <hr/>
          </div>

          <div className="mt-5 mb-5"></div>

          <div className="col-12 col-md-3 mt-5 mb-3 d-flex flex-column">
            <h2>Back-end <br/> Developer</h2>
            <span>More that 4 year</span>
          </div>

          <div className="col-12 col-md-9 d-flex align-items-center">
            {data?.iconsBackEnd.map((img) => (
              <img src={img} key={img} className="img-fluid mr-5"/>
            ))}
          </div>

          <div className="col-12">
            <hr/>
          </div>

          <div className="mt-5 mb-5"></div>

          <div className="col-12 col-md-3 mt-5 mb-3 d-flex flex-column">
            <h2>Tools <br/> Disignes</h2>
            <span>More that 4 year</span>
          </div>

          <div className="col-12 col-md-9 d-flex align-items-center">
            {data?.iconsTools.map((img) => (
              <img src={img}  key={img} className="img-fluid mr-5"/>
            ))}
          </div>

          <div className="col-12">
            <hr/>
          </div>

        </div>
      </div>
    </SkillsMeySection>
  );
}