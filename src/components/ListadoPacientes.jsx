
import Paciente from "./Paciente"



const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {



    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (

                <>
                    <h2 className="font-black text-3xl text-center text-white">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-white">Administra tus <span className="text-amber-400 font-bold">Pacientes y Citas</span></p>


                    {pacientes.map((paciente) => (

                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />

                    ))}
                </>

            ) : (
                <>
                <h2 className="font-black text-3xl text-center text-white">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center text-white">Comienza agregando pacientes {""}<span className="text-amber-400 font-bold">y aparecerán en este lugar</span></p>
                </>
            )}






        </div>

    )
}

export default ListadoPacientes