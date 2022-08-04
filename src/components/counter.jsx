import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value:this.props.counter.value,
    //     tags:[]
    // };

    componentDidUpdate(prevProps, prevState){
        if (prevProps.counter.value !== this.props.counter.value){
            //Ajax call
        }
    }

    componentWillUnmount(){
        console.log("unmount")
    }

    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
    }

    // handleIncrement= () =>{
    //     this.setState({value:this.state.value+1})
    // };

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }
    render() {
        return (
        <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            // onClick={ ()=> this.handleIncrement()}
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* { this.state.tags.length === 0 && "Please create new tag"} */}
            {/* {this.renderTags()} */}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;