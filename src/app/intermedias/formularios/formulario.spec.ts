import { FormBuilder } from '@angular/forms';
import { LoginForm } from './formulario';

describe('Pruebas en formularios', () => {
  let componente: LoginForm;

  beforeEach(() => (componente = new LoginForm(new FormBuilder())));

  it('Debe de crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    expect(componente.form.get('email')!.valid).toBeFalsy();
  });

  it('El email debe ser obligatorio - opcion del curso', () => {
    const control = componente.form.get('email');
    control!.setValue('');

    expect(control!.valid).toBeFalsy();
  });

  it('El email debe ser un correo valido', () => {
    const control = componente.form.get('email');
    control!.setValue('usuario@indelpro.com');

    expect(control!.valid).toBeTruthy();
  });
});
