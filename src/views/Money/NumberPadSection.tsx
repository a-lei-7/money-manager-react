import styled from 'styled-components';
import React, {useState} from 'react';
// import Icon from '../../components/Icon';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  >.output{
    background-color:#fff;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.pad{
    padding-bottom: 16px;
    display:flex;
    flex-wrap: wrap;
    >button{
      font-size: 18px;
      border: none;
      width: 25%;
      height: 64px;
      position: relative;   
      .icon{
        fill:  #fd6600;
        height: 1.3em;
        width: 1.3em;
        
      }
      &.symbol{
        color: #fd6600;
        font-size:1.5em;
      }
      &.ac{
        color: #fd6600;
        font-size: 1.3em;
      }
      &.ok{
        font-size: 1.3em;
          &.ok::before{
            color: #fff;
            text-align: center;
            line-height: 50px;
            content: 'ok';
            position: absolute;
            top: 50%;
            left: 50%; 
            transform: translate(-50%,-50%);
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color:#fd6600;
          }
      }
      &:active:not(.ok):not(.symbol):not(.ac){
      font-weight: 700;
      }
      &:active:not(.ok):not(.symbol):not(.ac)::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: 50px;
        width: 50px;
        background-color:rgba(0,0,0,0.075);
        border-radius: 50%;
      }
      
    }
  }
`;
const NumberPadSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onclickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '+':
        if (output[output.length - 1] === '+') {return;}
        else if (output[output.length - 1] === '-') {return;} else {
          setOutput(output + text);
        }
        break;
      case '-':
        if (output[output.length - 1] === '-') {
          return;
        } else if (output[output.length - 1] === '+') {return;}
        else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {return;} else {
          setOutput(output + '.');
        }
        break;
      case 'del':
        if (output.length === 1) {
          setOutput('');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case 'AC':
        setOutput('');
        break;
      case 'ok':
        console.log('确认');
        break;
    }
  }
  return(
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad" onClick={onclickButtonWrapper}>
        <button className="selected">1</button>
        <button>2</button>
        <button>3</button>
        <button className="ac">AC</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="symbol">
          {/*<Icon name="add"/>*/}
          +
        </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="symbol">
          {/*<Icon name="reduce"/>*/}
          -
        </button>
        <button>.</button>
        <button>0</button>
        <button className="symbol">
          {/*<Icon name="delete"/>*/}
          del
        </button>
        <button className="ok">ok</button>
      </div>
    </Wrapper>
  )
}
export {NumberPadSection}