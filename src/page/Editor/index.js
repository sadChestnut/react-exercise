import React from 'react';
import { Card, Button } from 'antd';
import {convertFromRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

//import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

export default class RichEditor extends React.Component{
    // state={
    // }
    // ClearContent =()=>{
    //     this.setState({
    //         editorState:''
    //     })
    // }
    // onEditorStateChange = (editorState) => {
    //     this.setState({
    //         editorState,
    //     });
    // };
    // render(){
    //     return(
    //         <div>
    //             <Card>
    //                 <Button type="primary" onClick={this.ClearContent}>清空内容</Button>
    //             </Card>
    //             <Card title="富文本编辑">
    //                 <Editor
    //                     editorState={this.state.editorState}
    //                     onEditorStateChange={this.onEditorStateChange}
    //                 />
    //             </Card>
    //         </div>
    //
    //     )
    // }
    constructor(props) {
        super(props);
        const contentState = convertFromRaw(content);
        this.state = {
            contentState,
        }
    }

    onContentStateChange = (contentState) => {
        this.setState({
            contentState,
        });
    };

    render() {
        const { contentState } = this.state;
        return (
            <Editor
                // wrapperClassName="demo-wrapper"
                // editorClassName="demo-editor"
                onContentStateChange={this.onContentStateChange}
            />
        );
    }
}