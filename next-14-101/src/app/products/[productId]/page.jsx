export default function ProductPage(props) {
  console.log(props.params);

  const { productId } = props.params;

  return (
    <div>
      Viewing Product {productId}
    </div>
  )
}