//상태전달 : props
import './App.css';
import { useRef, useEffect, useState } from 'react';
import Todo from './components/todo1';
import Input from './components/input1';


function App() {
  const inputRef = useRef('');
  const wrap = {
    width : '500px',
    border : '1px solid black',
    margin : '10px auto',
  };

  let boardList = [
    {id: 1, todoname: '운동하기', completed: 0},
    {id: 2, todoname: 'SNS꾸미기', completed: 0},
    {id: 3, todoname: '사진정리하기', completed: 0},
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {id: todos.length + 1, todoname: input, completed: 0},
    ]);

    setInput('');
  };

  const deleteTodo = (id) => {
    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );
    // 아래와 같은 코드

    setTodos(todos.filter((todo)=> todo.id !== id));
  };

  // const updateTodo = (id) => {
  //   setTodos(todos.map((todo) => {todo.id === id ? {...todo, completed: todo.completed === 1 ? 0 : 1} : todo}));
  // };
  // 아래와 같은 코드

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id 
          ? {...todo, completed: todo.completed === 1 ? 0 : 1} //결과값 리턴
          : todo
      )
    );
  };

    useEffect(() => {
        inputRef.current.focus();
        console.log('useEffect');
    });

    return (
        <div className='App' style={wrap}>
            <h1>TODO LIST</h1>
            <Input 
                insertTodo={insertTodo} 
                input={input} 
                handleChangeText={handleChangeText} 
                inputRef={inputRef} 
            />

            <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />

        </div>
    );
};

export default App;
