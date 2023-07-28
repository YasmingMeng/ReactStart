import React, {Component, useState } from "react";
import { HeaderWrapper, Logo, Icon } from "./style";

export default function Header() {
    // constructor(props) {
    //     super(props)
    //    this.state  = {
    //     focused: false
    //    }
        // this.focusGitIcon = this.focusGitIcon.bind(this);
        // this.blurGitIcon = this.blurGitIcon.bind(this);
    // }
    // render() {
        const [focused, setFocused] = useState(false);
        return (
            <>
                <HeaderWrapper > 
                    <Logo />
                    {/* <GithubIcon /> */}
                    <div className="flex flex-nowrap flex-row basis-6/12 justify-between text-blue-700">
                        <div>首页</div>
                        <div>关于</div>
                        <div>博客</div>
                        <div>联系我</div>
                    </div>
                    <div className="flex flex-nowrap flex-row justify-between text-blue-700">   
                        <Icon 
                        className={focused ? 'focused iconfont' : 'iconfont'} 
                        onClick={focusGitIcon}
                        onBlur={blurGitIcon}>&#xe66f;</Icon>
                    </div>
                </HeaderWrapper>
            </>
        )

        
        function focusGitIcon() {
            setFocused(!focused)
            console.log(focused)
        }

        function blurGitIcon() {
            setFocused({
                    focused: false
                })
                console.log(setFocused)
            }
    // }
}