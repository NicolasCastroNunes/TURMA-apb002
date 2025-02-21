CREATE DATABASE Escola;
use escola;

create table Alunos (
	id_aluno int primary key auto_increment,
    nome_aluno varchar (100),
    sobrenome varchar(80),
    email varchar(150),
    telefone varchar(10),
    turma varchar(5)
);

DROP TABLE ALUNOS;

insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Laura','Gonçalves','Email@gmail.com','61-9999999','008F');
insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Rodrigo','Faro','Email@gmail.com','61-000000000','008F');
insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Kátia','Pereira','Email@gmail.com','61-111111111','005V');
insert into Alunos (nome_aluno, sobrenome,email,telefone,turma) values ('Davi','Gomes','Email@gmail.com','61-777777777','003G');
insert into Alunos (nome_aluno, sobrenome,email,telefone,turma) values ('Vitor','Gomes','Email@gmail.com','61-222222222','002A');
insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Fernanda','Santana','Email@gmail.com','61-333333333','006J');
insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Pedro','Santana','Email@gmail.com','61-333333333','005V');
insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Anna','Ribeiro','Email@gmail.com','61-333333333','0010W');
insert into Alunos (nome_aluno,sobrenome, email,telefone,turma) values ('Lucas','Castro','Email@gmail.com','61-333333333','002A');
select * from alunos;

drop table notas;

create table Notas (
	id_media int auto_increment primary key,
    Semestre_1 decimal,
    Semestre_2 decimal,
    Nota_final decimal,
    id int,
    foreign key (id) references Alunos (id_aluno)
);

insert into Notas (semestre_1,semestre_2,Nota_final) values (11,9,20);
insert into Notas (semestre_1,semestre_2,Nota_final) values (11,11,22);
insert into Notas (semestre_1,semestre_2,Nota_final) values (10,12,22);
insert into Notas (semestre_1,semestre_2,Nota_final) values (10,11,21);
insert into Notas (semestre_1,semestre_2,Nota_final) values (10,12,22);
insert into Notas (semestre_1,semestre_2,Nota_final) values (8,9,18);
insert into Notas (semestre_1,semestre_2,Nota_final) values (12,12,24);
insert into Notas (semestre_1,semestre_2,Nota_final) values (11,11,22);
insert into Notas (semestre_1,semestre_2,Nota_final) values (12,12,24);


select * from Notas;
select * from Alunos where Sobrenome like"%santana%";
