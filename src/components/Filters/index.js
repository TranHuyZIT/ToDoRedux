import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import filtersSlice from './FiltersSlice';
// import { filterSearchChangeAction, filterStatusChangeAction, filterPrioritiesChangeAction } from '../../redux/actions';
const { Search } = Input;



export default function Filters() {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [priorities, setPriorities] = useState([]);
  const handleSearchChange = (e) => {
    setInputSearch(e.target.value);
  }

  const handleStatusChange = (e) =>{
    setStatus(e.target.value);
  }

  const handlePriorityChanged = (value) => {
    setPriorities(value);
  }

  useEffect(() => {
    dispatch(filtersSlice.actions.searchTextChange(inputSearch));
  }, [inputSearch])

  useEffect(() => {
    dispatch(filtersSlice.actions.statusChange(status));
  }, [status])
  
  useEffect(() => {
    dispatch(filtersSlice.actions.prioritiesChange(priorities))
  }, [priorities])
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='Input search text' value={inputSearch} onChange={handleSearchChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>

        <Radio.Group style={{display: 'flex', alignItems: 'center', justifyContent:'center'}} onChange={handleStatusChange}>
          <Radio defaultChecked value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>Uncompleted</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select priority'
          style={{ width: '100%' }}
          onChange={handlePriorityChanged}
        >
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
      </Col>
    </Row>
  );
}
