const express = require('express')
const app = express()
const {cursos} = require ('./Curso');

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'x'
	}

}

//node principal inscribir -i=1 -n=Camilo -x=12345

const argv = require('yargs')
            .command('inscribir','inscribirme en un curso', opciones)
            .argv


if(argv.n == null){

	mostrarCursos(cursos);


}else{


	let curso = cursos.find( curso => curso.id == argv.id);

	if(curso){

		console.log('El curso encontrado es: ' +curso.nombre);
		console.log('El estudiante: ' +argv.n+ " con cedula " +argv.x+ " se ha inscrito al curso: " +argv.i);

	let crearArchivo =(cursos) =>{
	
	texto = 'El estudiante ' +argv.nombre+ " con cedula " +argv.cedula+ " se ha matriculado en el curso " +curso.nombre+ 
	" con una duracion de " +curso.duracion+ " horas y un valor de " +curso.valor+ " pesos"

    app.get('/', function (req, res) {
    res.send(texto)

    })
 
app.listen(3000)	
   }
        crearArchivo(cursos);

	}else{
		console.log('El curso con el id ingresado no existe. Porfavor ingrese un curso disponible');
		mostrarCursos(cursos);
	}

}         


function mostrarCursos(cursos){


	let time = 0;

	cursos.forEach( (curso)=> {
        
		setTimeout(() =>{
			ventana = console.log('El nombre del curso ' +curso.nombre+ " tiene una duracion de " 
		    +curso.duracion+ " horas con un valor de " +curso.valor+ " pesos");


		},time)

		time = time + 2000;
	});

}








