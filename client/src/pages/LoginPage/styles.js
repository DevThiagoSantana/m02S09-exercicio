import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-6);
`

export const LoginCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-6) var(--spacing-8);
  gap: var(--spacing-6);
  width: 454px;
  max-width: 100%;
  background: var(--white);
  box-shadow: 0 var(--spacing-2) var(--spacing-2) rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-1);
`

export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: var(--font-bold);
  font-size: 20px;
  line-height: 24px;
  color: var(--primary);
`

export const LoginForm = styled.div`
  align-self: normal;
  display: flex;
  flex-direction: column;
  gap: 14px;

`

export const ErrorMessage = styled.p`
  color: var(--secondary);
`

export const SigninButton = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: var(--font-bold);
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  text-transform: capitalize;
  color: var(--primary);
`
