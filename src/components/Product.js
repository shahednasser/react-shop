function Product ({product: {title, price, description, category, image}}) {
    
    return (
        <div className="flex shadow-md w-full mb-5 pb-0 mx-auto bg-gray-100 dark:bg-gray-300 rounded-lg h-80">
            <div style={{backgroundImage: `url(${image})`}} className="bg-contain bg-no-repeat bg-white w-5/12 bg-center rounded-tl-lg rounded-bl-lg"></div>
            <div className="w-7/12 p-5">
                <h1>{title}</h1>
                <h3 className="text-gray-400 dark:text-gray-700">{category}</h3>
                <p className="text-4xl mt-4 text-red-500">{price}$</p>
                <div className="mt-4 max-h-28">{description.substr(0, 200)}</div>
            </div>
        </div>
    );
}

export default Product