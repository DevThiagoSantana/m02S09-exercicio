import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'

import './CourseRegisterPage.css'

const schema = yup.object().shape({
  name: yup.string().required('Campo Obrigatorio'),
  imageUrl: yup.string().required('Campo Obrigatorio'),
  category: yup.string().required('Campo Obrigatorio'),
  description: yup.string().required('Campo Obrigatorio'),
  duration: yup.number('Deve ser um número').required('Campo Obrigatorio'),
  targetMarket: yup.string().required('Campo Obrigatorio')
})

function CourseRegisterPage () {
  const { register, handleSubmit, formState: { errors } } = useForm({
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

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className ="register-page-container">
      <section className="register-page-section">
        <Card>
          <div className="register-page-section-card">
            <h1 className="register-page-section-title">Cadastrar Curso</h1>

            <form className="register-page-section-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <InputGroup labelText="Nome" placeholder="Nome do curso" helperText={errors?.name?.message} {... register('name')}/>
                  <InputGroup labelText="Duração" placeholder="Duração do curso" helperText={errors?.name?.message} {... register('duration')}/>
                  <InputGroup labelText="Descrição" placeholder="Descrição do curso" helperText={errors?.name?.message} {... register('description')}/>
                </div>

                <div className="register-page-section-form-column">
                  <InputGroup labelText="Url icone" placeholder="Url contendo icone" helperText={errors?.name?.message} {... register('imageUrl')}/>
                  <InputGroup labelText="Categoria" placeholder="Categoria do curso" helperText={errors?.name?.message} {... register('category')}/>
                  <InputGroup labelText="Público alvo" placeholder="Público alvo do curso" helperText={errors?.name?.message} {... register('targetMarket')}/>
                </div>
              </div>
              <div className="register-page-section-form-group">
                <InputGroup labelText="Conteudo" placeholder="Conteudo do Curso"/>
                <div>
                  <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED}>Adicionar</Button>
                </div>
              </div>
              <div className="register-page-section-form-footer">
                <div>
                  <Button type="submit">Cadastrar</Button>
                </div>
                <div>
                  <Button type="submit" variant={BUTTON_VARIANT.PRIMARY_LINK}>Cancelar</Button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </div>

  )
}

export default CourseRegisterPage
