import {body} from "express-validator"


export const registerValidator = [
    body("email", "введіть коректний Email").isEmail(),
    body("password", "пароль має бути не менше 5 символів").isLength({min: 5}),
    body("fullName", "має бути не менше 3 символа").isLength({min: 3}),
    body("avatarUrl", "має бути стрічка").optional().isURL(),
]
