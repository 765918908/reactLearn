
import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css"
import "./Example.css"
import { Button, Input, Select } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import axios from "axios"

const { Option } = Select;

function Example() {
    const [moneySwitch, setMoneySwitch] = useState(0)//货币切换
    const [defaultValue, setDefaultValue] = useState("卢布")//默认货币类型
    const [moneyValue, setMoneyValue] = useState(0)//价格
    const [taskValue, setTaskValue] = useState('任务A')//任务
    const [finishList, setFinishList] = useState([])
    const [open, setOpen] = useState(false)

    const [moneyChangeValue, setMoneyChangeValue] = useState([0])

    useEffect(() => {
        axios.get("https://api.globus.furniture/forex ")
            .then((res) => {
                console.log('res.data', res.data)
                setOpen(true)
                setMoneySwitch(res.data)
            })
    }, [])

    function handleChange(e) {
        setDefaultValue(e)
    }



    function addItem() {
        if (!open) return;
        let rubVal = moneySwitch.RUB.value//卢布汇率
        let usdVal = moneySwitch.USD.value//美金汇率
        let rnb, dollar, rub;
        if (defaultValue === "卢布") {
            //计算出人民币和美金
            rub = parseInt(moneyChangeValue)
            rnb = (moneyChangeValue / rubVal)
            dollar = (rnb * usdVal)
        } else if (defaultValue === "人民币") {
            rnb = parseInt(moneyChangeValue)
            //计算出卢布和美金
            rub = (rnb * rubVal)
            dollar = (rnb * usdVal)
        } else if (defaultValue === "美元") {
            //计算出人民币和卢布
            dollar = parseInt(moneyChangeValue)
            rnb = dollar / usdVal
            rub = rnb * rubVal
        }
        let o = {
            taskValue: taskValue,
            moneyValue: moneyValue,
            dollar: dollar,
            rnb: rnb,
            rub: rub
        }
        setFinishList([...finishList, o])
        return;
    }

    return (
        <div className="wrapp">

            <Input value={taskValue} onChange={(e) => setTaskValue(e.target.value)} addonBefore="任务" className="input" style={{ width: `200px` }} placeholder="请输入任务名称"></Input><br />


            <Input value={moneyValue} onChange={(e) => setMoneyValue(e.target.value)} addonBefore="价格" className="input" style={{ width: `200px` }} placeholder="请输入价格"></Input><br />

            <Input.Group compact className="input">
                <Select defaultValue={defaultValue} style={{ width: 120 }} onChange={handleChange}>
                    <Option defaultValue value="卢布">卢布</Option>
                    <Option value="人民币">人民币</Option>
                    <Option value="美元">美元</Option>
                </Select>
                <Input style={{ width: '200px' }} value={moneyChangeValue} onChange={(e) => setMoneyChangeValue(e.target.value)} placeholder="请输入" defaultValue="0" />
            </Input.Group>

            <Button onClick={addItem} className="input" type="primary" value="添加">添加</Button><br />

            <div style={{ display: "inline-block" }}>
                <div className="flex justify-between task-content">
                    <div className="no-finish" style={{ borderRight: "1px solid #d9d9d9" }}>
                        <div className="title">未完成</div>
                        <div className="scroll-box">

                            {
                                finishList.map((val, index) => {
                                    return (
                                        <>
                                            <div key={index + val} className="item">
                                                <Checkbox  ></Checkbox>
                                                <div>任务名:{val.taskValue}</div>
                                                <div>卢布:{val.rub}</div>
                                                <div>人民币:{val.rnb}</div>
                                                <div>美元 :{val.dollar}</div>
                                            </div>
                                        </>
                                    )

                                })
                            }
                        </div>

                        <div className="total">总支出:100美元</div>

                    </div>

                    <div className="finish">
                        <div className="title bg-green">已完成</div>
                        <div className="scroll-box">
                            <div>
                                <Checkbox></Checkbox>
                                <div>任务名:A计划</div>
                                <div>卢布:1</div>
                                <div>人民币:1</div>
                                <div>美元 :1</div>
                            </div>
                            <div>总支出:100美元</div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Example