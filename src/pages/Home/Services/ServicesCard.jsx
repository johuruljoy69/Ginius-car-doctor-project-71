import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="md:flex justify-between items-center">
                    <p className="text-xl text-orange-600">Price: ${price}</p>
                    {/* <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-sm bg-indigo-700">Checkout</button>
                    </Link> */}
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-sm bg-indigo-700">Book</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;