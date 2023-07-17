import { EMPTY, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio: MedicosService = new MedicosService(null as any);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('onInit: debe de cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('agregar: debe de agregar un medico', () => {
    const spy = spyOn(servicio, 'agregarMedico').and.callFake((res) => {
      return EMPTY;
    });
    componente.agregarMedico();
    expect(spy).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo médico al arreglo de medicos', () => {
    const medico = { id: 1, nomber: 'orlando' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();
    expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError debe de ser igual al error del servicio', () => {
    const myError = 'Error de prueba';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(() => myError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(myError);
  });

  it('Debe llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(true); // Salta el click del alert

    const spy = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');

    expect(spy).toHaveBeenCalledWith('1');
  });

  it('NO debe llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(false); // Salta el click del alert
    // Esto no se debería de ejecutar por el false
    const spy = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');

    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
