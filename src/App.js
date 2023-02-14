import { Typography, Divider } from 'antd';
import Filter from './components/filter/Filter';
import AddTodo from './components/addTodo/AddTodo';

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
      <Filter />
      <Divider/>
      <AddTodo/>
    </div>
  );
}

export default App;