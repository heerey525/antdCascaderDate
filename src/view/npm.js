import React from 'react';
import { Cascader, Select, Spin } from 'antd';
import { antdOptions, cityData, provinceData } from '@heerey525/china-division-data'

const { Option } = Select;

export default class Npm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cascader: [], // Cascader级联 当前省市区
      province: provinceData[0].name, // 当前省
      cities: cityData[provinceData[0].id], // 当前省下市
      cityValue: cityData[provinceData[0].id][0].name, // 当前市
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
      cities: cityData[i.key],
      cityValue: cityData[i.key][0].name,
      provinceCode: i.key,
    },() => {
      console.log({province:e,cities: cityData[i.key],cityValue:cityData[i.key][0].name,provinceCode:i.key})
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
        Cascader级联选择：<Cascader value={cascader} options={antdOptions} onChange={this.onChange} placeholder="选择Cascader地址" style={{ width: 300 }} />
        <br/>二级联动：<Spin spinning={false}>
          <Select
            value={province}
            onChange={this.changeProvince}
            style={{ width: 180 }}
          >
            {(provinceData.length > 0) ? provinceData.map(province => (
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
