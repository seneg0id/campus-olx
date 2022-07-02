import { FavoriteBorder } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex  :1;
  margin :5px;
  min-width:280px;
  height:380px;
  background-color:white;
`;

const Text = styled.p`

`
const Image = styled.img`

`
const Icon = styled.div`

`
const Circle = styled.div`

`
const Info = styled .div`
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src =  {item.image}/>
        <Info>
            <Icon>
                <FavoriteBorder />
            </Icon>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
        </Info>
    </Container>
  )
}

export default Product
