import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() =>{
        if( Object.keys(paciente).length > 0){

            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    

    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validación del Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('hay al menos un campo vacio');

            setError(true)
            return;
        }

        setError(false)

        // objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        
        }

        if(paciente.id){
            // editando el registro
            objetoPaciente.id = paciente.id
           

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacientesActualizados)
                setPaciente({})

        }else{
            objetoPaciente.id =  generarId()
            setPacientes([...pacientes, objetoPaciente]);
        }
        // console.log(objetoPaciente);
        

        // reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className="font-black text-white text-3xl text-center">Seguimiento Pacientes</h2>


                <p className="text-lg mt-5 text-center text-white">
                    Añade Pacientes y {""}
                    <span className="text-amber-400 font-bold">Administralos</span>
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                    {/* comprobacion de error primero true despues false */}
                    {error && <Error>Todos los campos son obligatorios </Error>   }

                    <div className="mb-5">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 uppercase">Nombre Mascota</label>

                        <input id="name" type="text" placeholder="Nombre de Mascota"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="name_propietario" className="block text-gray-700 text-sm font-bold mb-2 uppercase">Nombre Propietario</label>

                        <input id="name_name_propietario" type="text" placeholder="Nombre del propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)} />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 uppercase">Email Propietario</label>

                        <input id="email" type="text" placeholder="Email Contacto Propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2 uppercase">Fecha</label>

                        <input id="date" type="date" placeholder="Fecha"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)} />

                    </div>

                    <div className="mt-5">
                        <label htmlFor="sintomas" className="block text-gray-700  font-bold  uppercase">Sintomas</label>
                        <textarea className="border-2 w-full p-2 mt-2 " name="" id="sintomas"  placeholder="Describe los sintomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)} ></textarea>

                    </div>

                    <input type="submit"
                        className="bg-amber-400 w-full p-3 text-white uppercase 
        font-bold" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
                </form>
            </div>
        </>

    )
}

export default Formulario