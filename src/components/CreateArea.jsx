import React, {useState} from "react";
import Fab from "@material-ui/core/Fab"
import AddBoxIcon from '@material-ui/icons/AddBox';

function CreateArea(props) {

const [note, setNote] = useState({
  title:"",
  content: ""
});

function handleChange(event) {
  const {name, value} = event.target;

  setNote(prev => {
    return {
      ...prev,
      [name] : value
    };
  });
}

function handleClick(event){
  props.onAdd(note);
  event.preventDefault();
  setNote({
    title : "",
    content : ""
  });
}

  return (
    <div>
      <form>
        <input onChange = {handleChange} name="title" placeholder="Title" value = {note.title}/>
        <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value = {note.content}/>
        <Fab onClick = {handleClick}>
          <AddBoxIcon/>
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
