function Product ({product: {title, price, description, category, image}}) {
    return (
        <div className="flex shadow-sm">
            <div>
                <img src={image} alt={title} className="max-w-full" />
            </div>
            <div>
                <h1>{title}</h1>
                <h3 className="text-gray-400">{category}</h3>
                <div className="mt-4">{description}</div>
            </div>
        </div>
    );
}

export default Product