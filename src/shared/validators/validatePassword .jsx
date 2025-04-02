export const validatePassword = (password) =>{
    const regex = /^\S{6,12}$/;
    return regex.test(password)
}

export const validatePasswordMessage = 'la contraseña debe tener entre 6 y 12 caracteristicas sin espacion.'