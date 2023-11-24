export const formInputValidations = () => {
  const validateAlphaNumeric = (value) => {
    // if the field is empty
    if (!value) {
      return 'This field is required'
    }
    // if the field is not a valid password
    const regex = /^[a-zA-Z0-9]+$/
    if (!regex.test(value)) {
      return 'This field only admits letters and numbers'
    }
    // All is good
    return true
  }

  const validateAlphaOnly = (value) => {
    // if the field is empty
    if (!value) {
      return 'This field is required'
    }
    // if the field is not a valid password
    const regex = /[A-Za-z\s]+/
    if (!regex.test(value)) {
      return 'This field only admits letters'
    }
    // All is good
    return true
  }

  const validateNumbersOnly = (value) => {
    // if the field is empty
    if (!value) {
      return 'This field is required'
    }
    // if the field is not a valid password
    const regex = /[0-9]/
    if (!regex.test(value)) {
      return 'This field only admits numbers'
    }
    // All is good
    return true
  }

  const validatePassword = (value) => {
    // if the field is empty
    if (!value) {
      return 'Please type your account password'
    }
    // if the field is not a valid password
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/g

    if (!regex.test(value)) {
      return 'This field must be a valid password'
    }
    // All is good
    return true
  }

  const validateEmail = (value) => {
    // if the field is empty
    if (!value) {
      return 'This field is required'
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!regex.test(value)) {
      return 'This field must be a valid email'
    }
    // All is good
    return true
  }

  return {
    validateAlphaNumeric,
    validateAlphaOnly,
    validateNumbersOnly,
    validatePassword,
    validateEmail,
  }
}
