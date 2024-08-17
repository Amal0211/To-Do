import React from "react";
import {useState} from 'react';
import { Button, ChakraProvider,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input,
    ModalCloseButton,List,ListItem, 
    UnorderedList
    } from "@chakra-ui/react";
import styles from './containerbox.module.css';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<script src="https://kit.fontawesome.com/bb6b088d0e.js" crossorigin="anonymous"></script>
export default function Container()
{   
    const [tasks,setTask]=useState([]);
    const [newTask,setNewTask]=useState("");
    const [isModalOpen, setIsModalOpen]=useState(false);
    const addtask=()=>{
      if(newTask.trim()){
        setTask([...tasks,newTask]);
        setNewTask("");
        setIsModalOpen(false);
      
    }
    else{
      window.alert("Cannot add Empty Task!!")
    }
  }
  const deleteTask=(index)=>{
    const newtasks=tasks.filter((_,i)=> i!=index)
    setTask(newtasks);
  }
    return (
    <>
    <ChakraProvider>
    <div className={styles.papacontain}>
    <div className={styles.container}>
      <div className={styles.listnameNbutton}>
        <h1 className={styles.tasklist}>Task List</h1>
        
    <Button colorScheme="blue"
    onClick={()=>setIsModalOpen(true)} className={styles.addtask}>Add Task</Button>
    </div>
    <div className={styles.line}></div>
    {(tasks.length===0) ? <p className={styles.nocurrenttask}>No current tasks.</p> :
    <List spacing={3} mt={4}>
      <UnorderedList mt={4}>
    {tasks.map((task, index) => (
      
      <ListItem key={index}> 
          <div className={styles.taskNbutton}>
          {task}
          <Button colorScheme="red" onClick={()=>{deleteTask(index)}}><FontAwesomeIcon icon={faDeleteLeft}/></Button>
          </div>
      </ListItem>
    ))}
    </UnorderedList>
  </List>
}
<Modal isOpen={isModalOpen} onClose={()=>(setIsModalOpen(false))}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="text" placeholder="Enter task" onChange={(e)=>{setNewTask(e.target.value)}}/>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' colorScheme="blue" onClick={addtask}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>

    </div>
    </ChakraProvider>
    </>
    )
}