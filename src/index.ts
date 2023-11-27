/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;*/

type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string | number

}

/*
1. Enum com valores ADMIN e NORMAL e atribua ã propriedade permissio de AdmimAccount e NormalAccount;
*/

enum USER_ROLES {
    ADMIN = 'admin',
    NORMAL = 'normal'
}

/*
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
*/

type AdminAccount = {
    account: string,
    permission: USER_ROLES
}

type NormalAccount = {
    account: string,
    permission: USER_ROLES
}

/*
3. Crie exemplos de usuários Admin e Normal;
*/

type AdminUser = TPerson & AdminAccount
type NormalUSer = TPerson & NormalAccount

const user1: AdminUser = {
    id: 'u001',
    name: 'Luciano',
    email: 'luciano@email.com',
    password: '123456',
    account: 'admin',
    permission: USER_ROLES.ADMIN
}

const user2: NormalUSer = {
    id: '002',
    name: 'Levi',
    email: 'levi@email.com',
    password: '456789',
    account: 'normal',
    permission: USER_ROLES.NORMAL
}

/*
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Account;
*/ 

const users: AdminUser[] | NormalUSer[] = [
    user1,
    user2
]










/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:
/*
1. Enum com valores ADMIN e NORMAL e atribua ã propriedade permissio de AdmimAccount e NormalAccount;
*/



/*
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
*/



/*
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
*/ 
