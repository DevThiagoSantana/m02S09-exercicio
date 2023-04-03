import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const RegisterPageSection = styled.section`
  width: 828px;
  max-width: 100%;
`

export const RegisterPageSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`
export const RegisterPageSectionTitle = styled.h1`
color: var(--primary);
  font-size: 20px;
  text-align: center;
  width: 100%;
`

export const RegisterPageSectionForm = styled.form`
display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`

export const RegisterPageSectionFormRow = styled.div`
display: flex;
gap: var(--spacing-4);
`

export const RegisterPageSectionFormColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`

export const RegisterPageSectionFormGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  gap: var(--spacing-5);
`

export const RegisterPageSectionFormFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-5);
`

export const RegisterPageSectionFormGroupContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`

export const RegisterPageSectionFormGroupContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-gray);
  border-radius: var(--border-radius-1);
  padding: var(--spacing-4);
  font-size: 12px;
  line-height: 15px;
  font-weight: var(--font-bold);
  color: var(--secondary);
`
