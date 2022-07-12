import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'
import { remainingToDoSelector} from '../../redux/selector';
export default function TodoList() {
  const dispatch = useDispatch()
  const todoList = useSelector(remainingToDoSelector);
  const [toDoName, setToDoName] = useState('');
  const [toDopriority, setToDoPriority] = useState('Medium');
  const handleAddButton = () =>{
    dispatch(addTodoAction(
      {
        id: uuidv4(), 
        name: toDoName, 
        completed: false, 
        priority: toDopriority
      }
    ))
    setToDoName('');
  }

  const handleNameChanged = (event) => {
    setToDoName(event.target.value);
  }
  const handleCompletedChanged = (event) => {
    setToDoName(event.value);
  }
  const handlePriorityChanged = (value) => {
    setToDoPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
          {todoList.map((todo => (<Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>)))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={toDoName} onChange={handleNameChanged}/>
          <Select value={toDopriority} onChange={handlePriorityChanged} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
