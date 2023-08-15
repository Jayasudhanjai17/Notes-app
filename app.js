const notes = require('./notes')
const validator= require('validator');



const chalk = require('chalk');
const yargs = require('yargs');
// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Andrew.')

// fs.appendFileSync('notes.txt', ' I live in Philadelphia.')
// fs.writeFileSync('notes.txt','Carrot Loves Rabit')
// fs.appendFileSync('notes.txt','I got placed in VisAI')
//Lecute 10
// const utils = require('./util.js'); // Make sure to replace './path/to/utils' with the correct relative path to the 'utils.js' file.

// console.log(utils);
// const  sum= utils(1,2);
// console.log(sum);

//Chalenge 


// const text =getNotes("Carrot");

// console.log(text);
// ----------------------------Lecture 11------------------------------------------  
// const  lg=console.log();
// console.log(validator.isEmail('jayasudhanjai.try@gmail.com'));
// console.log(validator.isURL('https://diet-site.onrender.com/'));

//-------------------------------Lecture 13----------------------------------------
// console.log(chalk.red('Hello', 'World!', 'Type', 'Error', 'not', 'Line'));
// // console.log(chalk.orange('Carrot', 'World!', 'node', 'Jai', 'Warning', 'js'));
// const orange= chalk.bold.hex('#FFA500');
// const  error=function (word){
//     const redclr=chalk.green(word);
//     console.log(redclr);
// }
// const  truht=orange("Carrot")+ ` cares ${chalk.redBright("JaI")}`;
// console.log(truht);
// console.log(chalk.inverse.red.bold("<3"));
// error("Jaya Sudhan");
//Lecture 14
// nodemon
//command Line Arguments
//-------------------------------------------------------------------
// Lecture Geting input from the user  16
// const  command =process.argv[2];
// if(command==="add"){
//     console.log('Enter Your Note Here');

// }
// Lecture 17 Using package Yargs for the Parsing

// console.log(process.argv);--big array
// console.log(yargs.argv);-- formatted array
//add,remove , list ,read
yargs.version('1.1.0')


// ----------------------------------------------------
// yargs.command("insert",false,{
//   title:
//   {
//       describe: "insert Title",
//       demandOption: true,
//       type: "string"
//   },
  
//   body:
//   {
//       describe: "Body",
//       demandOption: true,
//       type: "string"
//   }
// }, function(argv){
//   notes.addNotes(argv.title, argv.body);
// });
//---------------------------------------------------------------------
//Add
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'Add a new note',
   builder:{
    title:{
      describe:'New Title',
      demandOption:true, //required feild
      type:'string'

    },
    items:{
      describe:'Item name',
    },
    body:{
      describe:"Content here",
      demandOption:true,
      type:'string'




    }

    
   },
    handler(argv){
       notes.addNote(argv.title,argv.body);
    }
});
//--------------------------Remove--------------------------
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
      title:{
        describe:'Note Title',
        demandOption:true,
        type:'string'
      }
    },


    handler (argv) {
     notes.removenote(argv.title);
    },
  });
  //-------------------------------List---------------------------
  yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler (argv) {
      notes.getNotes();
    },
  });
  //-----------------------------read------------------------------------
  yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
title:{
  describe:'Title to read',
  demandOption:true,
  type:'string'

}
    },
    handler(argv) {
      notes.readNotes(argv.title);
    },
  });
  //---------------------------------------Display all  Notes----------------------------
  yargs.command({
    command:'displayall',
    describe:'View All Notes with Body',
    builder:{
      
    },
    handler(){
notes.displayall();
    }
  });
  //=========================================================================================
  yargs.command({
    command:'content',
    describe:'Only content',
   
    handler(){
notes.conty();
    }
  });


  //---------------------------------------Delete all  Notes----------------------------
  yargs.command({
    command:'delete',
    describe:'Delete All',
    builder:{
      
    },
    handler(){
notes.delall();
    }
  });



yargs.demandCommand().parse();
yargs.parse();
// console.log(yargs.argv);




