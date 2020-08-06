import React from "react"
import "tailwindcss/dist/base.min.css"
import Button from '../components/button/button';
import Container from '../components/container/container';
import Header from '../components/header/header';

export default function Home() {
  return (
    <div style={{backgroundColor: "#1B262C"}}>
      <Header/>
      <Container>
        <Button>Hello world!</Button> 
      </Container>
    </div>
  );
}
