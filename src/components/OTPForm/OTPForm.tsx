import React, { FC } from 'react'

const OPTForm: FC = () => {
    return (
        <div className="grid">
            <h2 className="">Te enviamos un SMS</h2>
            <div className="grid">
                <p className="">
                    Ingresa el codigo que te enviamos al +506 8888 8888
                </p>
                <div>
                    {/* // TODO - usar componente de input aqui, ver si se hace otro
                    componente y utlizar 4 veces. */}
                </div>
                <button className="">Continuar</button>
                {/* <h1 className="text-5xl font-bold underline">Hello world!</h1> */}
            </div>
        </div>
    )
}

export { OPTForm }
