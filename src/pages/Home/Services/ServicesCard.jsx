

const ServicesCard = ({ service }) => {
    const { title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                <p className="text-xl text-orange-600">Price: ${price}</p>
                <a href="" className="btn btn-circle border-0 bg-red-500" >❯</a>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;