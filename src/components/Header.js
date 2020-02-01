import React from "react";
import styled from 'styled-components';

const HeaderTitle = styled.h1 `
background:#33ccff;
padding:3% 0;
margin: 0 15%;
border-radius:10px;

`

export default function Header() {
  return (
    <header className="ui centered">
      <HeaderTitle className="ui center">Rick &amp; Morty Fan Page</HeaderTitle>
    </header>
  );
}
