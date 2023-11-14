import { LoginForm } from '../../../components/Admin'
import './LoginAdmin.scss'
export const LoginAdmin = () => {
  return (
    <>
    <div className='login-admin'>
        <div className='login-admin__content'>
        <h2>Ingreso a Psicoopedia</h2>
        <LoginForm />
        </div>
    </div>
    </>
  )
}
