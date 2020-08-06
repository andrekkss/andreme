import tw, { styled } from "twin.macro" //highlight-line

const Container = styled.div`
  ${tw`
  container 
  min-w-full
  min-h-full
  w-screen 
  h-screen 
  px-4
  bg-primary`}
`

export default Container