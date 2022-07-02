import styled from "styled-components"
import Product from "./Product"

import popularproducts from "../dumb"

const Container = styled.div`
     padding:20px;
     display:flex;
     flex-wrap:wrap;
`;



const Products = () => {
  return (
      <Container>
        {
            popularproducts.map(item=>{
                return(
                    <Product item = {item} key = {item.ID}/>
                )
            })
        }
      </Container>
  )
}

export default Products
