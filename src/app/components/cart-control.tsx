import styled from "styled-components";
import { useLocalStorage} from "../hooks/user-LocalStorage";
import { CartIcon } from "./shopping-icon";


const CartCount = styled.span`
width:17px;
height:17px;
left:1263px;
top:43px;
background: #DE3838;
color:white;
position:absolute;
right: -10px;
top: 50%;

`
const Container = styled.div`
position: relative;

`
export function CartControl(){
    const{value} = useLocalStorage('cart-items')

    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>

    )

}