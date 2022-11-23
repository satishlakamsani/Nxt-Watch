import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 340px;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`
export const LoginLogoImage = styled.img`
  height: 40px;
  width: 200px;
  margin-bottom: 30px;
`
export const LabelInput = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #477569;
  outline: none;
  padding: 8px;
  height: 50px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`
export const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  height: 40px;
  color: #ffffff;
  margin-top: 20px;
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
`
export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
