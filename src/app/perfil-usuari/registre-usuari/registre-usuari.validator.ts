import { FormGroup } from '@angular/forms';


export function validarQueSonIguals(password, passwordc)
  {
    return (formGroup: FormGroup) => {
            const control = formGroup.controls[password];
            const matchingControl = formGroup.controls[passwordc];

            if (matchingControl.errors && !matchingControl.errors.validarQueSonIguals) {
                // Aqui returna perque com ja hi ha un error abans de fer aquet proces encara no es mira.
                return;
            }

            // Aqui li afeguim si falla la validació que retrni un true, i sinó no.
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ validarQueSonIguals: true });
            } else {
                matchingControl.setErrors(null);
            }
        }
}
