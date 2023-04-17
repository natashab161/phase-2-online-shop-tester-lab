function ProductCard({ product }) {
    return (
        <div>
            <img src={product.image}></img>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
              <button>{ product.isSold ? "Sold Out" : "Buy"}</button>
        </div>
    )
}

export default ProductCard;