import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: var(--font-bold);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--border-radius-2);
  transition: 0.3s;
  
&:disabled {
  cursor: progress;
  opacity: 0.5;
}
&.primary {
border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
}
&.primary:hover:not(:disabled) {
  background-color: ${({ theme }) => theme.colors.primaryOutlined};
}
&.secondary {
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
}
&.secondary:hover:not(:disabled) {
  background-color: ${({ theme }) => theme.colors.secondaryOutlined};
}
&.outlined-primary {
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
}
&.outlined-primary:hover:not(:disabled) {
  background-color: ${({ theme }) => theme.colors.primaryOutlined};
}
&.outlined-secondary {
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
}
&.outlined-secondary:hover:not(:disabled) {
  background-color: ${({ theme }) => theme.colors.secondaryOutlined};
}
&.link-primary {
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  text-decoration: underline;
  text-transform: none;
  border: 1px solid transparent;
}
&.link-primary:hover:not(:disabled) {
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryOutlined};
}
&.link-secondary {
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  text-decoration: underline;
  text-transform: none;
  border: 1px solid transparent;
}
&.link-secondary:hover:not(:disabled) {
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondaryOutlined};
}
&.icon-button {
  border-radius: var(--border-radius-3);
  padding: var(--spacing-3);
}
`
