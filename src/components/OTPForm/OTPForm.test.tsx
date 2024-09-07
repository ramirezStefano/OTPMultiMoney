import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OTPForm } from './OTPForm'

describe('OTPForm Component', () => {
  test('OTP renders on screen', () => {
    render(<OTPForm formFieldAmount={4} expectedOTP="1234" />) // buggy
    const element = screen.getByText(/Te enviamos un SMS/i)
    expect(element).toBeTruthy()
  })
  test('Button renders on screen', () => {
    render(<OTPForm formFieldAmount={4} expectedOTP="1234" />) //
    const element = screen.getByText(/Continuar/i)
    expect(element).toBeTruthy()
  })
})
