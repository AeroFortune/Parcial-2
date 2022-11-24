
CREATE DATABASE Panaderia;
use Panaderia;

CREATE TABLE Panes(
	nombre varchar(50),
	fotoUrl varchar(50),
	descripcion varchar(50)
);

insert into panes values ("test", "test", "test");
insert into panes values ("pannn", "foto!!", "descripcion va aqui uwu");

select * from panes;