import ProductCard from "./ProductCard";

function ProductList({ products }) {
        console.log(products);
        const productsToRender = products.map((product) => {
            return <ProductCard key ={product.name} product={product}></ProductCard>
        })
    return <div>{ productsToRender }</div>;
}

export default ProductList;