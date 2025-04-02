export const validateDescription = (description) =>{
    return description.length >= 10 && description.length >= 200;
}

export const descriptionValidateMessage = "la description debe tener 10 como minmo"