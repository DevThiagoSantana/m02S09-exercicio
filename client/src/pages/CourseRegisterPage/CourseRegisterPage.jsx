import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'

import './CourseRegisterPage.css'

function CourseRegisterPage () {
  return (
    <div className ="register-page-container">
      <section className="register-page-section">
        <Card>
          <div className="register-page-section-card">
            <h1 className="register-page-section-title">Cadastrar Curso</h1>

            <form className="register-page-section-form">
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <InputGroup labelText="Nome" placeholder="Nome do curso"/>
                  <InputGroup labelText="Duração" placeholder="Duração do curso"/>
                  <InputGroup labelText="Descrição" placeholder="Descrição do curso"/>
                </div>

                <div className="register-page-section-form-column">
                  <InputGroup labelText="Url icone" placeholder="Url contendo icone "/>
                  <InputGroup labelText="Categoria" placeholder="Categoria do curso"/>
                  <InputGroup labelText="Público alvo" placeholder="Público alvo do curso"/>
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
                  <Button>Cadastrar</Button>
                </div>
                <div>
                  <Button variant={BUTTON_VARIANT.PRIMARY_LINK}>Cancelar</Button>
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
