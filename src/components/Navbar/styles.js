import styled from 'styled-components';

export const Nav = styled.nav`
  height: 5rem;
  border-bottom: 1px solid #29292e0f;
  background: var(--background);
`;

export const NavContent = styled.div`
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBrand = styled.div`
  img{
    width: 100%;
    height: auto;
  }
`;

export const NavToggler = styled.button`
  border: none;
  position: absolute;
  left: 85%;

  &:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavCollapse = styled.div`
  ul{
    list-style: none;

    display: flex;
    flex-direction:row;
    gap: 1rem;

    padding-left: 0;
    margin-bottom: 0;
    margin-right: auto;

    li{
        a{
          color: black;
          transition: filter 0.2s;
          cursor: pointer;

          font-weight: 400;
          font-size: 15px;
          line-height: 22px;

          text-decoration: none;

        &:hover{
          filter: opacity(0.5);
        }
      }
    }

    @media (max-width: 720px) {
     display: none;
    }
  }
`;