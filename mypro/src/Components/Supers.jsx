import React, { useState, useEffect } from "react";
import Item from "./Item";

const TodoList = ({ supabase }) => {
  const [todoItems, setTodoItems] = useState([]);
  const [refresh, setRefresh] = useState(false);


///////    this is the code for fetching the data from database for the first time;


  useEffect(() => {
    const fetchData = async () => {
      try {
         const {data} = await supabase
          .from('todoList')
          .select('*')
          console.log(data)
          setTodoItems(data ?? []);
      } 
      
      catch (error) {
        console.log("the error is : ", error);
      }
    };
    fetchData();
  },[refresh]);



  //////   code for the post  request to add a new item in the list


    const postData = async () => {
      const text = prompt("enter your data")
      try{
        const {data} = await supabase
        .from('todoList')
        .insert([{text}])
        .then((data, error)=>{
          if(data){
            setRefresh(prev => !prev)
          }
          else{
            console.log("an error occured !",error);
          }
        })
      }
      catch(error){
        console.log(error)
      }
    }
  

    ///////  code for deleting the todo Items

    const deleteItem = async(d_id)=>{
     try{
      const {} = await supabase
      .from('todoList')
      .delete()
      .eq('id', d_id)
      .then((data , error)=>{
        if(data){
          setRefresh(prev => !prev)
        }
        else{
          console.log("error ", error);
        }
      })

     }catch(error){
      console.log(error)
     }
    }


    ///////////    code for updating the todoItem
    
    const updatItem = async(d_id)=>{

      const { data:preData, error } = await supabase
      .from('todoList')
      .select('text')
      .eq('id', d_id)
      .single();
    
    if (error) {
      throw error;
    }

      try{
        const newText = prompt("enter your data ", preData.text)
        const{data , error} = await supabase
        .from('todoList')
      .update({ text: newText })
      .eq('id', d_id)

      if(!error){
        setRefresh(prev=>!prev); 
      }

      }
      catch(error){
        console.log("an error occured ", error)
      }
    }

 




  return (
    <div>
      <div className=" flex justify-center mt-6">
        <div className="w-4/12 h-16 bg-blue-500 text-white flex justify-between items-center font-semibold  ring-2 ring-blue-500 ring-offset-4 ring-offset-blue-100/50 rounded-md p-5">
          <span className="font-sans font-semibold text-lg">ToDo List : </span>
          <span className="text-3xl cursor-pointer" onClick={postData}> + </span>
        </div>
      </div>
      {[...todoItems].reverse().map((item , index) => (
      // console.log("the item name is : ",index),
        <Item key={index} text={item.text} deleteItem={deleteItem} id={item.id}  updatItem={updatItem} />
      ))}
    </div>
  );
};

export default TodoList;