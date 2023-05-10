import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="mt-10">
            <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-orange-500 ">Our Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p className="w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    ></ServicesCard> )
                }
            </div>
        </div>
    );
};

export default Services;