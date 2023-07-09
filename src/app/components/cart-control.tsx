import styled from "styled-components";
import { useLocalStorage } from "../hooks/user-LocalStorage";
import { CartIcon } from "./shopping-icon";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  background: #de3838;
  color: white;
 margin-left: -10px;
 font-size: 10px.
 padding: 0 5px;
`;

const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage('cart-items');
  const cartItemCount = value ? value.length : 0;

  return (
    <Container>
      <CartIcon />
      {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
    </Container>
  );
}
