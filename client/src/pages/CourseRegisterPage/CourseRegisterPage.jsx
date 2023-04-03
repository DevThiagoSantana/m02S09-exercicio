import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Trash } from 'phosphor-react'

import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useCourseRegister from '../../hooks/useCourseRegister'
import {
  RegisterPageContainer,
  RegisterPageSection,
  RegisterPageSectionCard,
  RegisterPageSectionTitle,
  RegisterPageSectionForm,
  RegisterPageSectionFormRow,
  RegisterPageSectionFormColumn,
  RegisterPageSectionFormGroup,
  RegisterPageSectionFormFooter,
  RegisterPageSectionFormGroupContent,
  RegisterPageSectionFormGroupContentItem
} from './styles'

const schema = yup.object().shape({
  name: yup.string().required('Campo Obrigatorio'),
  imageUrl: yup.string().required('Campo Obrigatorio'),
  category: yup.string().required('Campo Obrigatorio'),
  description: yup.string().required('Campo Obrigatorio'),
  duration: yup.number('Deve ser um número').required('Campo Obrigatorio'),
  targetMarket: yup.string().required('Campo Obrigatorio')
})

function CourseRegisterPage() {
  const [content, setContent] = useState({ value: '', error: '' })
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      name: '',
      imageUrl: '',
      category: '',
      description: '',
      duration: '',
      targetMarket: ''
    },
    resolver: yupResolver(schema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contents'
  })

  const { isSubmitting, registerCourse } = useCourseRegister()

  const onSubmit = (data) => {
    registerCourse(data)
  }

  const handleAddContent = () => {
    if (content.value) {
      append({ id: new Date().getTime(), text: content.value })
      setContent({ value: '', error: '' })
      return
    }

    setContent((prev) => ({ ...prev, error: 'Campo obrigatório' }))
  }

  const handleChangeContent = (event) => {
    setContent({
      value: event.target.value,
      error: event.target.value ? '' : 'Campo obrigatório'
    })
  }

  const handleDeleteContent = (index) => {
    remove(index)
  }

  return (
    <RegisterPageContainer>
      <RegisterPageSection>
        <Card>
          <RegisterPageSectionCard>
            <RegisterPageSectionTitle>Cadastrar Curso</RegisterPageSectionTitle>
            <RegisterPageSectionForm onSubmit={handleSubmit(onSubmit)}>
              <RegisterPageSectionFormRow>
                <RegisterPageSectionFormColumn>
                  <InputGroup labelText="Nome" placeholder="Nome do curso" helperText={errors?.name?.message} {... register('name')}/>
                  <InputGroup labelText="Duração" placeholder="Duração do curso" helperText={errors?.name?.message} {... register('duration')}/>
                  <InputGroup labelText="Descrição" placeholder="Descrição do curso" helperText={errors?.name?.message} {... register('description')}/>
                </RegisterPageSectionFormColumn>

                <RegisterPageSectionFormColumn>
                  <InputGroup labelText="Url icone" placeholder="Url contendo icone" helperText={errors?.name?.message} {... register('imageUrl')}/>
                  <InputGroup labelText="Categoria" placeholder="Categoria do curso" helperText={errors?.name?.message} {... register('category')}/>
                  <InputGroup labelText="Público alvo" placeholder="Público alvo do curso" helperText={errors?.name?.message} {... register('targetMarket')}/>
                </RegisterPageSectionFormColumn>
              </RegisterPageSectionFormRow>
              <RegisterPageSectionFormGroup>
                <InputGroup labelText="Conteudo" placeholder="Conteudo do Curso" value={content.value} helperText={content.error} onChange={handleChangeContent} />
                <div>
                  <Button type="button" variant={BUTTON_VARIANT.SECONDARY_OUTLINED} onCLick={handleAddContent} >Adicionar</Button>
                </div>
              </RegisterPageSectionFormGroup>
              <RegisterPageSectionFormGroupContent>
                {fields.map((field, index) => (
                  <RegisterPageSectionFormGroupContentItem key={field.id}>
                    <p>{field.text}</p>

                    <Button isIconButton type="button" variant={BUTTON_VARIANT.SECONDARY_OUTLINED} onCLick={() => handleDeleteContent(index)} >
                      <Trash size={16} />
                    </Button>
                  </RegisterPageSectionFormGroupContentItem>
                ))}
              </RegisterPageSectionFormGroupContent>

              <RegisterPageSectionFormFooter>
                <div>
                  <Button type="submit" disabled={isSubmitting}>Cadastrar</Button>
                </div>
                <div>
                  <Button type="submit" variant={BUTTON_VARIANT.PRIMARY_LINK} onCLick={() => navigate('/')}>Cancelar</Button>
                </div>
              </RegisterPageSectionFormFooter>
            </RegisterPageSectionForm>
          </RegisterPageSectionCard>
        </Card>
      </RegisterPageSection>
    </RegisterPageContainer>

  )
}

export default CourseRegisterPage
