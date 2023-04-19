import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 10;

  padding: 3rem;
  width: 100%;

  .start {
    width: 100%;
  }
`
export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  a {
    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`
