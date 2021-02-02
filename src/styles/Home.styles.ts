import styled from 'styled-components'

export const Navbar = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90px;

  .container {
    width: 100%;
    max-width: 1032px;
    margin: 0 auto;
    padding: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-block {
      width: fit-content;
    }
    .menu-block {
      width: fit-content;

      ul {
        list-style: none;

        li {
          display: inline-block;
          list-style: none;
          margin-left: 24px;
        }

        li:first-child {
          margin-left: 0;
        }
      }
    }
  }
`
