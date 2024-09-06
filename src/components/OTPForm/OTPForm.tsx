import React, { FC, useState } from 'react'

const OPTForm: FC = () => {
    const [valid, setValid] = useState(false)

    return (
        <div className="grid justify-items-center gap-4 my-4">
            <h2 className="text-3xl font-bold">Te enviamos un SMS</h2>
            <div className="grid gap-4 text-center">
                <p>Ingresa el codigo que te enviamos al +506 8888 8888</p>
                <div className="flex justify-center mt-8">
                    {[...Array(4)].map((_, index) => (
                        <input
                            key={index}
                            className="w-10 h-10 text-center mx-1 border border-gray-300 rounded-lg"
                        />
                    ))}
                </div>
                <button
                    onClick={() => {
                        console.log(valid)
                    }}
                    className="justify-center mt-16 mx-16 px-4 py-2 bg-gray-600 text-white rounded"
                >
                    Continuar
                </button>
            </div>
        </div>
    )
}

export { OPTForm }
