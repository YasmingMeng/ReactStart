import React, {Component, useState } from "react";
import {connect} from "react-redux"
import { HeaderWrapper, Logo, Icon } from "./style";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 定义store数据更改的响应函数
        // f1() {
            // const action = {
                // 定义数据
            // };
            // dispatch(action);
        // }
    }
}
const Header = (props) => {
    return (
        <HeaderWrapper > 
            <Logo />
            <div className="flex flex-nowrap flex-row basis-6/12 justify-between text-blue-700">
                <div>首页</div>
                <div>关于</div>
                <div>最新</div>
                <div>归档</div>
                <div>闻道</div>
                <div>思悟</div>
                <div>联系我</div>
            </div>
            <div className="flex flex-nowrap flex-row justify-between text-blue-700">   
                <Icon 
                className="iconfont"
               >&#xe66f;</Icon>
            </div>
        </HeaderWrapper>
    )
}

// class Header extends Component {
//     // !-- 使用store进行状态管理，不需要construct构建props传递数据
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       // isShowSlider: false,
//     //       // isIndexPage: false,
//     //     };
//     //   }
//     render() {
//         return (
//         )
//     }
     
//     focusGitIcon() {
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Header);