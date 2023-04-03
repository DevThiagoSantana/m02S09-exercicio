import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputGroup from '../../components/InputGroup'
import Button from '../../components/Button'
import { useSetUserInfo } from '../../hooks/useUserInfo'
import { apiService } from '../../services/api'
import {
  LoginCenterBox,
  LoginPageContainer,
  LoginForm,
  Title,
  SigninButton
} from './styles.js'

function LoginPage() {
  const navigate = useNavigate()
  const setUserInfo = useSetUserInfo()

  const [email, setEmail] = useState('')
  const [showEmailHelper, setShowEmailHelper] = useState(false)

  const [password, setPassword] = useState('')
  const [showPasswordHelper, setShowPasswordHelper] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
  }

  const handleChangePassword = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)
  }

  const handleLoginAction = async () => {
    setError(null)
    setShowEmailHelper(!email)
    setShowPasswordHelper(!password)
    if (!email || !password) {
      return
    }
    setLoading(true)
    const response = await apiService.get(
      `/users?email=${email}&password=${password}`
    )
    if (response?.data?.length) {
      const { name, isAdmin } = response.data[0]
      setUserInfo({
        name,
        isAdmin
      })
      navigate('/')
    } else {
      setUserInfo()
      setError('Credenciais inválidas!')
    }
    setLoading(false)
  }

  return (
    <LoginPageContainer>
      <LoginCenterBox>
        <Title>Acessar</Title>

        <LoginForm>
          <InputGroup
            type="text"
            placeholder="Seu e-mail"
            labelText="E-mail"
            value={email}
            onChange={handleChangeEmail}
            helperText={showEmailHelper ? 'Campo obrigatório' : ''}
          />
          <InputGroup
            type="password"
            placeholder="Sua senha"
            labelText="Senha"
            value={password}
            onChange={handleChangePassword}
            helperText={showPasswordHelper ? 'Campo obrigatório' : ''}
          />
        </LoginForm>

        {error && <p className="errorMessage">{error}</p>}

        <Button onClick={handleLoginAction} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>

          <SigninButton to="/signin">
            Cadastrar
          </SigninButton>
      </LoginCenterBox>
    </LoginPageContainer>
  )
}

export default LoginPage
