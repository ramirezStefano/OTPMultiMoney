/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useEffect, useRef, useState } from 'react'

interface OPTFormProps {
  formFieldAmount?: number
  expectedOTP: string | undefined
}

/**
 * @expectedOPT  Expected password for the form, passed from GET URL
 * @formFieldAmount  Amount of input fields for the OTP Form
 * @returns OPT Form Component
 */
const OPTForm: FC<OPTFormProps> = ({
  expectedOTP = undefined,
  formFieldAmount = 4,
}) => {
  const [valid, setValid] = useState(false)
  const [inputValues, setInputValues] = useState<string[]>(
    Array(formFieldAmount).fill('')
  )

  const otpInputs = Array(formFieldAmount)
    .fill(null)
    .map(() => useRef(null))

  const handleKeyDown = (
    inputs: React.RefObject<HTMLInputElement>[],
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!/^\d$/.test(e.key)) {
      e.preventDefault()
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      focusInput(inputs, index - 1)
    } else if (e.key === 'ArrowRight' && index < inputs.length - 1) {
      focusInput(inputs, index + 1)
    }

    if (e.key === 'Backspace' && index >= 0) {
      e.preventDefault()
      inputValues[index] = ''
      setInputValues(inputValues)
      setValid(false)
      if (inputs[index].current) {
        inputs[index].current.value = ''
      }
      if (index > 0) {
        focusInput(inputs, index - 1)
      }
    }
  }

  const handleSubmit = () => {
    const otp = inputValues.join('')
    console.log(`OPT correct with value: ` + otp)
  }

  const focusInput = (
    inputs: React.RefObject<HTMLInputElement>[],
    index: number
  ) => {
    inputs[index].current?.focus()
  }

  const handleInputChange = (
    inputs: React.RefObject<HTMLInputElement>[],
    index: number,
    value: string
  ) => {
    const newValues = [...inputValues]
    if (/^\d*$/.test(value)) {
      newValues[index] = value
      setInputValues(newValues)
    }
    if (value && index < inputs.length - 1) {
      focusInput(inputs, index + 1)
    }
  }

  useEffect(() => {
    if (
      inputValues.join('') === expectedOTP &&
      inputValues.join('').length == formFieldAmount
    ) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [inputValues])

  return (
    <div className="grid justify-items-center gap-4 my-4">
      <h2 className="text-3xl font-bold">Te enviamos un SMS</h2>
      <div className="grid gap-4 text-center">
        <p>Ingresa el codigo que te enviamos al +506 8888 8888</p>
        <div>
          {otpInputs.map((inputRef, index) => (
            <input
              key={index}
              type="text"
              className="w-10 h-10 text-center mx-1 border border-gray-300 rounded-lg"
              maxLength={1}
              ref={inputRef}
              onChange={(e) =>
                handleInputChange(otpInputs, index, e.target.value)
              }
              onKeyDown={(e) => handleKeyDown(otpInputs, index, e)}
              onClick={() => focusInput(otpInputs, index)}
            />
          ))}
        </div>
        {valid ? (
          <button
            onClick={handleSubmit}
            className={`justify-center mt-16 mx-16 px-4 py-2 text-white rounded bg-green-500`}
          >
            Continuar
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled
            className={`justify-center mt-16 mx-16 px-4 py-2 text-white rounded bg-gray-600`}
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  )
}

export { OPTForm }
