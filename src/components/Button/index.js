import { ButtonCP } from './styles';


export function Button({ href, name }) {
  return (
    <a href={href}>
      <ButtonCP
        className="btn"
        name={name}
      >
        {name} 
      </ButtonCP>
    </a>
  )
}