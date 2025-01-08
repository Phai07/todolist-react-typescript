import TodoType from "./todo";

const  LOCAL_STORAGE_KEY = "todos";

const TodoService = {
//get todos
getTodos:(): TodoType[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todoStr ? JSON.parse(todoStr) : [];
},
//Adding Todos
addTodos: (text:string): TodoType => {
    const todos = TodoService.getTodos();
    const newTodo: TodoType = {id: todos.length + 1, text, completed: false};
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));

    return newTodo;
    },
    
    //Upptading Todos
   updateTodo:(todo:TodoType): TodoType => {
    const todos = TodoService.getTodos();

    const updateTodos = todos.map((t)=>(t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return todo;
    
   },

   //!Deleting Todos
   deleteTodo: (id:number):void =>{
    const todos = TodoService.getTodos();
    const updateTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
   }

}; 




export default TodoService;