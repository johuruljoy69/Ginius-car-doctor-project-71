import { useLoaderData } from "react-router-dom";
import banner from '../../assets/images/checkout/checkout.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            customerName : name,
            email, 
            date,
            img,
            service: title,
            service_id: _id,
            price: price,
        }
        console.log(order);
    }

    return (
        <div className="mt-12">
            <div className="mb-10 ">
                <img className="w-full" src={banner} alt="" />
                {/* <button className="btn absolute items-center border-0 bg-red-500 ">Home/Checkout</button> */}
            </div>
            <h2 className="text-3xl text-center mb-5">Checkout: {title} </h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>

    );
};

export default CheckOut;