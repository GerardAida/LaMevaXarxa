import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const validarQueSeanIguales: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("password")
  const passwordc = control.get("passwordc")

  return password.value === passwordc.value
    ? null
    : { noSonIguales: true }
}
