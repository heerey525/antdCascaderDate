import React from 'react';
import { Cascader, Select, Spin } from 'antd';
import options from './cities'
import getCity from './city/city.json';
import getProvince from './city/province.json';

const { Option } = Select;

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cascader: [], // Cascader级联 当前省市区
      province: getProvince[0].name, // 当前省
      cities: getCity[getProvince[0].id], // 当前省下市
      cityValue: getCity[getProvince[0].id][0].name, // 当前市
      provinceCode: '', // 当前省code
      cityCode: '', // 当前市code
    }
  }
  onChange = (value, i) => {
    this.setState({
      cascader: value,
    }, () => {
      console.log(value);
      console.log(i);
    })
  }
  // 省下拉框改变
  changeProvince = (e, i) => {
    this.setState({
      province: e,
      cities: getCity[i.key],
      cityValue: getCity[i.key][0].name,
      provinceCode: i.key,
    },() => {
      console.log({province:e,cities: getCity[i.key],cityValue:getCity[i.key][0].name,provinceCode:i.key})
    })
  }
  // 市下拉框改变
  changeCity = (e, i) => {
    this.setState({
      cityValue: e,
      cityCode: i.key
    },() => {
      console.log({cityValue: e, cityCode: i.key})
    })
  }

  render(){
    const { cascader, province, cities, cityValue } = this.state;
    return (
      <div className="App">
        Cascader级联选择：<Cascader value={cascader} options={options} onChange={this.onChange} placeholder="选择Cascader地址" style={{ width: 300 }} />
        <br/>二级联动：<Spin spinning={false}>
          <Select
            value={province}
            onChange={this.changeProvince}
            style={{ width: 180 }}
          >
            {(getProvince.length > 0) ? getProvince.map(province => (
              <Option key={province.id} value={province.name} >{province.name}</Option>
            )) : ''}
          </Select>&nbsp;
          <Select
            value={cityValue}
            onChange={this.changeCity}
            style={{ width: 180 }}
          > 
            {(cities.length > 0) ? cities.map(city => (
              <Option key={city.id} value={city.name}>{city.name}</Option>
            )) : ''}
          </Select>
        </Spin>
      </div>
    )
  }
}
