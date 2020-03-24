import React, { Component } from 'react';
import {Card, Table, Button,message} from 'antd'
import {PlusOutlined,ArrowRightOutlined  } from '@ant-design/icons'
import {LinkButton} from '../../components/link-button'

import {reqCategorys} from '../../api'

export default class Category extends Component{

    state={
        categorys:[],
        loading:false,
        subCategorys:[],
        parentId:'0',
        parentName:'',
    }

    initColumns=()=>{
        
        this.columns = [
            {
              title: '分類的名稱',
              dataIndex: 'name',
              key: 'name',
            },
            {
                title: '操作',
                width:'300px',
                render: (category) => (
                <span>
                    <LinkButton>修改分類</LinkButton>
                    {this.state.parentId==='0'?<LinkButton onClick={()=>this.showSubCategorys(category)}>查看子分類</LinkButton>:null}
                    
                </span>)
            },
        ];
    }
    showSubCategorys = (category) => {
        // 更新状态
        this.setState({
          parentId: category._id,
          parentName: category.name
        }, () => { // 在状态更新且重新render()后执行
          console.log('parentId', this.state.parentId) // '0'
          // 获取二级分类列表显示
          this.getCategorys()
        })
    
        // setState()不能立即获取最新的状态: 因为setState()是异步更新状态的
        // console.log('parentId', this.state.parentId) // '0'
      }
    showCategorys=()=>{
        this.setState({
            subCategorys:[],parentId:'0',parentName:''
        })
    }

    getCategorys = async (parentId) => {

        // 在发请求前, 显示loading
        this.setState({loading: true})
        parentId = parentId || this.state.parentId
        // 发异步ajax请求, 获取数据
        const result = await reqCategorys(parentId)
        // 在请求完成后, 隐藏loading
        this.setState({loading: false})
        if(result.status===0) {
            // 取出分类数组(可能是一级也可能二级的)
        const categorys = result.data
        if(parentId==='0') {
            // 更新一级分类状态
            this.setState({
            categorys
            })
            console.log('----', this.state.categorys.length)
        } else {
            // 更新二级分类状态
            this.setState({
            subCategorys: categorys
            })
        }
        } else {
        message.error('获取分类列表失败')
        }
    }
    

    UNSAFE_componentWillMount(){
        this.initColumns()
    }

    componentDidMount(){
        this.getCategorys()
    }

    render(){
        
        const {categorys,subCategorys,parentId,parentName,loading} =this.state;
        

        const title=parentId==='0'?' 一級分列表':(<span>
                <LinkButton onClick={this.showCategorys}> 一級分列表</LinkButton>
                <ArrowRightOutlined style={{marginRight:'5px'}}/>
                <span>{parentName}</span>
            </span>
        )
        const extra =(
            <Button type='primary'>
                <PlusOutlined/>
                新增
            </Button>
        )
        return(
            <div>
                <Card title={title} extra={extra}>
                    <Table dataSource={parentId==='0'?categorys:subCategorys} 
                        columns={this.columns} 
                        bordered
                        rowKey='_id'
                        loading={loading}
                        pagination={{defaultPageSize:5,showQuickJumper:true}} />;
                </Card>
            </div>
           
        )
    }
}