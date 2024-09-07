// @ts-ignore
import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OTPForm } from './OTPForm'

describe('OTPForm Component', () => {
  test('OTP Header renders on screen', () => {
    render(<OTPForm formFieldAmount={4} expectedOTP="1234" />)
    const element = screen.getByText(/Te enviamos un SMS/i)
    expect(element).toBeTruthy()
  })
  test('Button renders on screen', () => {
    render(<OTPForm formFieldAmount={4} expectedOTP="1234" />)
    const element = screen.getByText(/Continuar/i)
    expect(element).toBeTruthy()
  })
  test('Input field renders correctly', () => {
    render(<OTPForm formFieldAmount={4} expectedOTP="1234" />)
    const inputElements = screen.getAllByRole('textbox')
    expect(inputElements.length).toBe(4)
  })
  test('Input field has a maximum length of 1', () => {
    render(<OTPForm formFieldAmount={1} expectedOTP="1" />)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    expect(inputElement.maxLength).toBe(1)
  })
})
