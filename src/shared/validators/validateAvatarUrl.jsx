export const validationAvatarUrl = (url) =>{
    const regex = /^(ftp|http|https):\/\/[^ "]+$/
    return regex.test(url);
}

export const avatarUrlValidationMessage = 'Este no es uma url'