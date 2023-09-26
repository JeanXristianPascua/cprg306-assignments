export default function Item({name, quantity, category}) {
    return (
        <>
            <div className="border border-grey-500 bg-grey-800 w-full max-w-xs m-4 p-2">
                <h3 className="text-xl font-bold">Name: {name}</h3>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </div>
        </>
    );
}
