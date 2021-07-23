import css from "styled-jsx/css";

const DetailProduct = css`
.box-description{
  background-color: #f5f5f5;
  padding : 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 5px solid #8c8c8c;
}
:global(.card-highlight) {
  border-radius: 10px;
}
:global(.card-highlight-image) {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  object-fit: cover;
}
`

export default DetailProduct
