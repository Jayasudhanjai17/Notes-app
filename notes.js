const  fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

// console.log("Notes js");


  // "type":"module",
  //----------------------App Functions -----------------------
  //--------------------Adding a Note  in App-----------------------------
  const addNote=function(title,body){
const notes=loadNotes();
const dupli=notes.find((note)=>note.title===title);
if(!dupli){
notes.push({
  title:title,
  body:body
})
savedNotes(notes);
console.log(chalk.green.inverse("New Note Added "));
} else{
  console.log(chalk.red.inverse('Note already present'));
}
  }
  //=================================================================

  // --------------------------------Removing an element-------------------
  const removenote=function(title){
    // const rem = `${title} removed`;
    // console.log(rem);
    // return rem;
    const  rem =loadNotes();
    const remlength=rem.length-1;

  
    const ele = rem.filter((note)=> note.title!==title);
    const num=ele.length;
    if (num===remlength){
      console.log(chalk.red(`${title}`),chalk.green.inverse("Removed"));
    
    savedNotes(ele);
  }
  else{
    console.log(chalk.red.inverse("Note not Found"));
  }
    
  }
  //==============================================================

  //----------------------Listing Notes---------------------------
  const  getNotes=function(){
    console.log(chalk.bgGreenBright('Your Notes'));
    console.log(chalk.white('--------------------'));
const list =loadNotes();

const title=list.forEach((tit,i)=>{
  const topi=tit.title;
const tite=topi.replace("=",'');
  console.log(chalk.bgCyan(`Title ${i+1}`),chalk.magenta('-'),chalk.bgYellow(`${tite}`));
  console.log(chalk.white('--------------------'));
return tit.title;
});
};
//========================================================================================
//--------------------------------Reading a Note---------------------------------
const readNotes=(title)=>{
const notes=loadNotes();


const note=notes.find((tit)=>tit.title===title);
// console.log(dat);
// const num = dat.length;
// console.log(num);
if(note){
 
 const tle = `${chalk.blue('Title')}:${chalk.green(`${note.title}`)}`;
 const body =`${chalk.blue('Body')}:${chalk.green(`${note.body}`)}`;
 console.log(`${tle}`);
 console.log(chalk.white('--------------------'));
 console.log(`${body}`);
}
else{
console.log(chalk.red.inverse("Note not found"));
}
}
//========================================================================================
//-------------------------Display notes with body---------------------------------------
const displayall=()=>{
  const notes=loadNotes();
  console.log();
  const content=notes.forEach((note,i)=>{
    const  tit=chalk.bgGreenBright(`${note.title}`);
    const  con=chalk.blue.inverse(`${note.body}`);
    console.log(`${chalk.bgCyan('Title')} ${i+1} :${tit  }  |${chalk.bgMagenta('Content')}-${con}`);
 console.log(chalk.white('--------------------'));

  })
}
//============================================================================================
//-------------------------------------------Show only content-----------------------------------------
const conty=()=>{
  console.log(chalk.bgGreenBright('Your Notes'));
  console.log(chalk.white('--------------------'));
const list =loadNotes();

const title=list.forEach((tit,i)=>{
const topi=tit.body;
// const tite=topi.replace("=",'');
console.log(chalk.bgCyan(`Content${i+1}`),chalk.magenta('-'),chalk.bgYellow(`${topi}`));
console.log(chalk.white('--------------------'));
// return tit.title;
});
}
//==================================================================================================
//------------------------------Delete All notes --------------------
const delall=()=>{
  try {
    fs.writeFileSync('notes.json', JSON.stringify([]));
    console.log(chalk.red.inverse('Deleted all notes'));
  } catch (error) {
    console.error(chalk.red.inverse('Error deleting notes:', error.message));
  }
}
//==============================================================================================


//-------------------------------------------General Functions---------------------------------------------

  //---------------------------------------------SaveNotes-----------------------------------------------
const savedNotes=function(notes){
const datajson=JSON.stringify(notes);
 fs.writeFileSync('notes.json',datajson);
}

  //--------------------------------------------Load Notes Function ------------------------
  const  loadNotes =function(){
    try{
const  dataBuffer=fs.readFileSync('notes.json');
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON) 
  }

catch(e){
  return [];
}
}
  module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removenote:removenote,
    readNotes:readNotes,
    displayall:displayall,
    delall:delall,
    conty:conty
  }