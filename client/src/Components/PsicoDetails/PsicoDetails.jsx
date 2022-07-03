import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; 
import { getPsychologyID } from "../../slice/psico/thunks";
import Pricing from "../Pricing/Pricing.jsx"
import Prueba from "../PruebaMercadoPago/Prueba";
import { Calendar } from "../Calendar/Calendar";

export default function PsicoDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPsychologyID(id));
    }, []);


    return (
        <div className="container flex ">
            <div className="container w-1/2 h-60 bg-secundary border border-primary my-5 mx-10">
                <div>Info</div>
            </div>

        <div className="container w-1/2">
                <div className="container h-80 bg-red"><Calendar idPsycho={id}/></div>
                <div className="container bg-blue"> <Pricing /> </div>
                <button className="bg-primary text-white border border-primary font-bold py-2 px-4 rounded hover:bg-white hover:text-primary my-2.5 h-9">Agendar cita</button>
                <Prueba />
            </div>
        </div>
    );
};