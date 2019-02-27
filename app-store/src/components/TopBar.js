import React, { Component } from 'react';
import { Menu, Icon, Input, Select, Spin } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class TopBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: false,
      value: []
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }
  fetchUser(e) {
    this.setState({
      data: [{
        value: '1',
        text: "data-1"
      }, {
        value: '2',
        text: "data-2"
      }],
      fetching: true
    })
  }
  handleChange(value) {
    this.setState({
      value,
      data: [],
      fetching: false,
    })
  }
  render() {
    const { fetching, data, value } = this.state;
    return (
      <div id="mall-topbar">
        <div className="mall-logo">
          DUDUMALL
        </div>
        <div className="mall-meun">
          <div className="search-input">
            <Select
              showSearch
              allowClear
              value={value}
              placeholder='Select item'
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              onSearch={(e) => this.fetchUser(e)}
              onChange={(e) => this.handleChange(e)}
              notFoundContent={null}
              style={{ width: '250px' }}
            >
              {data.length > 0 && data.map(d => <Select.Option key={d.value}>{d.text}</Select.Option>)}
            </Select>
          </div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="shop">
              <Icon type="shop" />商城
        </Menu.Item>
            <Menu.Item key="shopping-cart">
              <Icon type="shopping-cart" />购物车
        </Menu.Item>
            <Menu.Item key="user">
              <img className="product-icon" src={require(`../imgs/user-01.svg`)} />
              {/* <Icon type="user" /> */}
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
