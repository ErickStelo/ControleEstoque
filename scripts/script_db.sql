create table usuarios (
    usu_codigo serial not null,
    usu_nome varchar(100) not null,
    usu_email varchar(100) default null,
    usu_username varchar(100) not null,
    usu_password text not null,
    usu_admin boolean default false
);
delete from usuarios;
insert into usuarios (usu_nome, usu_email, usu_username, usu_password, usu_admin) VALUES
                                                                                      ('Administrador', 'admin@admin.com', 'admin', '$2b$10$8ylhcKQkff9C0zWM4XRLGe.Ns.rRMbsmXpLfC3W3422uCW.GtEHem', true);
