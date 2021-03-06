import styled from 'styled-components';

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

export{Wrapper}