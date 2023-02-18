import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../todoList/Todo';
import { addTodo } from '../../store/action';
import { v4 as uuidv4 } from 'uuid';
import { addTodoList } from '../../store/selectors';

export default function AddTodo() {

  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')
  const list = useSelector(addTodoList)
  const dispatch = useDispatch()

  const handleAddButtonClick = () => {
    let data = {
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }
    dispatch(addTodo(data))

    setTodoName('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          list.length > 0 && list.map((item, index) => (
            <Todo name={item.name} priority={item.priority} key={index} />
          ))
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
          <Select defaultValue="Medium" value={priority} onChange={(e) => setPriority(e)}>
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
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}