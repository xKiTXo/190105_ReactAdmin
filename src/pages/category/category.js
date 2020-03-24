import React, { Component } from 'react';
import {Card, Table, Button} from 'antd'
import {PlusOutlined } from '@ant-design/icons'

import {LinkButton} from '../../components/link-button'


export default class Category extends Component{


    render(){

        const dataSource = [
            {
                "parentId": "0",
                "_id": "5c2ed631f352726338607046",
                "name": "分类001",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5c2ed647f352726338607047",
                "name": "分类2",
                "__v": 0
              },
              {
                "parentId": "0",
                "_id": "5c2ed64cf352726338607048",
                "name": "1分类3",
                "__v": 0
              }
          ];
          
          const columns = [
            {
              title: '分類的名稱',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: '操作',
                width:'300px',
                render: () => (
                <span>
                    <LinkButton>修改分類</LinkButton>
                    <LinkButton>查看子分類</LinkButton>
                </span>)
            },
          ];

        const title=' 一級分列表'
        const extra =(
            <Button type='primary'>
                <PlusOutlined/>
                新增
            </Button>
        )
        return(
            <div>
                <Card title={title} extra={extra}>
                    <Table dataSource={dataSource} 
                        columns={columns} 
                        bordered
                        rowKey='_id'/>;
                </Card>
            </div>
           
        )
    }
}